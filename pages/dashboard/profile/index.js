import { useRouter } from "next/router";
import { useAuth } from "../../../utils/AuthContext";
import React, { useState } from "react";

//components
import Dashboard from "../../../components/adminpage/Dashboard";
import ProfileDashboard from "../../../components/adminpage/ProfileDashboard";
import Loading from "../../../components/misc/Loading";

export default function AdminDashboard() {
  const router = useRouter();
  const { user } = useAuth();
  //check user
  if (!user) {
    router.push("/auth/login");
  }
  if (user) {
    return (
      <>
        <Dashboard body={<ProfileDashboard />} />
      </>
    );
  }
  return <Loading />;
}
