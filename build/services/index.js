"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMovieDetails = exports.fetchMoviesSearch = exports.fetchAllMovies = void 0;
const axios_1 = __importDefault(require("axios"));
const dayjs_1 = __importDefault(require("dayjs"));
const fetchAllMovies = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = `${process.env.API_BASE}/movie/now_playing?language=pt-BR&include_adult=false&page=${page}&api_key=${process.env.API_KEY}`;
    const { data } = yield axios_1.default.get(uri);
    let filmes = [];
    data.results.forEach((filme) => {
        filmes.push({
            id: filme.id,
            title: filme.title,
            image: filme.poster_path,
            note: filme.vote_average,
            releaseDate: filme.release_date,
        });
    });
    return { filmes, totalPages: data.total_pages };
});
exports.fetchAllMovies = fetchAllMovies;
const fetchMoviesSearch = (page, query) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = `${process.env.API_BASE}/search/movie?query=${query}&include_adult=false&language=pt-BR&page=${page}&api_key=${process.env.API_KEY}`;
    const { data } = yield axios_1.default.get(uri);
    let filmes = [];
    data.results.forEach((filme) => {
        filmes.push({
            id: filme.id,
            title: filme.title,
            image: filme.poster_path,
            note: filme.vote_average,
            releaseDate: filme.release_date,
        });
    });
    return { filmes, totalPages: data.total_pages };
});
exports.fetchMoviesSearch = fetchMoviesSearch;
const fetchMovieDetails = (movieId) => __awaiter(void 0, void 0, void 0, function* () {
    const uri = `${process.env.API_BASE}/movie/${movieId}?language=pt-BR&api_key=${process.env.API_KEY}`;
    const { data } = yield axios_1.default.get(uri);
    let retorno = {
        title: data.title,
        sinopse: data.overview,
        popularity: data.popularity,
        imageCapa: data.poster_path,
        imageThumb: data.backdrop_path,
        year: parseInt((0, dayjs_1.default)(data.release_date).format("YYYY")),
    };
    return retorno;
});
exports.fetchMovieDetails = fetchMovieDetails;
