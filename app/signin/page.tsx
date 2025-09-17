"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
      <div className="w-full max-w-sm bg-gray-100 dark:bg-neutral-900 p-8 rounded-xl shadow-md text-center transition-colors">
        <h1 className="text-2xl font-bold mb-6">Login to QuizSphere</h1>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 rounded-lg bg-gray-200 dark:bg-neutral-800 text-black dark:text-white placeholder-black dark:placeholder-white focus:outline-none focus:ring-2 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded-lg bg-gray-200 dark:bg-neutral-800 text-black dark:text-white placeholder-black dark:placeholder-white focus:outline-none focus:ring-2 transition-colors"
          />
        </form>

        <div className="space-y-3 mt-6">
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded transition-colors"
          >
            Login
          </button>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full bg-black text-white py-2 rounded mb-4 transition-colors"
          >
            Log in with Google
          </button>
        </div>

        <p className="mt-4">
          Don’t have an account?{" "}
          <a href="/signup" className="font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
