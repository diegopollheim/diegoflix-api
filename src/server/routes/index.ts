import { Router } from "express";
import {
  fetchAllMovies,
  fetchMovieDetails,
  fetchMoviesSearch,
} from "../../services";

const route = Router();

// Lita de todos os filmes
route.get("/allMovies", async (req, res) => {
  const page = req.query.page;
  try {
    const responseAllMovies = await fetchAllMovies(Number(page));
    if (responseAllMovies) {
      res.status(200).json(responseAllMovies);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Lista de filmes por filtro
route.get("/allMoviesSearch", async (req, res) => {
  const page = req.query.page;
  const search = req.query.search;

  try {
    const responseMoviesSearch = await fetchMoviesSearch(
      Number(page),
      String(search)
    );
    if (responseMoviesSearch) {
      res.status(200).json(responseMoviesSearch);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Detalhes do filme por id
route.get("/movieDetails/:id", async (req, res) => {
  const movieId = req.params.id;

  try {
    const responseMovieDetails = await fetchMovieDetails(Number(movieId));
    if (responseMovieDetails) {
      res.status(200).json(responseMovieDetails);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export { route };
