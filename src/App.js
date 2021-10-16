import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Navbar } from './componentes/Navbar';
import { Producto } from './componentes/Producto';
import { Productos } from './componentes/Productos';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Switch >
          <Route exact path="/lista-productos/:id" component={Producto} />
          <Route exact path="/" component={Productos} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
