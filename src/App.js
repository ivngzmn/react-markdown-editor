import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# Lets get started with Markdown");
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
