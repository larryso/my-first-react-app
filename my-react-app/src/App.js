import { useState } from 'react'; //React useState Hook allows us to track state in a function
import './App.css';

function App() {

  //the first value dropzoneActive is current state, the second value setDropzoneActive is the function that update our state
const [dropzoneActive, setDropzoneActive] = useState( false );

  return (
    <div>
      <div onDragOver={e =>{setDropzoneActive( true); e.preventDefault();}} 
      className="dropzone">Drop your file here</div>
    </div>
  );
}

export default App;
