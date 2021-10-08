import { useState } from "react";
import "./App.css";

function App() {
const [text, handleChange] = useState("");

  return (
    <div className="App">
      <div className="box">
        <div className="field">
          <div className="control">
            <textarea value={text} onChange={(e) => handleChange(e.target.value)} className="textarea is-large" placeholder="Notes..." />
          </div>
        </div>
        <button className="button is-large is-primary is-active">Save</button>
        <button className="button is-large">Clear</button>
      </div>
    </div>
  );
}

export default App;
