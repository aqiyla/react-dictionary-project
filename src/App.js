import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="summer" />
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
            GitHub
          </a>
          {""} and hosted on{" "}
          <a
            href="https://snazzy-madeleine-6327bd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
