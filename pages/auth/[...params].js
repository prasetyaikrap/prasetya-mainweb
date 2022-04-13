import { useRouter } from "next/router";

//Components
import LoginPage from "../../components/adminpage/Auth";

export default function AuthPage() {
  const router = useRouter();
  const { params = [] } = router.query;
  return <LoginPage query={params[0]} />;
}
