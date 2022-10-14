import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './container/profile';
import PForm from './container/form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route >
            <Route exec path="/" element={<PForm />} />
            <Route exec path="Profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
