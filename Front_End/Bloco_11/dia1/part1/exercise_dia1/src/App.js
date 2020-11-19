import './App.css';

const array = ['Estudar matemática', 'Gravar fórmulas de física', 'Terminar o artigo', 'Marcar consulta no psicólogo']

const task = (value) => {
  return (
  <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {task('Estudar redação')}
          {array.map((value) => {
            return (<li>{value}</li>)
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
