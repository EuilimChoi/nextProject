import { BASE_URL } from "../../../helper/baseUrl";

async function getMovieInfos(id: number) {
  return await fetch(`${BASE_URL}/movies/${id}`);
}

async function getMovieVideo(id: number) {
  return await fetch(`${BASE_URL}/movies/${id}/videos`);
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
      <h1>{moviesJson.title}</h1>
      <img src={moviesJson.poster_path}></img>
      <video src={videoJson.videoUrl} controls></video>
    </div>
  );
}
