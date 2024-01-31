"use client"
import React, {useState } from 'react'
import { useRouter } from 'next/navigation'
export default function ProfileCreate() {
  const router = useRouter()
  const [name, setName] = useState<string>('');
  const [forkPsi, setForkPsi] = useState<string>('');
  const [forkSag, setForkSag] = useState<string>('');
  const [forkHsc, setForkHsc] = useState<string>('');
  const [forkLsc, setForkLsc] = useState<string>('');
  const [forkHsr, setForkHsr] = useState<string>('');
  const [forkLsr, setForkLsr] = useState<string>('');
  const [shockPsi, setShockPsi] = useState<string>('');
  const [shockSag, setShockSag] = useState<string>('');
  const [shockHsc, setShockHsc] = useState<string>('');
  const [shockLsc, setShockLsc] = useState<string>('');
  const [shockHsr, setShockHsr] = useState<string>('');
  const [shockLsr, setShockLsr] = useState<string>('');

  const addProfile = async (e: any) => {
    e.preventDefault()
    if (name != "") {
      const formData = {
        name: name,
        forkPsi: forkPsi,
        forkSag: forkSag,
        forkHsc: forkHsc,
        forkLsc: forkLsc,
        forkHsr: forkHsr,
        forkLsr: forkLsr,
        shockPsi: shockPsi,
        shockSag: shockSag,
        shockHsc: shockHsc,
        shockLsc: shockLsc,
        shockHsr: shockHsr,
        shockLsr: shockLsr
      }
      const add = await fetch('/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const content = await add.json();
      if(content.success>0)
      {
        router.push('/profile');
      }

    }
  };

  const labelClassNames = 'block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4';
  const inputClassNames = 'bg-gray-200 appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500';

  return (
    <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={addProfile}>
      <h1 className="text-xl font-bold">Add profile</h1>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="name">
            Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="name" type="text" onChange={(e:any)=>setName(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="forkPsi">
            Fork PSI
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="forkPsi" type="text"  onChange={(e:any)=>setForkPsi(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="forkSag">
            Fork sag
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="forkSag" type="text"  onChange={(e:any)=>setForkSag(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="forkHsc">
            Fork HSC
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="forkHsc" type="text" onChange={(e:any)=>setForkHsc(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="forkLsc">
            Fork LSC
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="forkLsc" type="text" onChange={(e:any)=>setForkLsc(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="forkHsr">
            Fork HSR
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="forkHsr" type="text" onChange={(e:any)=>setForkHsr(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="forkLsr">
            Fork LSR
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="forkLsr" type="text" onChange={(e:any)=>setForkLsr(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="shockPsi">
            Shock PSI
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="shockPsi" type="text" onChange={(e:any)=>setShockPsi(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="shockSag">
            Shock sag
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="shockSag" type="text" onChange={(e:any)=>setShockSag(e.target.value)}/>
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="shockHsc">
            Shock HSC
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="shockHsc" type="text" onChange={(e:any)=>setShockHsc(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="shockLsc">
            Shock LSC
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="shockLsc" type="text" onChange={(e:any)=>setShockLsc(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="shockHsr">
            Shock HSR
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="shockHsr" type="text" onChange={(e:any)=>setShockHsr(e.target.value)}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={labelClassNames} htmlFor="shockLsr">
            Shock LSR
          </label>
        </div>
        <div className="md:w-2/3">
          <input className={inputClassNames} id="shockLsr" type="text" onChange={(e:any)=>setShockLsr(e.target.value)}/>
        </div>
      </div>

      <div className='w-full py-2'>
        <button className="w-20 p-2 text-white border-gray-200 border-[1px] rounded-sm bg-green-400">Submit</button>
      </div>
    </form>
  )
}


