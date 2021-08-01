import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/tailwind.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# Start creating your markdown");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      <ReactMarkdown className="preview" children={markdown} />
    </div>
  );
}
