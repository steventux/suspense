'use client'
import { fetcher } from '@/app/lib'
import useSWR from 'swr'

export default function Detail({params}: {params:{id :number}}) {
  const {data: data, isLoading, error}  = useSWR(`/api/profiles/${params.id}`,fetcher)
  if(isLoading) return <div><span>Loading...</span></div>
  if (!data || !data.profile) return null;
  const profile = data.profile;
  return (
    <div className='w-full'>
      <h2 className='text-center font-bold text-3xl py-3'>{profile.name}</h2>

      <div className='w-full max-w-4xl m-auto border-[1px] p-3 border-gray-500 rounded-md'>
        <dl className='divide-y divide-gray-100'>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold'>Fork PSI</dt>
            <dd className=' ml-3'>{profile.forkPsi}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Fork sag</dt>
            <dd className=' ml-3'>{profile.forkSag}%</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Fork HSC</dt>
            <dd className=' ml-3'>{profile.forkHsc}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Fork LSC</dt>
            <dd className=' ml-3'>{profile.forkLsc}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Fork HSR</dt>
            <dd className=' ml-3'>{profile.forkHsr}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Fork LSR</dt>
            <dd className=' ml-3'>{profile.forkLsr}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Shock PSI</dt>
            <dd className=' ml-3'>{profile.shockPsi}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Shock sag</dt>
            <dd className=' ml-3'>{profile.shockSag}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Shock HSC</dt>
            <dd className=' ml-3'>{profile.shockHsc}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Shock LSC</dt>
            <dd className=' ml-3'>{profile.shockLsc}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Shock HSR</dt>
            <dd className=' ml-3'>{profile.shockHsr}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className='font-bold '>Shock LSR</dt>
            <dd className=' ml-3'>{profile.shockLsr}</dd>
          </div>
         </dl>
       </div>
    </div>
  )
}


