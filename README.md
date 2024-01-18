# HotStar Clone

This project is a HotStar clone built using React and TypeScript. It leverages the TMDB (The Movie Database) API to fetch movie details and images for an enhanced streaming experience.

## Features

- Browse a collection of movies and TV shows
- View detailed information about each title
- Watch trailers of movies
- Search for your favorite movies and TV shows

## Demo

[Live Demo](#) <!-- Add a link to your live demo once it's deployed -->

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/hostar-clone.git
```

2. Navigate to the project directory:

```bash
cd hostart-clone
```

3. Install dependencies:

```bash
npm install
```

### Configuration

Obtain API keys from [TMDB](https://www.themoviedb.org/) to enable access to their API.

Create a `.env` file in the root of your project and add the following:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
```

Replace `your_tmdb_api_key` with the API key you obtained.

### Usage

Run the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Technologies Used

- React
- TypeScript
- TMDB API

## Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie and TV show data

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
