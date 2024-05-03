import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewNote from './components/NewNote';
import { Container } from '@mui/material';

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Route path='/' element={<h4>home</h4>}/>
          <Route path='/new' element={<NewNote/>}/>
          <Route path='/:id'>
            <Route index element={<h3>show</h3>}/>
            <Route path='edit' element={<h3>edit</h3>}></Route>
          </Route>
          <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
