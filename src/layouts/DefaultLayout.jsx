import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/discover">Discover</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
