import { Key } from "react";

export type MovieProps = {
    imdbID: Key | number | string;
    Title: string;
    Year: number;
    Released: number;
    Type: string;
    Poster: string;
    Genre: string;
    Plot: string;
    Response?: string;
    Error?: string;
};
  