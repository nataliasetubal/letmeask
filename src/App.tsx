import { BrowserRouter, Route} from 'react-router-dom'

import { Button } from "./components/Button";
import { Home } from "./pages/Home";
import {NewRoom} from './pages/NewRoom'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}></Route>
      <Route path='/rooms/new' component={NewRoom}></Route>
    </BrowserRouter>
  );
}

export default App;
