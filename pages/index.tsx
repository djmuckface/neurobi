
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center flex-col text-center p-6">
      <Head>
        <title>Neurobi</title>
      </Head>
      <Image src="/logo.png" alt="Neurobi Logo" width={80} height={80} />
      <h1 className="text-4xl font-bold mt-4">Welcome to Neurobi</h1>
      <p className="text-gray-600 mt-2 max-w-xl">Your AI-powered personal life operating system is launching soon.</p>
    </div>
  );
}
