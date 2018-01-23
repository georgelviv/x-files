import * as React from "react"
import './App.less';

function getDate(name: String) {
  return name;
}

const App = () => {
  return (
    <div>Hello wolrd, now is { getDate('Hello') }</div>
  );
};

export default App;