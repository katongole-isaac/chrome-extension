import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

export default function App() {
  return (
    <div className="bg-blue-100" >
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={`${viteLogo}`} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img
            src={`${typescriptLogo}`}
            className="logo vanilla"
            alt="TypeScript logo"
          />
        </a>
        <h1>Vite + TypeScript</h1>
        <div className="card">
          <button id="counter" type="button"></button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and TypeScript logos to learn more
        </p>
      </div>
    </div>
  );
}
