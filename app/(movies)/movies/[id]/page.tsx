import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { BASE_URL } from "../../../../helper/baseUrl";

interface IParams {
  params: { id: string };
}

async function getMovieInfos(id: number) {
  return await fetch(`${BASE_URL}/${id}`);
}

async function getMovieVideo(id: number) {
  return await fetch(`${BASE_URL}/${id}/videos`);
}

export async function generateMetadata({ params: { id } }: IParams) {
  const response = await getMovieInfos(parseInt(id));
  const moviesJson = await response.json();
  const title = moviesJson.title;

  return {
    title: title,
  };
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
      <MovieVideos id={id} />
    </div>
  );
}
