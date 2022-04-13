import { useRouter } from "next/router";
import { useAuth } from "../utils/AuthContext";
import React, { useState } from "react";

//components
import Dashboard from "../../components/adminpage/Dashboard";
import ProfileDashboard from "../../components/adminpage/ProfileDashboard";

export default function AdminDashboard() {
  const router = useRouter();
  const { user } = useAuth();
  //check user
  if (!user) {
    router.push("/auth/login");
  }
  if (user) {
    const bodyDashboard = () => {
      //Re-Render Body
      let body = "";
      const { params = [] } = router.query;
      switch (params.length) {
        case 0:
          body = <h1>Home Dashboard</h1>;
          break;
        case 1:
          switch (params[0]) {
            case params[0] === "profile":
              body = <ProfileDashboard />;
              break;
            default:
              <h1>Error Site. page does not exist</h1>;
          }
        default:
          body = <h1>Error Site. page does not exist</h1>;
      }
      return body;
    };
    //Return Page
    return (
      <>
        <Dashboard body={bodyDashboard()} />
      </>
    );
  }
}
