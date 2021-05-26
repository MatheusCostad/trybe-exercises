import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Correr', 'Terminar o projeto', 'Terminar a atividade'];

function App() {
  return (
    <div>
      {
        taskList.map((element) => Task(element))
      }
    </div>
  );
}

export default App;
