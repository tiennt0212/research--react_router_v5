import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  ExampleBookHead1,
  ExampleBookHead2,
  ExampleBookHead3,
  ExampleBookCover1,
  ExampleBookCover2,
  ExampleBookCover3,
  ExampleBookCover4,
  ExampleBookCover5,
  ExampleBookCover6,
  ExampleBookCover7,
  ExampleBookCover8,
  ExampleBookCover9,
  ExampleBookCover10,
} from "assets/images";
import "./Home.scss";
const Home = () => {
  const exampleBookHead = [
    {
      image: ExampleBookHead1,
      type: "Detective-Love-History",
    },
    {
      image: ExampleBookHead2,
      type: "Detective-ScienceFiction-Fantastic",
    },
    {
      image: ExampleBookHead3,
      type: "Novel-History-Love",
    },
  ].map((item, index) => ({
    ...item,
    id: `example-book_head-${index}`,
    title: "Books Head",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod. Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.",
  }));

  const exampleBookFilterResult = [
    { image: ExampleBookCover1 },
    { image: ExampleBookCover2 },
    { image: ExampleBookCover3 },
    { image: ExampleBookCover4 },
    { image: ExampleBookCover5 },
    { image: ExampleBookCover6 },
    { image: ExampleBookCover7 },
    { image: ExampleBookCover8 },
    { image: ExampleBookCover9 },
    { image: ExampleBookCover10 },
  ].map((item, index) => ({
    ...item,
    id: `example-book-${index}`,
  }));
  return (
    <>
      <div className="books-head">
        <h2 className="books-head-introduction">May you like this !!!</h2>
        <ul id="books-head">
          {exampleBookHead.map(({ id, title, description, image, type }) => (
            <li key={id}>
              <article className="book-head">
                <img src={image} alt="book-cover" className="book-img" />
                <h3 className="book-title">{title}</h3>
                <p className="book-desc">{description}</p>
                <p className="book-kind">{type}</p>
                <button type="button" onClick={() => alert(`Read book ${id}`)}>
                  Now Read!
                </button>
              </article>
            </li>
          ))}
        </ul>
      </div>
      <ul id="filtered-books">
        {exampleBookFilterResult.map(({ image, id }) => (
          <li key={id}>
            <Link to={`book/${id}`}>
              <article className="book-cover">
                <img src={image} alt="book-cover" />
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
