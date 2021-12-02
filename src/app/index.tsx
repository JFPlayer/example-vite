import { FunctionComponent, useState } from "react";
import "antd/dist/antd.css";
import Header from '../core/header'
import Poster from '../core/poster'

const App: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return(
    <div>
      <Header/>
      count: {count}
      <button onClick={() => setCount(count => count + 1)}>
        increase
      </button>
      <Poster/>
    </div>
  )
}

export default App;
