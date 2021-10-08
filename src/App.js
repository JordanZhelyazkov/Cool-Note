import { useState } from "react";
import "./App.css";

function App() {
let [text, handleChange] = useState("");

 const resetTxt = () => {
  handleChange(text);
};

 const saveTxt = () => {
   handleChange(text)
  localStorage.setItem('txt', text);
 }


 
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea value={text || localStorage.getItem('txt')} onChange={(e) => handleChange(e.target.value)} className="textarea is-large" placeholder="Notes..." />
          </div>
        </div>
        <button  onClick={saveTxt}  className="button is-large is-primary is-active">Save</button>
        <button  onClick={resetTxt} className="button is-large">Clear</button>
      </div>
    </div>
  );
}

export default App;
