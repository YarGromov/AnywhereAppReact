import './css/style.css'
import './App.css';

const Header = () => {
  return (
    <div>
    <h1>Hello REACT</h1>
    <a href="#">Test</a>
    </div>
    
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
