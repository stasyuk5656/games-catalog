import { FC, useState } from "react";
import { Game } from "../interfaces/Game";

interface GameItemProps {
  game: Game;
  onClick: (id: number) => void;
}

const GameItem: FC<GameItemProps> = ({ game, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <li key={game.id} onClick={() => onClick(game.id)}>
        <img src={game.background_image} alt={game.slug} />
      <span>
        <b>{game.name}</b>: {game.metacritic}
      </span>
    </li>
  );
};

export default GameItem;
