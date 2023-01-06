import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ChatPage from './Components/ChatPage';
import Homepage from './Components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/chat" element={<ChatPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
