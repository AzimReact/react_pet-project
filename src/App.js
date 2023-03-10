import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
function App() {
  const [value, setValue] = useState('Текст в инпуте');

  return (
    <div className="App">
        <Counter />
        <ClassCounter />
        <h1>{value}</h1>
        <input type='text' onChange={event => setValue(event.target.value)} value={value}/>
    </div>
  );
}

export default App;
