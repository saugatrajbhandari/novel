"use client";

import { Editor } from "novel";
import { useState } from "react";
import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";

const Page = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (editor: any) => {
    setContent(editor.getHTML());
  };

  return (
    <div className="p-10">
      <Editor
        extensions={[Bold, Document, Paragraph, Text, TextStyle, Image]}
        onDebouncedUpdate={handleEditorChange}
        disableLocalStorage={true}
        className="w-full h-[40vh] "
        defaultValue={{ type: "doc", content: [] }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        className="mt-2"
      />
    </div>
  );
};

export default Page;
