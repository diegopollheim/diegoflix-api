export type FilmeModel = {
    id: number;
    image: string;
    title: string;
    note: number;
    releaseDate: Date
  }
  export type FilmeDetailsModel = {
    title: string;
    sinopse: string;
    popularity: number
    imageCapa: string;
    imageThumb: string;
    year: number;
    trailerKey: string;
  }

  export type FilmeDetailUniq = {
    adult:  boolean,
        backdrop_path: string,
        id: number,
        title: string,
        original_language: string,
        original_title: string,
        overview: string,
        poster_path: string,
        media_type:string,
        genre_ids: [],
        popularity: number,
        release_date: Date,
        video: boolean,
        vote_average: number,
        vote_count: number
  }