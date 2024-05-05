import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch("https://bot-battle.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Error fetching bots:", error);
      });
  }, []);

  const enlistBot = (bot) => {
    if (!yourBotArmy.find((b) => b.id === bot.id)) {
      setYourBotArmy([...yourBotArmy, bot]);
      setBots(bots.filter((b) => b.id !== bot.id));
    }
  };

  const releaseBot = (botId) => {
    const botToRelease = yourBotArmy.find((b) => b.id === botId);
    if (botToRelease) {
      setBots([...bots, botToRelease]);
      setYourBotArmy(yourBotArmy.filter((b) => b.id !== botId));
    }
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        setYourBotArmy(yourBotArmy.filter((bot) => bot.id !== botId));
      })
      .catch((error) => {
        console.error("Error discharging bot:", error);
      });
  };

  return (
    <div>
      <YourBotArmy botArmy={yourBotArmy} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} />
    </div>
  );
}

export default BotsPage;
