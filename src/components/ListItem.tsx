import React from "react";
import "./ListItem.css";
import { Game } from "../interfaces/Game";

interface ListItemProps {
  game: Game;
  onClick: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({ game, onClick }) => {
  return (
    <li
      key={game.id}
      onClick={() => {
        onClick(game.id);
      }}
    >
      <div className="game-list-item">
        <div className="game-list-item-wrap">
          <img src={game.background_image} alt={game.slug} />
          <p>
            <b>{game.name}:</b> {game.metacritic}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
