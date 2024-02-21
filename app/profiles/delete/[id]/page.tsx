"use client"
import React, {useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { fetcher } from '@/app/lib'
import useSWR from 'swr'

export default function ProfileDelete({params} :{params:{id:number}}) {
  const router = useRouter()
  const [name, setName] = useState<string>('');
  const {data : profile,isLoading, error} = useSWR(`/api/profiles/${params.id}`,fetcher)

  useEffect(()=>{
    if (profile) {
      setName(profile.name);
    }
  },[profile, isLoading])

  const deleteProfile = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`/api/profiles/${params.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const content = await res.json();
    if(content.success > 0)
    {
      router.push('/profiles');
    }
  };

  if (isLoading) return <div><span>Loading...</span></div>
  if (!profile) return null;
  
  const labelClassNames = 'block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4';
  const inputClassNames = 'bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500';

  return (
    <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={deleteProfile}>
      <h1 className="text-xl font-bold">Are you sure you want to delete suspension profile {profile.name}?</h1>

      <div className='w-full py-2'>
        <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-red-400">Delete</button>
      </div>
    </form>
  )
}

