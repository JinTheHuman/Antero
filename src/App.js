import Header from "./Components/Header";
import React, {useState} from 'react'

function App() {

  const [improvements, setImprovements] = useState([]);
  
  return (
    <div className="App">
      <Header/>
      <div className="Columns">
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
      </div>
    </div>
  );
}

export default App;
