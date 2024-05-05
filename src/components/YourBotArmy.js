import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, onRelease, onDischarge }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h3>Your Bot Army</h3>
          {botArmy.map((bot) => (
            <BotCard key={bot.id} bot={bot} onRelease={onRelease} onDischarge={onDischarge} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
