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
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="HC">History Channel</option>        
        <option value="matrix">Matrix</option>
        <option value="phil">Philosiraptor</option>
        <option value="smart">Smart guy</option>
      </select>      
      <br/>
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /><br/>
      <button onClick={onClickBoton}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
        
        <img src={'/img/'+ imagen +'.png'} alt={imagen}/>
      </div>
      

    </div>
  );
}

export default App;
 



// element.style {
//   color: #FFFFFF;
//   text-shadow: 0 -1px 4px #000, 0 -2px 10px #000, 0 -10px 20px #000000, 0 -18px 40px #000;
//   margin-top: 61px;
//   font-size: 40px;
//   /* background: #333333; */
//   /* color: #FFFFFF; */
//   /* width: 100%; */
//   /* background: #333333; */
//   position: absolute;
//   /* color: white; */
//   /* text-shadow: 0 0 2px #000000; */
//   /* border: 2px; */
// }
