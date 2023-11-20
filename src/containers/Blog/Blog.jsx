import {
  NavLink,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { EXAMPLE_BLOG_DATA } from "utils/data";

const Blog = () => {
  const location = useLocation();
  return (
    <>
      <ul>
        {EXAMPLE_BLOG_DATA.map(({ id, title, content }) => {
          return (
            <NavLink
              to={{ pathname: `/blog/${id}`, state: { background: location } }}
              key={id}
            >
              <h3>{title}</h3>
              <p>{content.slice(0, 100) + "..."}</p>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default Blog;
