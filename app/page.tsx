import Image from 'next/image'
import Title from './components/title'
import dynamic from 'next/dynamic'
const SuspenseTable = dynamic(() => import('./components/suspense-table'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Title text="Suspense" description="Keep track of your settings" />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <SuspenseTable />
      </div>
    </main>
  )
}
