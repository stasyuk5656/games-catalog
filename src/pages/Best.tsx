import React, { useEffect, useState } from "react";
import { Game } from "../interfaces/Game";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import ListItem from "../components/ListItem";

const Best: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [games, setGames] = useState<Game[] | null>(null);
  const navigate = useNavigate();

  const PAGE_SIZE: number = 100;

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page_size=${PAGE_SIZE}&ordering=-metacritic`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const handleGameClick = (id: number) => {
    navigate(`../games/${id}`);
  };

  return (
    <div>
      {isLoading && <Loader/>}
      {games && (
        <div>
          <ul>
            {games.map((game) => (
              <ListItem game={game} onClick={handleGameClick}/>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Best;
