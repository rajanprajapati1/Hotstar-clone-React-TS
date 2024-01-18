import { FaSearch, FaUser, FaTv, FaBowlingBall } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'

interface NavItem {
  icon: React.ReactNode;
  label: string;
  route: string
}
export type setting = {
  dots: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  slidesToScroll: number,
  // Hide pagination dots
  arrows: boolean,
  autoplay: boolean
}
export const navItems: NavItem[] = [
  { icon: <GoHomeFill className="cll text-3xl mb-8 mt-8 hover:text-white hover:scale-125 transition-shadow text-gray-600" />, label: 'Home', route: '/' },
  { icon: <FaSearch className="cll text-3xl mb-8 mt-8 hover:text-white hover:scale-125 transition-shadow text-gray-600" />, label: 'Search', route: '/search' },
  { icon: <FaUser className="cll text-3xl mb-8 mt-8 hover:text-white hover:scale-125 transition-shadow text-gray-600" />, label: 'Profile', route: '/profile' },
  { icon: <FaTv className="cll text-3xl mb-8 mt-8 hover:text-white hover:scale-125 transition-shadow text-gray-600" />, label: 'TV', route: '/tv-show' },
  { icon: <FaBowlingBall className="cll text-3xl mb-8 mt-8 hover:text-white hover:scale-125 transition-shadow text-gray-600" />, label: 'Sports', route: '/tv/channel' },
];

export type MoviesData = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | any; // Replace 'any' with the actual type if available
  budget: number;
  genres: Array<any>; // Replace 'any' with the actual type if available
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<any>; // Replace 'any' with the actual type if available
  production_countries: Array<any>; // Replace 'any' with the actual type if available
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<any>; // Replace 'any' with the actual type if available
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export type ChannelCategory =
  | 'sports'
  | 'news'
  | 'music'
  | 'religious'
  | 'entertainment'
  | 'movies'
  | 'kids'
  | 'documentary'
  | 'animation'
  | 'general'
  | 'lifestyle'
  | 'business'
  | 'comedy'
  | 'science'
  | 'auto'
  | 'education'
  | 'series'
  | 'shop'
  | 'legislative'
  | 'culture'
  | 'cooking'
  | 'family'
  | 'travel'
  | 'weather'
  | 'classic';

  type cate= {
    name :string
  }
  export type Channel = {
    alt_names: string[];
    broadcast_area: string[];
    categories: string[]; // Modify this to match the actual structure of your data
    city: string | null;
    closed: string | null;
    country: string;
    id: string;
    is_nsfw: boolean;
    languages: string[];
    launched: string | null;
    logo: string;
    name: string;
    network: string | null;
    owners: string[];
    replaced_by: string | null;
    subdivision: string | null;
    website: string | null;
  };
 export  const categories:cate[]= [
    { name: 'sports' },
    { name: 'news' },
    { name: 'music' },
    { name: 'religious' },
    { name: 'entertainment' },
    { name: 'movies' },
    { name: 'kids' },
    { name: 'documentary' },
    { name: 'animation' },
    { name: 'general' },
    { name: 'lifestyle' },
    { name: 'business' },
    { name: 'comedy' },
    { name: 'science' },
    { name: 'auto' },
    { name: 'education' },
    { name: 'series' },
    { name: 'shop' },
    { name: 'legislative' },
    { name: 'culture' },
    { name: 'cooking' },
    { name: 'family' },
    { name: 'travel' },
    { name: 'weather' },
    { name: 'classic' },
  ];
export interface CategoryObject {
  id: number;
  name: ChannelCategory;
  type: string;
}

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Array<{
    // Genre type definition can be added here based on the actual data structure
  }>;
  homepage: string;
  id: number;
  original_name: string;
  media_type: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    // Production company type definition can be added here based on the actual data structure
  }>;
  production_countries: Array<{
    // Production country type definition can be added here based on the actual data structure
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    // Spoken language type definition can be added here based on the actual data structure
  }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface EpisodeDetails {
  air_date: string;
  crew: any[]; // You can replace `any` with the specific type for crew data if available
  episode_number: number;
  episode_type: string;
  guest_stars: any[];
  images: any[]; // You can replace `any` with the specific type for guest stars data if available
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}
export interface SeasonDetails {
  air_date: string;
  episodes: EpisodeDetails[];
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
  _id: string;
}

export type MovieTrailer = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};
export type EmbeddMovieData = {
  id: number;
  Link1: string;
  Link2: string;
  original_title: string;
  original_name: string;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  runtime: number;
  tagline: string;
}
