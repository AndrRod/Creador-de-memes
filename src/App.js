import React, {useState} from 'react'
import html2canvas from "html2canvas"
// import logo from './logo.svg';
import './App.css';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function(evento){    
    // alert(evento.target.value)
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function(evento){    
    // alert(evento.target.value)
    setLinea2(evento.target.value);
  }
  const onChangeImagen = function(imagen){
    setImagen(imagen.target.value)
  }
  const onClickBoton = function(evento){
    // alert("EXPORTAR");
    html2canvas(document.querySelector("#meme")).then(canvas => {
      // document.body.appendChild(canvas)
      let img = canvas.toDataURL("image/png")
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img
      link.click();
  });
  }

  return (
      
    <div className="App">
      <br/><br/>
      
      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>                
        <img src={'/img/'+ imagen +'.png'} alt={imagen}/>
      </div>

      <p className="parrafo">Elije una imagen para hacer tu meme:</p>
      <select onChange={onChangeImagen}>
        <option selected="true" disabled="disabled">seleccione una imagen</option>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="HC">History Channel</option>        
        <option value="matrix">Matrix</option>
        <option value="phil">Philosiraptor</option>
        <option value="smart">Smart guy</option>
      </select>      
      <br/>
      <p className="parrafo">Escribe el texto que quieras que tenga tu meme:</p>
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /><br/>
      <br/>

      <button className="boton" onClick={onClickBoton}>Exportar</button>


    </div>
  );
}

export default App;
 
