import React from 'react'
import { ProfileModel } from '../types'
import Link from 'next/link'
export default function Profile(params: ProfileModel) {
  return (
    <tr className="text-center">
      <td className='border border-slate-300'>
        <Link href={`/profiles/read/${params.id}`} className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>{params.name}</Link>
      </td>
      <td className='border border-slate-300'>{params.forkPsi}</td>
      <td className='border border-slate-300'>{params.forkSag}%</td>
      <td className='border border-slate-300'>{params.shockPsi}</td>
      <td className='border border-slate-300'>{params.shockSag}%</td>
      <td className='w-52 border border-slate-300'>
        <Link href={`/profiles/edit/${params.id}`} className='bg-yellow-500 p-2 inline-block text-white text-sm'>Edit</Link>
        <Link href={`/profiles/delete/${params.id}`} className='bg-red-500 ml-3 p-2 inline-block text-white text-sm'>Delete</Link>
      </td>
    </tr>
  )
}

