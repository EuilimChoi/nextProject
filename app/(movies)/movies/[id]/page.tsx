import MovieInfo from "../../../../components/movie-info";
import { BASE_URL } from "../../../../helper/baseUrl";

async function getMovieInfos(id: number) {
  return await fetch(`${BASE_URL}/${id}`);
}

async function getMovieVideo(id: number) {
  return await fetch(`${BASE_URL}/${id}/videos`);
}

export default async function Posts({
  params: { id },
}: {
  params: { id: string };
}) {
  const [response, videoResponse] = await Promise.all([
    await getMovieInfos(parseInt(id)),
    await getMovieVideo(parseInt(id)),
  ]);

  const moviesJson = await response.json();
  const videoJson = await videoResponse.json();

  return (
    <div>
      <MovieInfo id={id} />
    </div>
  );
}
