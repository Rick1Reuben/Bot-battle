import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onEnlist }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
