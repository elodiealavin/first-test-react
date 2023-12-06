import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

function App() {
  const [movies, setMovies] = useState();
  // console.log("console1", movies);
  // console.log("console4", actors); //undifed
  return (
    <div>
      <main
        className="container"
        style={{
          backgroundImage: movies ? `url(${movies.background})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section>
          <header className="button">
            {data.map((elem, id) => {
              console.log("console2", elem);
              console.log("console3", id);
              return (
                <button
                  key={elem.id}
                  onClick={() => {
                    setMovies(elem);
                  }}
                >
                  <p>{elem.name}</p>
                </button>
              );
            })}
          </header>
        </section>
        <div className="home">
          {movies === undefined ? (
            <span>Merci de choisir un film !</span>
          ) : (
            <div className="card-container">
              <div className="title">
                <h1>{movies.name}</h1>
              </div>
              {movies.actors.map((actor, index) => {
                console.log("console5", actor);
                return (
                  <div className="card-actor" key={index}>
                    <div className="picture">
                      <img src={actor.picture} />
                    </div>
                    <div className="name">
                      <p>{actor.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
