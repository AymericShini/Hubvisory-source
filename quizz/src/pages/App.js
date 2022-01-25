import '../css/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          ! Quizzotron !
        </h1>
        <h2>
          Bienvenue sur notre quizz en ligne ! 
        </h2>
        <p>
          Ici vous pouvez trouver les différentes règles de nos quizz. <br></br>
          Sur tous les quizz vous aurez plusieurs questions, vous devrez y répondre par "Oui" ou "Non". Attention vous avez un temps pour chaque question.
        </p>
        <a
          className="start-button"
          href="mylink"
          target="_blank"
        >
          Start !
        </a>
      </header>
    </div>
  );
}

export default App;
