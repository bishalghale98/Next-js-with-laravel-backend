"use client";

import React, { useState } from "react";
import {
  EnvelopeIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import BackButton from "@/components/common/BackButton";
import { forgotPasswordSchema } from "@/zodSchema/authSchema";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "@/store/slices/authSlice";

function ForgotPasswordPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const watchedEmail = watch("email");

  const onSubmit = async (data) => {
    await dispatch(forgetPassword(data));
    console.log("Password reset email sent to:", data.email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* Back Button */}
          <div className="mb-6">
            <BackButton
              onClick={() => router.back()}
              text="Back"
              className="text-blue-600 hover:text-blue-800"
              iconClassName="h-5 w-5 mr-2"
            />
          </div>

          {/* Success Card */}
          <div className="bg-white py-8 px-6 shadow-sm rounded-lg sm:px-10 border-0 text-center">
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <CheckCircleIcon className="h-8 w-8 text-green-600" />
            </div>

            {/* Success Message */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Check Your Email
            </h2>
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to
              <br />
              <span className="font-medium text-gray-900">{watchedEmail}</span>
            </p>

            {/* Additional Info */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-700">
                <strong>Didn't receive the email?</strong> Check your spam
                folder or try resending the link.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:shadow-md"
              >
                Resend Link
              </button>

              <Link
                href="/login"
                className="block w-full text-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              >
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Back Button */}
        <div className="mb-6">
          <BackButton
            onClick={() => router.back()}
            text="Back"
            className="text-blue-600 hover:text-blue-800"
            iconClassName="h-5 w-5 mr-2"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            Reset Your Password
          </h2>
          <p className="text-gray-600 text-base">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>

        {/* Forgot Password Card */}
        <div className="bg-white py-8 px-6 shadow-sm rounded-lg sm:px-10 border-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 hover:border-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Sending Link...
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </div>
          </form>

          {/* Help Text */}
          <div className="mt-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 text-center">
                <strong>Note:</strong> The reset link will expire in 1 hour for
                security reasons.
              </p>
            </div>
          </div>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Back to sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
