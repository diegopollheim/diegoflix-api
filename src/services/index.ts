import axios from "axios";
import { FilmeDetailUniq, FilmeDetailsModel, FilmeModel } from "../model/filme";
import dayjs from "dayjs";

export const fetchAllMovies = async (page: number) => {
  const uri = `${process.env.API_BASE}/movie/now_playing?language=pt-BR&include_adult=false&page=${page}&api_key=${process.env.API_KEY}`;

  const { data } = await axios.get(uri);

  let filmes: FilmeModel[] = [];

  data.results.forEach((filme: FilmeDetailUniq) => {
    filmes.push({
      id: filme.id,
      title: filme.title,
      image: filme.poster_path,
      note: filme.vote_average,
      releaseDate: filme.release_date,
    });
  });

  return { filmes, totalPages: data.total_pages };
};

export const fetchMoviesSearch = async (page: number, query: string) => {
  const uri = `${process.env.API_BASE}/search/movie?query=${query}&include_adult=false&language=pt-BR&page=${page}&api_key=${process.env.API_KEY}`;

  const { data } = await axios.get(uri);

  let filmes: FilmeModel[] = [];

  data.results.forEach((filme: FilmeDetailUniq) => {
    filmes.push({
      id: filme.id,
      title: filme.title,
      image: filme.poster_path,
      note: filme.vote_average,
      releaseDate: filme.release_date,
    });
  });

  return { filmes, totalPages: data.total_pages };
};

export const fetchMovieDetails = async (movieId: number) => {
  const uri = `${process.env.API_BASE}/movie/${movieId}?language=pt-BR&api_key=${process.env.API_KEY}`;
  const { data } = await axios.get(uri);

  const uriTrailer = `${process.env.API_BASE}/movie/${movieId}/videos?language=pt-BR&api_key=${process.env.API_KEY}`;
  const { data: dataTrailer } = await axios.get(uriTrailer);

  let retorno: FilmeDetailsModel = {
    title: data.title,
    sinopse: data.overview,
    popularity: data.popularity,
    imageCapa: data.poster_path,
    imageThumb: data.backdrop_path,
    year: parseInt(dayjs(data.release_date).format("YYYY")),
    trailerKey: dataTrailer.results[0]?.key
  };

  return retorno;
};
