import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Icon } from "@iconify/react";
import logoMarkdown from "@iconify-icons/ion/logo-markdown";
import "./styles/App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# Lets get started with Markdown");
  function handleChange(e) {
    setMarkdown(e.target.value);
  }
  return (
    <div className="container">
      <div className="nav">
        <span className="title">
          <h1>
            <Icon
              className="icon"
              icon={logoMarkdown}
              width="2em"
              height="2em"
            />
            Markdown Editor
          </h1>
        </span>
        <button>
          <a
            rel="no-referrer"
            href="https://github.com/ivngzmn/react-markdown-editor"
          >
            GitHub Repo
          </a>
        </button>
      </div>
      <div className="app">
        <textarea onChange={handleChange} value={markdown} />
      </div>
      <div className="preview">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  );
}
