"use client";
import { signIn } from "next-auth/react";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md text-center">
          <h1 className="text-2xl font-bold mb-6">Login to QuizSphere</h1>

          {/* Email/Password */}
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
          <div className="space-y-3 mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Login
            </button>
            <p>or</p>
            {/* Google login */}
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mb-4"
            >
              Log in with Google
            </button>
          </div>

          <p className="text-gray-500 mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
