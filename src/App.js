import "./App.css";

import ClassForm from "./components/ClassExample";
import HookExample from "./components/HookExample";

function App() {
  return (
    <div className="App">
      <div className="class">
        <h1>Class Component</h1>
        <ClassForm />
      </div>
      <div className="hook">
        <h1>Functional Component with Hooks</h1>
        <HookExample />
      </div>
    </div>
  );
}

export default App;
