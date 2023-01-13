import React from "react";

function TextBox({ title, setTitle, body, setBody }) {
  return (
    <>
      <textarea
        name="title"
        placeholder="initial title"
        id=""
        cols="50"
        rows="5"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <textarea
        name="body"
        placeholder="initial body"
        id=""
        cols="50"
        rows="5"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
      <br />
    </>
  );
}

export default TextBox;
