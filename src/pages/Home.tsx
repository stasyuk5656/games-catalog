import React, { Component, ReactNode } from "react";

import "./Home.css";

class Home extends Component {
  render(): ReactNode {
    return (
      <div className="info">
        <h1>Home Page</h1>
        <h2>
          This is a course work on the subject "Network Information
          Technologies" developed by a student of the 1KI-23m group.
        </h2>
        <p>
          This site was made using the React framework in the TypeScript
          programming language. REST API service{" "}
          <a href="https://rawg.io/">"RAWG"</a> was taken as a basis. This site
          implements a catalog of video games with a search by name and a page
          with more detailed information. There is also a list of games with the
          highest rating according to{" "}
          <a href="https://www.metacritic.com/">Metacritic</a>.
        </p>
        <p>
          This project also has unit testing and pulled on{" "}
          <a href="https://github.com/stasyuk5656/games-catalog">GitHub</a>. As
          part of the course project, advanced technologies and tools used to
          create modern and progressive web applications were investigated. The
          focus is on the features of the React framework and its practical use.
        </p>
      </div>
    );
  }
}

export default Home;
