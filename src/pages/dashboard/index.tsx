import { useSession } from "next-auth/react";
import { Content } from "./components/Content";

export default function HomePage() {
  const { data: session } = useSession();
  console.log(session);

  return <Content title="Users" />;
}
