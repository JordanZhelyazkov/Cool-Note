import { useState } from "react";
import "./App.css";

function App() {
const [text, handleChange] = useState("");

 
 
 const resetTxt = () => {
  handleChange("");
  localStorage.removeItem('txt');
};

 const saveTxt = () => {
  localStorage.setItem('txt', text);
 }
 
  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea   onChange={(e) => handleChange(e.target.value)} className="textarea is-large" placeholder="Notes..." />
          </div>
        </div>
        <button type="submit" onClick={saveTxt} className="button is-large is-primary is-active">Save</button>
        <button type="reset" onClick={resetTxt} className="button is-large">Clear</button>
      </div>
    </div>
  );
}

export default App;
