import {useEffect, useState} from "react"
import { AnimeSchedule, JustCompleted, NewAdded, NewRelease, ReadMangaAd, RecentlyUpdated, RecommendSite, TopAnime, TrendingAnimeSlideShow } from '../components'
import { fetchFromAPI } from "../utils/fetchAnimeInfo";

const AnimeFeed = () => {
    const [animeFeedInfo, setAnimeFeedInfo] = useState(null);
    const [errorMsg, setErrorMsg] = useState("Loading anime info...");
    
    useEffect(() => {
        fetchFromAPI().then(response => setAnimeFeedInfo(response)).catch(errorMsg => setErrorMsg(`${errorMsg.message}!`));
    }, []);

    if (!animeFeedInfo) return <div className="w-full min-h-[80vh] flex items-center justify-center text-4xl font-semibold">{errorMsg}</div>
    
  return (
    <div className="w-full overflow-x-hidden">
        <TrendingAnimeSlideShow trendingAnimes={animeFeedInfo.spotLightAnimes} />
        <div className='flex justify-between mt-8'>
            <div className='w-3/5'>
                <RecommendSite />
                <RecentlyUpdated />
                <ReadMangaAd />
                <div className="my-6 flex justify-between">
                    <NewRelease />
                    <NewAdded />
                    <JustCompleted />
                </div>
                <AnimeSchedule />
            </div>
            <div className='w-2/5 border-l border-l-white'>
                <TopAnime />
            </div>
        </div>
    </div>
  )
}

export default AnimeFeed