"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <button
        type="button"
        onClick={() => router.replace("/Calculator")}
        className="bg-gray h-8  rounded-md 
        active:bg-green-900
        "
      >
        Join Us
      </button>
    </div>
  );
};

export default Page;
