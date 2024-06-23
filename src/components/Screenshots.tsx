import { FC, useEffect, useState } from "react";
import { Image } from "../interfaces/Image";

import "./Screenshots.css";

interface ScreenshotsProps {
  gameId: number;
}

export const Screenshots: FC<ScreenshotsProps> = ({ gameId }) => {
  const [error, setError] = useState<string | null>(null);
  const [gameScreenshots, setGameScreenshots] = useState<Image[] | null>(null);

  const PAGE_SIZE = 7;

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/games/${gameId}/screenshots?key=${process.env.REACT_APP_API_KEY}&page=1&page_size=${PAGE_SIZE}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGameScreenshots(data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="screenshots">
      {gameScreenshots &&
        gameScreenshots.map((screenshot) => (
          <img className="screenshot" src={screenshot.image} />
        ))}
    </div>
  );
};
