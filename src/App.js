import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="art" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a href="https://github.com/aqiyla" target="_blank" rel="noreferrer">
            Aqiyla McLean,
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/aqiyla/react-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
