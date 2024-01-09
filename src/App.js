import './App.css';
import DemoComponent from './components/DemoComponent';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      My Todo Application
      <Counter increment={2}/>
      <Counter increment={5}/>
    </div>
  );
}

export default App;
