//Regresar al contador básico

function Christmas({ text }) {

  const [color, setColor] = useState('header green');

  setInterval(switchColor, 650, color, setColor);

  return (
    <div className={color}>
      {text}
    </div>
  );
}

function switchColor(color, setColor) {
  let newColor = color;
  if (newColor == 'header green') {
    newColor = 'header white';
  } else if (newColor == 'header white') {
    newColor = 'header red';
  } else if (newColor == 'header red') {
    newColor = 'header green';
  }
  //console.log(newColor);
  setColor(newColor);
}


/*
const {useState, useEffect } = React;

function Colores({ letras, arrColores }) {    

  let colorIndicado = arrColores;    
  let color = '';
  // console.log(colorIndicado);
  colorIndicado = colorIndicado.map((e, i) => {
    //console.log(letras.length);
    //console.log(e);
    switch (e) {
      case 'g':
        color = 'header green';
        //console.log('it was green color');
        break;
      case 'r':
        color = 'header red';
        //console.log('it was red color');
        break;
      case 'w':
        color = 'header white';
        //console.log('it was white color');
        break;
    }
    console.log(color);    

    return (
      <div key={i} className={color} >
        {letras[i]}
      </div>
    );      
  });
  //console.log(colorIndicado);
  //setInterval(shiftColores, 2000, arrColores, setArrColores);

  return <>{colorIndicado}</>
}




function Christmas({ text }) {

  let letras = text.split('');
  //console.log(letras);
  let colores = Array(text.length).fill('-').map((e, i) => {
    let num = (i + 1) % 3;
    switch (num) {
      case 1:
        return 'g';
      case 2:
        return 'r';
      case 0:
        return 'w';
    }
  });
  //console.log(colores);
  const [arrColores, setArrColores] = useState(colores);

  setInterval(shiftColores, 2000, arrColores, setArrColores);
  
  return (
    <>
      {arrColores[0]}
      <Colores letras={letras} arrColores={arrColores} setArrColores={setArrColores} />
    </>
    
  );
}

function shiftColores(arrColores, setArrColores) {
  let colActual = arrColores;
  let first = colActual.shift();
  colActual.push(first);
  //console.log(colActual);
  setArrColores(colActual);
}  
//setInterval(shiftColores, 1250);

*/