import { MoviesData } from "../types/types";

{
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer Your Api Key'
//   }
// };

// fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${count}`, options)
//   .then(response => response.json())
//   .then(response => setMovies(response.results)
// useEffect(() => {
//   const url = `https://api.themoviedb.org/3/movie/60735`;
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer Your Api Key'
//     }
    //   };
//   axios.get(url, options)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }, [id]);
// https://autoembed.to/movie/tmdb/${id}`
// <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} 
//   useEffect(()=>{
//     const url = `https://api.themoviedb.org/3/search/multi?query=flash&include_adult=false&language=en-US&page=1`;
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer '
//       }
//     };

//     fetch(url, options)
//       .then(response => response.json())
//       .then(response =>console.log(response.results))
//       .catch(err => console.error(err));
// }, []);

//   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
}

export type Movie ={
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    mediaType:string;
    name : string,
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
//  
export const fetchData = async (query:string): Promise<Movie[] | MoviesData[] | Movie[]> => {
    const apiKey = ''; // Replace with your TMDb API key
    const url = `https://api.themoviedb.org/3/${query}`;
  
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data.results as Movie[] || data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to handle it outside this function if needed
    }
  };
  
  
  export default fetchData;
  











