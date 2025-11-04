"use client";

import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-2">Access Denied 🚫</h1>
      <p className="text-gray-600 max-w-md">
        You don’t have permission to view this page. Please contact your
        administrator or return to the homepage.
      </p>
      <Link
        href="/"
        className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
