import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpi, setSelectedEpi] = useState();

  const EpisodeDetails = () => {
    if (!selectedEpi) {
      return (
        <section className="Details">
          <h2>No Episode Selected</h2>
          <p>Please select an episode to learn more!</p>
        </section>
      );
    }
    return (
      <section className="Details">
        <h2>Episode {selectedEpi.id}</h2>
        <h3>{selectedEpi.title}</h3>
        <h4>About</h4>
        <p>{selectedEpi.description}</p>
      </section>
    );
  };

  const Show = () => {
    return (
      <section className="Show">
        <h2>Episodes</h2>
        <ul className="Show">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpi(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  };

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Show />
        <EpisodeDetails />
      </main>
    </>
  );
}
