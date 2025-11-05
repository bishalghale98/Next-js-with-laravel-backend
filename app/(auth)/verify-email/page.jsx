"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CheckCircleIcon,
  XCircleIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("error");
        setMessage("Invalid verification link");
        return;
      }

      try {
        // Simulate API call to verify email
        console.log("Verifying email with token:", token);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Simulate successful verification
        // In real app, you would make an API call like:
        // const response = await fetch(`/api/verify-email?token=${token}`);
        // const data = await response.json();

        setStatus("success");
        setMessage("Your email has been successfully verified!");
      } catch (error) {
        setStatus("error");
        setMessage(
          "Failed to verify email. The link may have expired or is invalid."
        );
      }
    };

    verifyEmail();
  }, [token]);

  const handleResendVerification = async () => {
    try {
      setMessage("Sending new verification email...");
      // Simulate resend API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setMessage("New verification email sent! Please check your inbox.");
    } catch (error) {
      setMessage("Failed to send verification email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6">
            <EnvelopeIcon className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Email Verification
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {status === "verifying"
              ? "We're verifying your email address..."
              : "Your email verification is complete"}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          {/* Status Indicator */}
          <div className="text-center mb-6">
            {status === "verifying" && (
              <div className="flex justify-center items-center space-x-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="text-lg font-medium text-gray-700">
                  Verifying...
                </span>
              </div>
            )}

            {status === "success" && (
              <div className="flex flex-col items-center space-y-3">
                <CheckCircleIcon className="h-16 w-16 text-green-500" />
                <span className="text-lg font-medium text-green-600">
                  Verified Successfully!
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="flex flex-col items-center space-y-3">
                <XCircleIcon className="h-16 w-16 text-red-500" />
                <span className="text-lg font-medium text-red-600">
                  Verification Failed
                </span>
              </div>
            )}
          </div>

          {/* Message */}
          {message && (
            <div
              className={`text-center p-4 rounded-lg mb-6 ${
                status === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : status === "error"
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-blue-50 text-blue-700 border border-blue-200"
              }`}
            >
              <p className="text-sm font-medium">{message}</p>
            </div>
          )}

          {/* Token Info (for debugging) */}
          {token && process.env.NODE_ENV === "development" && (
            <div className="bg-gray-50 p-3 rounded-lg mb-6">
              <p className="text-xs text-gray-500 text-center">
                Token: {token.substring(0, 20)}...
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-4">
            {status === "success" && (
              <div className="space-y-3">
                <a
                  href="/login"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Continue to Login
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </a>
                <a
                  href="/"
                  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Go to Homepage
                </a>
              </div>
            )}

            {status === "error" && (
              <div className="space-y-3">
                <button
                  onClick={handleResendVerification}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Resend Verification Email
                  <EnvelopeIcon className="h-4 w-4 ml-2" />
                </button>
                <a
                  href="/contact"
                  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  Contact Support
                </a>
              </div>
            )}

            {status === "verifying" && (
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Please wait while we verify your email address...
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-500">
            {status === "verifying"
              ? "This should only take a moment."
              : "Thank you for verifying your email address."}
          </p>
          {status === "error" && (
            <p className="text-xs text-gray-500">
              Verification links expire after 24 hours for security.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
