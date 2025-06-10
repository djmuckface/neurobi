import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Neurobi – Your AI Chief of Life</title>
        <meta name="description" content="An intelligent assistant to manage your life’s complexity." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-6">
        <img src="/logo.png" alt="Neurobi Logo" className="w-20 mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-center">Your AI Chief of Life</h1>
        <p className="text-center max-w-xl text-lg mb-6">
          Neurobi is your intelligent life operating system – coordinating health, tasks, goals, and energy with ease.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 mb-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mb-3 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <p className="text-green-600 mt-4">Thank you! You're on the list.</p>
        )}
        <footer className="mt-10 text-sm text-gray-500 text-center">
          Launching 2025 • contact@neurobi.ai
        </footer>
      </main>
    </>
  );
}
