import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles
import ReactMarkdown from "react-markdown";

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} />
      {/* <ReactMarkdown>{content}</ReactMarkdown> */}
    </div>
  );
};

export default TextEditor;
