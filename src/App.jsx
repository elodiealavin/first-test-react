// import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";

function App() {
  // const [data, setDAta] = useState();
  return (
    <div>
      <section>
        {data.map((elem) => {
          // console.log(elem);
          return (
            <div key={elem.id}>
              <main>
                <button>{elem.name}</button>
                <div className="title">
                  <h1>{elem.name}</h1>
                  <img className="background" src={elem.background} alt="" />
                </div>
              </main>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
