"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EnvelopeIcon,
  XMarkIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { verificationNotification } from "@/store/slices/authSlice";

function EmailVerificationPrompt() {
  const { user, loading, message } = useSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && !user.emailVerified) {
      setIsVisible(true);
    }
  }, [user]);

  const handleResendVerification = async () => {
    console.log(user.email);

    await dispatch(verificationNotification(user)).unwrap();
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!user || user.emailVerified || !isVisible) {
    return null;
  }

  return (
    <div className="relative">
      <div className="bg-yellow-50 border-b border-yellow-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-yellow-800">
                    Verify your email address
                  </p>
                  <p className="text-sm text-yellow-700">
                    Please verify your email to access all features
                  </p>

                  {/* Success Message */}
                  {message && (
                    <div className="flex items-center mt-1 space-x-1">
                      <CheckBadgeIcon className="h-4 w-4 text-green-500" />
                      <p className="text-xs text-green-600 font-medium">
                        {message}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-3">
                {/* Resend Button */}
                <button
                  onClick={handleResendVerification}
                  disabled={loading}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-yellow-600 mr-1"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Resend Email
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </>
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="inline-flex items-center p-1.5 rounded-md text-yellow-400 hover:text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerificationPrompt;
