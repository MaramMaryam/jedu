// components/BackButton.js
"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
<div>
<button
      onClick={() => router.back()}
      className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
    >
      Back
    </button>
</div>
  );
};

export default BackButton;