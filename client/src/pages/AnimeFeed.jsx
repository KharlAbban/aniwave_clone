import {useEffect, useState} from "react"
import { AnimeSchedule, JustCompleted, NewAdded, NewRelease, ReadMangaAd, RecentlyUpdated, RecommendSite, TopAnime, TrendingAnimeSlideShow } from '../components'
import { fetchFromAPI } from "../utils/fetchAnimeInfo";

const AnimeFeed = () => {
    const [animeFeedInfo, setAnimeFeedInfo] = useState(null);
    const [errorMsg, setErrorMsg] = useState("Loading anime info...");
    
    useEffect(() => {
        fetchFromAPI().then(response => setAnimeFeedInfo(response)).catch(errorMsg => setErrorMsg(`${errorMsg.message}! Please refresh!`));
    }, []);

    if (!animeFeedInfo) return <div className="w-full min-h-[80vh] flex items-center justify-center text-4xl font-semibold">{errorMsg}</div>
    
  return (
    <div className="w-full overflow-x-hidden">
        <TrendingAnimeSlideShow trendingAnimes={animeFeedInfo.spotLightAnimes} />
        <div className='flex justify-between mt-2 relative px-2 max-xl:flex-col'>
            <div className='w-full xl:w-3/4 ps-1 pe-3'>
                <RecommendSite />
                <RecentlyUpdated updatedAnimes={animeFeedInfo.latestEpisodes} />
                <ReadMangaAd />
                <div className="my-6 flex gap-2 justify-around">
                    <NewRelease newReleaseAnimes={animeFeedInfo.featuredAnimes.topAiringAnimes} />
                    <NewAdded newAnimes={animeFeedInfo.featuredAnimes.mostPopularAnimes} />
                    <JustCompleted completedAnimes={animeFeedInfo.featuredAnimes.latestCompletedAnimes} />
                </div>
                <AnimeSchedule />
            </div>
            <div className='xl:w-1/4 w-full'>
                <TopAnime topAnime={animeFeedInfo.top10Animes} />
            </div>
        </div>
    </div>
  )
}

export default AnimeFeed