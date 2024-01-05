import Header from "componset/Header";
import Footer from "componset/Footer";
import {useRoutes} from 'react-router-dom'
import routes from "./route";
function App() {
  return (
    <div className="App">
      <Header></Header>
      {useRoutes(routes)}
      <Footer></Footer>
    </div>
  );
}

export default App;
