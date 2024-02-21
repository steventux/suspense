"use client";
import React,{useEffect, useState} from "react";
import useSWR from "swr";
import { fetcher } from "@/app/lib";
import Profile from "@/app/components/Profile";
import { ProfileModel } from "@/app/types";
import Link from "next/link";

export default function Profiles() {
  const [profiles, setProfiles] = useState<ProfileModel[]>([]);
  const { data, error, isLoading } = useSWR<any>(`/api/profiles`, fetcher);

  useEffect(() => {
    if (data) {
      setProfiles(data.profiles);
    }
  }, [data,isLoading]);
  
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;
  
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
              profiles && profiles.map((item : ProfileModel)=><Profile key={item.id} {...item} />)
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
