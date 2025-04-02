import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from'react';
import axios from 'axios';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password!== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/signup', {
        username,
        email,
        password,
      });
      console.log(response.data);
      // redirect to login page or dashboard
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Sign Up | RunAsh AI</title>
        <meta name="description" content="Sign up for RunAsh AI" />
      </Head>
      <header className="bg-gray-900 py-12">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-white">Sign Up</h1>
          <p className="text-lg text-white">Create an account to get started with RunAsh AI</p>
        </div>
      </header>
      <main className="container mx-auto p-4 pt-6">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
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
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Up
            </button>
            {error && (
              <div className="text-red-500 mt-4">{error}</div>
            )}
          </form>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Already have an account?</h2>
          <Link href="/login">
            <a className="text-blue-500 hover:text-blue-700">Log In</a>
          </Link>
        </section>
      </main>
    </div>
  );
      }
