"use client"
import React, {useState } from 'react'
import { useRouter } from 'next/navigation'
import LabelAndTextField from '../../components/form/LabelAndTextField'
import Submit from '../../components/form/Submit'

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
      if(content.success > 0) {
        router.push(`/profiles/read/${content.profile.id}`);
      }
    }
  };

  return (
    <form className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={addProfile}>

      <div className="m-auto w-full text-center mb-10">
        <h1 className="text-xl font-bold">Add a new suspension profile</h1>
      </div>
      <LabelAndTextField fieldName={'name'} fieldValue={name} fieldSetter={setName} labelText={'Name'} />
      <LabelAndTextField fieldName={'forkPsi'} fieldValue={forkPsi} fieldSetter={setForkPsi} labelText={'Fork PSI'} />
      <LabelAndTextField fieldName={'forkSag'} fieldValue={forkSag} fieldSetter={setForkSag} labelText={'Fork sag'} />
      <LabelAndTextField fieldName={'forkHsc'} fieldValue={forkHsc} fieldSetter={setForkHsc} labelText={'Fork HSC'} />
      <LabelAndTextField fieldName={'forkLsc'} fieldValue={forkLsc} fieldSetter={setForkLsc} labelText={'Fork LSC'} />
      <LabelAndTextField fieldName={'forkHsr'} fieldValue={forkHsr} fieldSetter={setForkHsr} labelText={'Fork HSR'} />
      <LabelAndTextField fieldName={'forkLsr'} fieldValue={forkLsr} fieldSetter={setForkLsr} labelText={'Fork LSR'} />
      <LabelAndTextField fieldName={'shockPsi'} fieldValue={shockPsi} fieldSetter={setShockPsi} labelText={'Shock PSI'} />
      <LabelAndTextField fieldName={'shockSag'} fieldValue={shockSag} fieldSetter={setShockSag} labelText={'Shock sag'} />
      <LabelAndTextField fieldName={'shockHsc'} fieldValue={shockHsc} fieldSetter={setShockHsc} labelText={'Shock HSC'} />
      <LabelAndTextField fieldName={'shockLsc'} fieldValue={shockLsc} fieldSetter={setShockLsc} labelText={'Shock LSC'} />
      <LabelAndTextField fieldName={'shockHsr'} fieldValue={shockHsr} fieldSetter={setShockHsr} labelText={'Shock HSR'} />
      <LabelAndTextField fieldName={'shockLsr'} fieldValue={shockLsr} fieldSetter={setShockLsr} labelText={'Shock LSR'} />

      <Submit />
    </form>
  )
}
