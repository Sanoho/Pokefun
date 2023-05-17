import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <h1>Profile</h1>
      <a href="/api/auth/logout">Logout</a>
    </main>
  );
}
