"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("Name");
  return (
    <>
      <h1>Client Component One !</h1>;{children}
    </>
  );
};
