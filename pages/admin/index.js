import { useRouter } from "next/router";
import { useAuth } from "../../middleware/AuthContext";

function admin() {
  const router = useRouter();
  const { user } = useAuth();
  switch (user) {
    case null:
      router.push("/admin/login");
      break;
    case user:
      router.push("/dashboard");
      break;
    default:
  }
  return <div></div>;
}

export default admin;
