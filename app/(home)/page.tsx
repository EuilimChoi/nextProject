import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { BASE_URL } from "../../helper/baseUrl";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(BASE_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>this is home</div>;
}

export const runtime = "edge";
