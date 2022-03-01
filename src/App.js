import Header from "./Components/Header";
import React, {useState} from 'react'

function App() {

  const [improvements, setImprovements] = useState([]);
  
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
