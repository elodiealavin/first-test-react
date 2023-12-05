import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

function App() {
  const [movies, setMovies] = useState(data);
  const [actors, setActors] = useState([]);
  console.log("console1", movies);
  console.log("console4", actors); //undifed
  return (
    <div>
      <section>
        {movies.map((elem, id) => {
          console.log("console2", elem);
          console.log("console3", id);
          return (
            <button key={movies.id}>
              <p>{elem.name}</p>
              {movies.actors.map((actor) => {
                console.log("console5", actor);
              })}
            </button>
          );
        })}
      </section>
    </div>
  );
}

export default App;
