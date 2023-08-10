import './App.css';
import NavigationBar from './Components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Pages/Home'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
    </div>
  );
}

export default App;
