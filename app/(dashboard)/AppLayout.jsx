"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AppLayout = ({ children, allowedRoles = [] }) => {
  const { user, loading } = useSelector((state) => state.auth);
  const router = useRouter();

  // Redirect logic inside useEffect
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
      } else if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user.role)
      ) {
        router.replace("/unauthorized");
      }
    }
  }, [loading, user, allowedRoles, router]);

  // Show loader while checking auth or redirecting
  if (loading || !user || (allowedRoles.length > 0 && !allowedRoles.includes(user?.role))) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AppLayout;
