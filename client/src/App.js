import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewBook from './NewBook';
import NewShelf from './NewShelf';
import Navbar from './Navbar';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content"></div>

        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route path='/newBook' element = {<NewBook/>}/>
          <Route path='/newShelf'>
            <NewShelf />
          </Route>
        </Routes>

      </div>
    </Router>
  );
}
export default App;