import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onEnlist, onRelease, onDischarge }) {
  const handleEnlist = () => {
    onEnlist(bot);
  };

  const handleRelease = () => {
    onRelease(bot.id);
  };

  const handleDischarge = () => {
    onDischarge(bot.id);
  };

  return (
    <div className="ui column">
      <div className="ui card">
        <div className="image">
          <img alt="Bot Avatar" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          {onEnlist && (
            <span>
              <div className="ui center aligned segment basic">
                <button className="ui mini green button" onClick={handleEnlist}>
                  Enlist
                </button>
              </div>
            </span>
          )}
          {onRelease && (
            <span>
              <div className="ui center aligned segment basic">
                <button className="ui mini blue button" onClick={handleRelease}>
                  Release
                </button>
              </div>
            </span>
          )}
          {onDischarge && (
            <span>
              <div className="ui center aligned segment basic">
                <button className="ui mini red button" onClick={handleDischarge}>
                  Discharge
                </button>
              </div>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default BotCard;
