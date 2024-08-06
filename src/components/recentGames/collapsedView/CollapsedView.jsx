import Decoration from "./Decoration";
import GameInfo from "./GameInfo";
import Champion from "./Champion";
import Spells from "./Spells";
import Runes from "./Runes";
import KDA from "./KDA";
import CS_Vision_Gold from "./CS_Vision_Gold";
import Items from "./Items";
import Score from "./Score";
import Participants from "./Participants";
import ExpandButton from "./ExpandButton";

export default function CollapsedView({
  queue,
  gameId,
  gameAge,
  gameDuration,
  summoner,
  summonerTeam,
  opponentTeam,
}) {
  return (
    <div
      id={`collapsed-view-${gameId}`}
      className={`w-full relative pt-[26px] pl-1 800:pl-1.5 800:pr-10 800:pt-0 flex ${
        summoner.win ? "bg-blue-1 border-b-blue-2" : "bg-red-1 border-b-red-2"
      }`}
    >
      <Decoration win={summoner.win} />

      <div className="flex items-center flex-1 px-1 max-330:py-1 sm:px-2">
        <GameInfo
          win={summoner.win}
          queue={queue}
          gameDuration={gameDuration}
          gameAge={gameAge}
        />

        <div className="flex flex-col flex-1 gap-1">
          <div className="flex ">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <Champion
                  champName={summoner.champName}
                  champLevel={summoner.champLevel}
                  champIcon={summoner.champIcon}
                />

                <div className="flex gap-0.5 max-450:gap-px">
                  <Spells spells={summoner.spells} />
                  <Runes runes={summoner.runes} />
                </div>
              </div>

              <KDA
                win={summoner.win}
                kills={summoner.kills}
                deaths={summoner.deaths}
                assists={summoner.assists}
                teamKills={summonerTeam.kills}
              />
            </div>

            <CS_Vision_Gold
              win={summoner.win}
              cs={summoner.cs}
              csPerMinute={summoner.csPerMinute}
              visionScore={summoner.visionScore}
              gold={summoner.gold}
            />
          </div>

          <div className="flex items-center gap-0.5 800:gap-1">
            <Items win={summoner.win} items={summoner.items} />
            <Score
              win={summoner.win}
              score={summoner.win ? "MVP" : "ACE"}
              largestMultiKill={summoner.largestMultiKill}
            />
          </div>
        </div>

        <Participants
          win={summoner.win}
          summonerPuuid={summoner.puuid}
          summonerTeam={summonerTeam.participants}
          opponentTeam={opponentTeam.participants}
        />
      </div>

      <ExpandButton win={summoner.win} gameId={gameId} />
    </div>
  );
}
