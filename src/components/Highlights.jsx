import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./UI/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="highlights__container">

        <Highlight
          icon={<FontAwesomeIcon icon="bolt" />}
          title="Easy and Quick"
          para="Get access to the book you purchased online instantly."
        />

        <Highlight
          icon={<FontAwesomeIcon icon="book-open" />}
          title="10,000+ Books"
          para="Library has books in all your favorite categories."
        />

        <Highlight
          icon={<FontAwesomeIcon icon="tags" />}
          title="Affordable Prices"
          para="Get your hands on popular books for as little as $10."
        />

      </div>
    </section>
  );
};

export default Highlights;