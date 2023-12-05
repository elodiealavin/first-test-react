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
      <section className="container">
        {movies.map((elem, id) => {
          console.log("console2", elem);
          console.log("console3", id);
          return (
            <main>
              <div className="button">
                <button key={movies.id}>
                  <p>{elem.name}</p>
                </button>
              </div>
              <div className="main-container">
                {elem.actors.map((actor, index) => {
                  console.log("console5", actor);
                  return (
                    <div className="card-actor" key={index}>
                      <img src={actor.picture} />
                      <p className="name-actor">{actor.name}</p>
                    </div>
                  );
                })}
              </div>
            </main>
          );
        })}
      </section>
    </div>
  );
}

export default App;
