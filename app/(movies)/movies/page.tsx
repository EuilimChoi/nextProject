import Link from "next/link";
import { BASE_URL } from "../../../helper/baseUrl";
import Movie from "../../../components/movie";
import style from "../../../styles/home.module.css";

async function getMovies() {
  return await fetch(BASE_URL);
}

export default async function Posts({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await getMovies();
  const moviesJson = await response.json();
  return (
    <div className={style.container}>
      {moviesJson.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
