import Link from "next/link";
import { BASE_URL } from "../../helper/baseUrl";

async function getMovies() {
  return await fetch(`${BASE_URL}/movies`);
}

export default async function Posts({
  params: { id },
}: {
  params: { id: string };
}) {
  const response = await getMovies();
  const moviesJson = await response.json();
  return (
    <div>
      {moviesJson.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
