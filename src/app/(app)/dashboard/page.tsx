"use client";

import { useSession } from "next-auth/react";
import React from "react";

function UserDashboard() {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return <div></div>;
  }

  return (
    <div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
    </div>
  );
}

export default UserDashboard;
