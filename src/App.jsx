import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

function App() {
  const [movies, setMovies] = useState({});
  // console.log("console1", movies);
  // console.log("console4", actors); //undifed
  return (
    <div>
      <section className="container">
        {data.map((elem, id) => {
          console.log("console2", elem);
          console.log("console3", id);
          return (
            <main>
              <div className="button">
                <button
                  key={elem.id}
                  onClick={() => {
                    setMovies(elem);
                  }}
                >
                  <p>{elem.name}</p>
                </button>
              </div>

              {movies.id === elem.id && (
                <div className="main-container">
                  {elem.actors.map((actor, index) => {
                    console.log("console5", actor);
                    return (
                      <div className="card-actor" key={index}>
                        <div className="picture">
                          {/* <img src={actor.picture} /> */}
                        </div>
                        <div className="name">
                          {/* <p className="name-actor">{actor.name}</p> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </main>
          );
        })}
      </section>
    </div>
  );
}

export default App;
