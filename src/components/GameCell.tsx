import { FC } from "react";
import { Game } from "../interfaces/Game";

import "./GameCell.css";

interface GameCellProps {
  game: Game;
  onClick: (id: number) => void;
}

const GameCell: FC<GameCellProps> = ({ game, onClick }) => {
  return (
    <div key={game.id} className="game" onClick={() => onClick(game.id)}>
      <div>
        <img className="game-cell-img" src={game.background_image} alt={game.slug} />
        <h2>{game.name}</h2>
      </div>
    </div>
  );
};

export default GameCell;
