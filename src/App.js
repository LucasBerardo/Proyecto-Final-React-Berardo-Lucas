import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import Saludo from './componentes/Saludo/Saludo.js';



function App() {
  return (
   
  <div className="App">

      <NavBar />
      
      <Saludo greeting={('BIENVENIDOS A NUTS')}/>
     
    </div>
   
);
}

export default App;
