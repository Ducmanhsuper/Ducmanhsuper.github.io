import './App.scss';
import Nav from './components/Navbar/Nav';
import RouteManager from './components/Routes/RouteMange';
function App() {
  return (
    <div className="App">


      <RouteManager />
      <Nav />
    </div>
  );
}

export default App;

