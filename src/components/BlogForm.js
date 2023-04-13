import React, { useState } from "react";

export const BlogForm = () => {
  const [titleState, setTitleState] = useState("");
  const [descriptionState, setDescriptionState] = useState("");
  const [errorState, setErrorState] = useState("");

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitleState(title);
  };

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescriptionState(description);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!titleState || !descriptionState) {
      setErrorState("tüm alanları doldurunuz")
    } else {
      setErrorState("")
      this.props.onSubmit({
        title: titleState,
        description: descriptionState,
        dateAdded: Date.now(),
      });
    }
  };

  return (
    <div>
      {errorState && <p>{errorState}</p>}
      <form onSubmit={onSubmit}>
        <div>
          <input
            placeholder="enter title"
            value={titleState}
            onChange={onTitleChange}
          ></input>
        </div>
        <div>
          <textarea
            placeholder="enter description"
            value={descriptionState}
            onChange={onDescriptionChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">save changes</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;

