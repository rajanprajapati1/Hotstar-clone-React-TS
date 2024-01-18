import  {  useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import fetchData, { Movie } from '../Apis/api.config';
import Cards from '../components/Cards';
import { CustomHooks } from '../contexts/Context';
import Loader from '../components/Loader';



const SearchPage = () => {
    const { Loading, SetLoading }:any = CustomHooks()
    const InputRef = useRef<HTMLInputElement>(null);
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    //  @ts-ignore 
    const tvShowData: Movie = {
        adult: true,
        backdrop_path: "/example_backdrop_path.jpg",
        genre_ids: [3, 4],
        id: 456,
        original_language: "hi",
        overview: "This is an example TV show.",
        popularity: 8.0,
        poster_path: "/example_poster_path.jpg",
        name: "Example TV Show",
        vote_average: 7.5,
        vote_count: 50,
        original_title: "string",
        release_date: "string",
        title: "string",
        video: true,
    }
    // 166ef97c1dbaca45757f8a7d461d59e0
    const HandleSearch = async () => {
        const query = InputRef.current?.value;
        if (query) {
            SetLoading(true)
            const movieres = await fetchData(`search/movie?language=en-US&query=${query}`);
            const Tvres = await fetchData(`search/tv?language=en-US&query=${query}`);
            const moviesWithMediaType = movieres.map((movie) => ({ ...movie, mediaType: 'movie' }));
            const tvShowsWithMediaType = Tvres.map((tvShow) => ({ ...tvShow, mediaType: 'tvShow' }));
            const CombinedData = [...moviesWithMediaType, ...tvShowsWithMediaType];
            SetLoading(false)
    //  @ts-ignore 
            setSearchResults(CombinedData)
        } else {
            console.log("something went wrong")
        }
    }
    return (<>
        <div className='SearchPage'>
            <div className="searchbar">
                <input type="text" ref={InputRef} placeholder='Search Tv Series Web series Movies etc..' />
                <button onClick={HandleSearch}><FaSearch /></button>
            </div>
            {Loading ? <Loader /> :
                <div className="search_results">
                    {
                        searchResults.map((movie) => (
                            <Cards key={movie.id} value={movie} />
                        ))
                    }
                </div>
            }
        </div>
    </>
    )
}

export default SearchPage
