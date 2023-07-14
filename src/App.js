
import "./App.scss"
import Header from "./components/header/Header";
import Card from "./components/main/Card";
import Navbar from './components/navbar/Navbar'
import data from './helper/data'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Card veri = {data}/>
    </div>
  );
}

export default App;
