"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from'react';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      // redirect to dashboard or profile page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Login | RunAsh AI</title>
        <meta name="description" content="Login to RunAsh AI" />
      </Head>
      <header className="bg-gray-900 py-12">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-white">Login</h1>
          <p className="text-lg text-white">Log in to your RunAsh AI account</p>
        </div>
      </header>
      <main className="container mx-auto p-4 pt-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </button>
            {error && (
              <div className="text-red-500 mt-4">{error}</div>
            )}
          </form>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Don't have an account?</h2>
          <Link href="/signup">
            <a className="text-blue-500 hover:text-blue-700">Sign Up</a>
          </Link>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Forgot your password?</h2>
          <Link href="/forgot-password">
            <a className="text-blue-500 hover:text-blue-700">Reset Password</a>
          </Link>
        </section>
      </main>
    </div>
  );
        }
