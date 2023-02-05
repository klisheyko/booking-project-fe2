import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Offers from "./components/Offers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Offers/>
      <Footer/>
    </div>
  );
}

export default App;
