import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../pages/utils/AuthContext";
import { addProfileData } from "../../pages/api/profile";

//Components
import Loading from "../misc/Loading";

export default function ProfileDashboard() {
  //Loading Page and Preparing Data
  const { user } = useAuth();
  const [profileData, setProfileData] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);
  if (pageLoading) {
    return <Loading />;
  }
}
