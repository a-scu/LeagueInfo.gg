import Banner from "@/components/Banner";
import Aside from "@/components/aside/Aside";
import RecentGames from "@/components/recentGames/RecentGames";

import getSummoner from "@/helpers/getSummoner";

const Search = async ({ params }) => {
  const search = params.search;

  let summoner = await getSummoner(search);

  if (summoner) {
    const {
      name,
      tagLine,
      previousName,
      icon,
      level,
      ranked,
      recentGames,
      rankedGames,
    } = summoner;

    return (
      <div className="flex flex-col items-center gap-2 mb-2">
        <Banner
          icon={icon}
          name={name}
          level={level}
          tagLine={tagLine}
          previousName={previousName}
        />

        <div className="w-full px-0 800:px-2">
          <div className="1126:w-fit max-1126:max-w-screen-md 1126:grid mx-auto flex flex-col grid-cols-[320px,768px] gap-2">
            <Aside
              ranked={ranked}
              stats={recentGames.stats}
              champions={rankedGames}
            />
            <RecentGames
              recentGames={recentGames.games}
              highestRank={ranked.highestRank}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Search;
