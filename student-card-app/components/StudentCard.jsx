"use client";

import { useState } from "react";

export default function StudentCard({ name, course, year }) {
  const [message, setMessage] = useState("Hello, Student!");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-72 text-center">
      <h2 className="text-lg font-bold text-gray-500 tracking-wide mb-4">
        STUDENT CARD
      </h2>

      <p className="text-xl font-semibold text-blue-700">{name}</p>
      <p className="text-gray-700">{course}</p>
      <p className="text-gray-700 mb-4">{year}</p>

      <button
        onClick={() => setMessage("Welcome to Next.js!")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
      >
        Click Me
      </button>

      <p className="mt-4 text-gray-800">{message}</p>
    </div>
  );
}
