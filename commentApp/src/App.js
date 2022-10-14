import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './container/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route >
          <Route exec path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
