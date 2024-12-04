import Header from './components/Header';
import Main from './components/Main';
import MovieArea from './components/MovieArea';
import MovieAreaTitle from './components/MovieAreaTitle';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <MovieArea apiEndpoint='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'>
        <MovieAreaTitle title='Now Playing' />
      </MovieArea>
      <MovieArea apiEndpoint='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'>
        <MovieAreaTitle title='Top Rated' />
      </MovieArea>
      <MovieArea apiEndpoint='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'>
        <MovieAreaTitle title='Upcoming' />
      </MovieArea>
    </>
  );
}
