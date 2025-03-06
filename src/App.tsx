import StoriesContainer from "./components/StoriesContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Instagram Stories</h1>
      </header>
      <main className="app-main">
        <StoriesContainer />
      </main>
    </div>
  );
}

export default App;
