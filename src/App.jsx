import React, { useState } from "react";
import Pages from "./pages";
import Form from "./components/Form";

export default function App() {
  const [formState, setFormState] = useState({ active: false, title: "" });

  return (
    <div className="min-h-screen h-fit bg-lightOne relative overflow-scroll">
      <Pages setFormState={setFormState} />
      <Form open={formState.active} title={formState.title} />
    </div>
  );
}
