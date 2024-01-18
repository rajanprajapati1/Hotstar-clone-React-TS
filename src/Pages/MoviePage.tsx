import React, { useEffect, useState } from 'react'
import { fetchData } from '../Apis/api.config'
import { useParams } from 'react-router-dom'
import { TbRating14Plus, TbRating18Plus } from 'react-icons/tb';
import { FaPlay } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import ShowCard from '../components/ShowCard';
import { EmbeddMovieData, Movie, MovieTrailer, SeasonDetails } from '../types/types';
import MovieCard from '../components/MovieCard';
import EpisodeCard from '../components/EpisodeCard';
import { CustomHooks } from '../contexts/Context';
import Loader from '../components/Loader';

const MoviePage = () => {
    {/*  @ts-ignore */}
  const { Loading, SetLoading } = CustomHooks()
  type TrailerState = MovieTrailer[] | EmbeddMovieData[];
  const { id } = useParams();
  const [Active, SetActive] = useState<string>("Episode");
  const [SingleMovies, SetSingleMovies] = useState<Movie>();
  const [Trailer, setTrailer] = useState<TrailerState>();
  const [Seasondata, setSeasondata] = useState<SeasonDetails>();

  const fetchMovieData = async (isMovie: boolean) => {
    try {
      SetLoading(true)
      const movieType = isMovie ? 'movie' : 'tv';
      const res = await fetchData(`${movieType}/${id}`);
      const trailer = await fetchData(`${movieType}/${id}/videos`);
      if (!isMovie) {
        const seasonResponse = await fetchData(`${movieType}/${id}/season/${1}?append_to_response=images`);
        SetLoading(false)
    {/*  @ts-ignore */}

        setSeasondata(seasonResponse);
      }
      SetLoading(false)
    {/*  @ts-ignore */}

      SetSingleMovies(res);
    {/*  @ts-ignore */}

      setTrailer(trailer);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMovie = async () => {
    const isMovieRoute = window.location.pathname.startsWith('/movie');
    if (isMovieRoute) {
      await fetchMovieData(true);

    } else {
      await fetchMovieData(false);
    }
  };
  const Em2data: EmbeddMovieData = {
    id: SingleMovies?.id || 0,  // Use optional chaining and provide a default value (0 in this case)
    Link1: ` ${SingleMovies?.imdb_id || ''}`,
    Link2: ` ${SingleMovies?.imdb_id || ''}`,
    original_title: SingleMovies?.original_title || '',
    original_name: SingleMovies?.original_name || '',
    title: SingleMovies?.title || '',
    overview: SingleMovies?.overview || '',
    backdrop_path: SingleMovies?.backdrop_path || '',
    poster_path: SingleMovies?.poster_path || '',
    runtime: SingleMovies?.runtime || 0,
    tagline: SingleMovies?.tagline || '',
  };

  const runtimeInMinutes = Em2data.runtime || 0;
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
    //  @ts-ignore 
  const movieruntime = `${hours}h ${minutes}m`;


  const CheckRoutes: boolean = window.location.pathname.startsWith('/movie');

  useEffect(() => {
    fetchMovie()
  }, [id])
  return (
    (Loading ? <Loader /> :
      <div className='Movie_Page'>
        <div className='slider'>
          <div className=" overlay-sm" ></div>
          <div className="details">
            <span>hotstar <strong>specials</strong></span>
            <h1>{SingleMovies?.original_title || SingleMovies?.original_name}</h1>
            <h3>{SingleMovies?.release_date?.slice(0, 4)} ~  {SingleMovies?.original_language === "en" ? "English" : "Hindi"}
              ~ <strong>U/A {SingleMovies?.adult ? <TbRating18Plus size="1.5rem" /> : <TbRating14Plus size="1.5rem" />}</strong></h3>
            <p>{SingleMovies?.overview}</p>
            <br />
            <h2>
              {SingleMovies?.genres && SingleMovies.genres.length > 0 ? (
                SingleMovies?.genres?.map((genre:any, index) => (
                  <React.Fragment key={genre?.id}>
                    <strong>{genre?.name}</strong>
                    {index < SingleMovies.genres.length - 1 && ' | '}
                  </React.Fragment>
                ))
              ) : (
                <>
                  <strong>Action</strong> | <strong>Thriller</strong> | <strong>People and Culture</strong> | <strong>Comedy</strong>
                </>
              )}
            </h2>


            <div className="btn">
              <button>Watch Now <FaPlay /></button>
              <button className='btn2'><IoMdAdd /> </button>
            </div>
          </div>
          <div className="image_bac">
            <img src={`https://image.tmdb.org/t/p/original/${SingleMovies?.backdrop_path}`} alt="" />
          </div>
        </div>
        <div className="other_Section">
          <div className="flex_title_row">
            <h1 className={Active === "Episode" ? "opacity-100" : "opacity-30"} onClick={() => SetActive("Episode")}>{!CheckRoutes ? "Tv-Show" : "Movies"}</h1>
            <h1 className={Active === "More" ? "opacity-100" : "opacity-30"} onClick={() => SetActive("More")}>More Like This</h1>
            <h1 className={Active === "Trailer" ? "opacity-100" : "opacity-30"} onClick={() => SetActive("Trailer")}>Trailers & More</h1>
          </div>
          <div className="active_pages">
            <div className={`Page_1 page_active  ${Active === "Episode" ? "visible" : "hidden"}`}>
              <section>
                <h2>{CheckRoutes ? 'Movie' : 'Season 1'}</h2>
                {CheckRoutes ?
    //  @ts-ignore 

                  <MovieCard moviedata={Em2data} image={SingleMovies?.backdrop_path} />
                  : Seasondata?.episodes.map((episode) => {
    //  @ts-ignore 

                    return <EpisodeCard season={episode} image={Seasondata?.images?.posters[0]?.file_path || SingleMovies?.backdrop_path} />
                  })}
              </section>
            </div>
            <div className={`Page_2 page_active  ${Active === "More" ? "visible" : "hidden"}`}>
              <h1>PAGE2</h1>
            </div>
            <div className={`Page_3 page_active  ${Active === "Trailer" ? "visible" : "hidden"}`}>
              {Trailer?.map((trailer) => {
    //  @ts-ignore 

                return <ShowCard trailerdata={trailer} />
              })}
            </div>
          </div>
        </div>
      </div>)
  )
}

export default MoviePage;

