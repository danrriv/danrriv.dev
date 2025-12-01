"use client";
import { useEffect, useState } from "react";

export default function ClientGitHub() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <p className="text-white">Loading...</p>;

  return (
    <div className="text-white">
      <p>GitHub: {data.login}</p>
      <p>Repos: {data.public_repos}</p>
      <img src={data.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full mt-4" />
    </div>
  );
}
