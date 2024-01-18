//  @ts-ignore 
import  { useEffect, useState } from 'react'
import fetchData, { Movie } from '../Apis/api.config'
import Cards from '../components/Cards';
import { CustomHooks } from '../contexts/Context';
import Loader from '../components/Loader';

interface Props {

}
    //  @ts-ignore 
const TvShow = (props: Props):any => {
    const { Loading, SetLoading }:any = CustomHooks()
    const [TvShows, SetTvShows] = useState<Movie[]>([]);
    const [Page, SetPage] = useState(1);
    const fetchTvShow = async () => {
        SetLoading(true)
        const res = await fetchData(`discover/tv?language=en-US&region=IN&with_original_language=hi&page=${Page}`);
        if (res) {
            const tvShowsWithMediaType = res.map((tvShow) => ({ ...tvShow, mediaType: 'tvShow' }));
    //  @ts-ignore 
            SetTvShows(tvShowsWithMediaType)
            SetLoading(false)
        }
    }
    useEffect(() => {
        fetchTvShow()
    }, [Page])
    return (<>
        {Loading ? <Loader /> : <div className='Shows'>
            <h1>Tv & Shows</h1>
            <div className="shows_list">
                {TvShows.map((movie) => {
                    return <Cards value={movie} key={movie.id} />
                })}
            </div>
            <div className="pagination">
                <button onClick={() => SetPage(Page - 1)} disabled={Page === 1}>Show Prev</button>
                <button onClick={() => SetPage(Page + 1)}>Show More </button>
            </div>
        </div>}
    </>
    )
}

export default TvShow
