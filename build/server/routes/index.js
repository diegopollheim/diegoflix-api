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
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const services_1 = require("../../services");
const route = (0, express_1.Router)();
exports.route = route;
// Lita de todos os filmes
route.get("/allMovies", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page;
    try {
        const responseAllMovies = yield (0, services_1.fetchAllMovies)(Number(page));
        if (responseAllMovies) {
            res.status(200).json(responseAllMovies);
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
// Lista de filmes por filtro
route.get("/allMoviesSearch", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = req.query.page;
    const search = req.query.search;
    try {
        const responseMoviesSearch = yield (0, services_1.fetchMoviesSearch)(Number(page), String(search));
        if (responseMoviesSearch) {
            res.status(200).json(responseMoviesSearch);
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
// Detalhes do filme por id
route.get("/movieDetails/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movieId = req.params.id;
    try {
        const responseMovieDetails = yield (0, services_1.fetchMovieDetails)(Number(movieId));
        if (responseMovieDetails) {
            res.status(200).json(responseMovieDetails);
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}));
