import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Content } from './components/content';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Read } from './components/read';
import { Create } from './components/create';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Edit } from './components/edit';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">PokeDex</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/create">Add Pokemon</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Read></Read>}></Route>
            <Route path='/search' element={<Content></Content>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
