"use client";

import React from "react";
import AppLayout from "../AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

function AdminPage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    router.push("/login");
  };

  return (
    <AppLayout allowedRoles={["admin"]}>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hello, {user?.name}</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          Log out
        </button>
      </div>
    </AppLayout>
  );
}

export default AdminPage;
