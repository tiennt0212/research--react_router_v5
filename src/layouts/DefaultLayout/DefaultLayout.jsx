import { Logo } from "assets/images";
import { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./DefaultLayout.scss";
import { Button, Input } from "components";
import { ExampleBookCover1 } from "assets/images";

const DefaultLayout = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const examplePopularCategories = [
    "Memory books",
    "Novels",
    "Story books",
    "Travel books",
    "Poetry books",
    "Biography books",
    "Religious books",
    "Knowledge books",
    "Children's books",
  ];
  const exampleNewBooksCategories = [
    "Memory books",
    "Novels",
    "Story books",
    "Travel books",
    "Poetry books",
    "Biography books",
    "Religious books",
    "Knowledge books",
    "Children's books",
  ];

  return (
    <>
      <header>
        <div className="brand">
          <img src={Logo} alt="logo" className="brand-logo" />
          <span className="brand-name">
            KeazoN<small>BOOKS</small>
          </span>
        </div>
        <Input
          type="search"
          name="bookFilter"
          id="book-filter"
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
        />
        {isLoggedIn ? (
          <div className="user-actions">
            <Button type="button" id="btn-fav-book"></Button>
            <Button type="button" id="btn-notification"></Button>
            <Button type="button" id="btn-upgrade"></Button>
            <Button type="button" id="btn-profile">
              <img className="avatar" src={ExampleBookCover1} alt="user-avt" />
            </Button>
          </div>
        ) : (
          <div className="guest-actions">
            <Button type="button" onClick={() => setLoggedIn(true)}>
              Sign In
            </Button>
          </div>
        )}
      </header>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      <aside>
        <input
          type="search"
          name="categoriesFilter"
          id="categories-filter"
          placeholder="Search categories and others"
        />
        <h3 className="category-name">Popular Categories</h3>
        {/* Render popular categories */}
        <ul id="popular-categories" className="category-list">
          {examplePopularCategories
            .map((category) => ({
              name: category,
              id: `popular-${category.trim().toLowerCase().replace(" ", "-")}`,
            }))
            .map(({ name, id }) => (
              <li key={id}>
                <input type="checkbox" id={id} />
                <label htmlFor={id}>{name}</label>
              </li>
            ))}
        </ul>
        {/* Render New Books Categories */}
        <h3 className="category-name">New books Categories</h3>
        <ul id="new_books-categories" className="category-list">
          {exampleNewBooksCategories
            .map((category) => ({
              name: category,
              id: `new_books-${category.trim().toLowerCase()}`,
            }))
            .map(({ name, id }) => (
              <li key={id}>
                <Input type="checkbox" id={id} />
                <label htmlFor={id}>{name}</label>
              </li>
            ))}
        </ul>
      </aside>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default DefaultLayout;
