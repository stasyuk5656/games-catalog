import { useEffect, useState } from "react";
import { GameDetails } from "../interfaces/GameDetails";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Screenshots } from "../components/Screenshots";

import "./GameInfo.css";

const GameInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gameDetails, setGameDerails] = useState<GameDetails | null>(null);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/games/${id}?key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGameDerails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {gameDetails && (
        <div>
          <div className="game-details">
            <div className="game-img-container">
              <img
                className="game-img"
                src={gameDetails.background_image}
                alt={gameDetails.slug}
              />
            </div>
            <div className="game-info">
              <p className="game-name">{gameDetails?.name}</p>
              <p className="release-date">Release: {gameDetails.released}</p>
              <div
                dangerouslySetInnerHTML={{ __html: gameDetails?.description }}
              />
            </div>
          </div>
          <Screenshots gameId={gameDetails.id} />
        </div>
      )}
    </div>
  );
};

export default GameInfo;
