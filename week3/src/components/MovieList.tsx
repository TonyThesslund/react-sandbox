import { useState } from "react";
import { useStore } from "../store/useMovieStore";

export default function MovieList() {
  const movies = useStore((state) => state.movies);
  const toggleWatched = useStore((state) => state.toggleWatched);

  const [filterType, setFilterType] = useState<
    "all" | "watched" | "unwatched"
  >("all");

  let filteredMovies = movies;
  if (filterType === "watched") {
    filteredMovies = movies.filter((m) => m.watched);
  } else if (filterType === "unwatched") {
    filteredMovies = movies.filter((m) => !m.watched);
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ marginBottom: "1rem", fontSize: "1.4rem" }}>
        Movie library
      </h2>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <button
          onClick={() => setFilterType("all")}
          style={{
            padding: "0.4rem 0.8rem",
            background: filterType === "all" ? "#ddd" : "#f5f5f5",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          All movies
        </button>

        <button
          onClick={() => setFilterType("watched")}
          style={{
            padding: "0.4rem 0.8rem",
            background: filterType === "watched" ? "#ddd" : "#f5f5f5",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          Watched movies
        </button>

        <button
          onClick={() => setFilterType("unwatched")}
          style={{
            padding: "0.4rem 0.8rem",
            background: filterType === "unwatched" ? "#ddd" : "#f5f5f5",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          Unwatched
        </button>
      </div>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {filteredMovies.map((movie) => (
          <li
            key={movie.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.75rem 1rem",
              border: "1px solid #ddd",
              borderRadius: "6px",
              background: "#fafafa",
            }}
          >
            <div>
              <strong>{movie.title}</strong>{" "}
              {movie.watched ? "✅ Watched" : "⏳ Unwatched"}
            </div>

            <button
              onClick={() => toggleWatched(movie.id)}
              style={{
                padding: "0.4rem 0.8rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                background: "#fff",
              }}
            >
              Change state
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
