import "./GameList.css";
import { useState } from "react";
import { Game } from "../interfaces/Game";
import { GameResponse } from "../interfaces/GameResponse";
import { useNavigate } from "react-router-dom";
import { Button, SearchBar } from "../components/SearchItems";
import GameCell from "../components/GameCell";
import Loader from "../components/Loader";

const GameList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [games, setGames] = useState<Game[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [next, setNext] = useState<string | null>(null);
  const [previous, setPrevious] = useState<string | null>(null);
  const navigate = useNavigate();

  const PAGE_SIZE: number = 35;

  const sendRequest = async (url: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData: GameResponse = await response.json();
      console.log("Request successful:", responseData);
      setIsLoading(false);
      setGames(responseData.results);
      setNext(responseData.next);
      setPrevious(responseData.previous);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleSearchButtonClick = () => {
    sendRequest(
      `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page=1&page_size=${PAGE_SIZE}&search=${searchTerm}`
    );
  };

  const handleNextButtonClick = () => {
    console.log("click");
    if (next) {
      sendRequest(next);
    }
  };

  const handlePreviousButtonClick = () => {
    console.log("click");
    if (previous) {
      sendRequest(previous);
    }
  };

  const handleGameClick = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <div>
      <SearchBar
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onSearch={handleSearchButtonClick}
      />

      {isLoading && <Loader/>}
      {error && <p>Error: {error}</p>}

      {games && (
        <div className="game-container">
          {games.map((game) => (
            <GameCell game={game} onClick={handleGameClick} />
          ))}
        </div>
      )}
      <div className="buttons-container">
        <Button label="Previous" onClick={handlePreviousButtonClick} isDisabled={previous ? false : true}/>
        <Button label="Next" onClick={handleNextButtonClick} isDisabled={next ? false : true}/>
      </div>
    </div>
  );
};

export default GameList;
