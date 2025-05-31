import logo from './logo.svg';
import './App.css';
import HeaderComponent from './header';
import SliderComponent from './slider';
import FooterComponent from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <HeaderComponent></HeaderComponent>
    <SliderComponent></SliderComponent>
    <FooterComponent></FooterComponent>

    </div>
  );
}

export default App;
