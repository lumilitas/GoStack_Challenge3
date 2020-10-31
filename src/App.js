import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
      console.log(response.data);
    })
  }, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      "title": `repository ${Date.now()}`,
      "url": `http://github.com/${Date.now}`,
      "techs": ["tecnologia 1", "tecnologia 2"]
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`);

    console.log(response.status);

    if(response.status >= 200) {
      setRepositories(repositories.filter(repository => repository.id !== id));
    }

  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => {
          return (<li key={repository.id}>
              {repository.title}

              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </button>
            </li>)
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
