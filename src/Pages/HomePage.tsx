import {  useEffect, useState } from 'react'
import SliderPage from '../components/Slider'
import ListPage from '../components/ListPage'
import { fetchData, Movie } from '../Apis/api.config';
import { CustomHooks } from '../contexts/Context';
import Loader from '../components/Loader';

const HomePage = () => {
    {/*  @ts-ignore */}
    const { Loading, SetLoading } = CustomHooks()
    console.log(Loading)
    const [Trending, SetTrending] = useState<Movie[]>([])
    const [Popular, SetPopular] = useState<Movie[]>([])
    const [NewAdded, SetNewAdded] = useState<Movie[]>([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                SetLoading(true)
                const trendingData = await fetchData('trending/movie/week');
                const popularData = await fetchData('movie/popular');
                const newReleaseData = await fetchData('discover/movie?language=en-US&region=IN&with_original_language=hi&page=1');
{/*  @ts-ignore */}

                SetTrending(trendingData);
{/*  @ts-ignore */}

                SetPopular(popularData);
{/*  @ts-ignore */}
                SetNewAdded(newReleaseData);
                SetLoading(false)
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies()
    }, [])
    return (<>
        <div className='Homepage h-auto'>
            {Loading ? <Loader /> : (<>
             <SliderPage />
                <div className="list_section">
                    <ListPage title={"Trending"} value={Popular} />
                    <ListPage title={"Popular"} value={Trending} />
                    <ListPage title={"New Added"} value={NewAdded} />

                </div></>)}
        </div></>
    )
}

export default HomePage
