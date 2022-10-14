import Clock from "./components/Clock/Clock";
import Posts from "./components/Posts/Posts";
function App() {
  return (
    <div className="App">
      <Clock />
      <div className="main-container">
      <h1 className="main-heading">
        Blog App using React Js 
      </h1>
      <Posts />
    
      
    </div>
      
    </div>
      
  );
}

export default App;
