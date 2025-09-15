"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-full max-w-sm bg-neutral-900 p-8 rounded-xl shadow-md text-center">
          <h1 className="text-2xl font-bold mb-6 text-white">
            Login to QuizSphere
          </h1>

          {/* Email/Password */}
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 placeholder-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 placeholder-white"
            />
          </form>
          <div className="space-y-3 mt-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Login
            </button>
            {/* Google login */}
            <button
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full bg-black text-white py-2 rounded mb-4"
            >
              Log in with Google
            </button>
          </div>

          <p className="text-white mt-4">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-white font-semibold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
