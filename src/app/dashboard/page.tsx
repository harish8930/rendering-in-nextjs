"use client";

import { useState } from "react";

export default function Dashoboard() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        className="bg-white text-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name} !</p>
    </div>
  );
}
