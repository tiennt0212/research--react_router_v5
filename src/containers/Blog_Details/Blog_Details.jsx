import React from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { EXAMPLE_BLOG_DATA } from "utils/data";

const BlogDetails = () => {
  const { blogId } = useParams();
  // eslint-disable-next-line
  const blog = EXAMPLE_BLOG_DATA.find((blog) => blog.id == blogId);
  const history = useHistory();
  return (
    <div
      style={{
        position: "absolute",
        width: "50%",
        background: "lightgray",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {blog ? (
        <>
          <h2>
            Blog Details - Blog {blogId} - {blog.title}
          </h2>
          <button onClick={() => history.replace("/blog")}>Close</button>
          <p>{blog.content}</p>
        </>
      ) : (
        <h2>Blog Not Found</h2>
      )}
    </div>
  );
};

export default BlogDetails;
