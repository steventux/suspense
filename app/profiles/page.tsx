"use client";
import React,{useEffect, useState} from "react";
import useSWR from "swr";
import { fetcher } from "../lib";
import Profile from "../components/Profile";
import { ProfileModel } from "../types";
import Link from "next/link";

export default function Profiles() {
  const [profiles,setProfiles] = useState<ProfileModel[]>([]);
  const { data, error, isLoading } = useSWR<any>(`/api/profiles`, fetcher);
  useEffect(()=>{
    if(data)
    {
      setProfiles(data);
    }
  },[data,isLoading]);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  let delete_Profile : ProfileModel['deleteProfile']= async (id:number) => {
    const res = await fetch(`/api/profiles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const content = await res.json();
    if(content.success>0)
    {

      setProfiles(profiles?.filter((profile:ProfileModel)=>{  return profile.id !== id  }));
    }
  }
  return (
    <div className="w-full max-w-7xl m-auto">
      <table className="w-full border-collapse border border-slate-400">
        <thead>
          <tr className="text-center">
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Fork PSI</th>
            <th className="border border-slate-300">Fork Sag</th>
            <th className="border border-slate-300">Shock PSI</th>
            <th className="border border-slate-300">Shock Sag</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
           {
              profiles && profiles.map((item : ProfileModel)=><Profile key={item.id} {...item} deleteProfile = {delete_Profile} />)
           }
           <tr>
              <td colSpan={6}>
                 <Link href={`/profiles/create`} className="bg-green-500 p-2 inline-block text-white">Create</Link>
              </td>
           </tr>
        </tbody>
      </table>
    </div>
  );
}

