import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ChatPage from './Components/ChatPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<h1>this is awesome</h1>}></Route>
        <Route exact path='/chat' element={<ChatPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
