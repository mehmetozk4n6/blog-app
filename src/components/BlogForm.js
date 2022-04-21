import { useState } from "react";

function BlogForm(props) {
  console.log(props);
  const [title, setTitle] = useState(props.blog ? props.blog.title : "");
  const [description, setDescription] = useState(
    props.blog ? props.blog.description : ""
  );
  const [error, setError] = useState("");
  const addBlogger = () => {
    setError("");
    props.onSubmi({
      title: title,
      description: description,
      dateAdded: Date.now(),
    });
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          !title || !description
            ? setError("tüm alanlari doldurunuz")
            : addBlogger();
        }}
      >
        <div>
          <input
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
