var clicks = 0;
var x1 = 0,
  x2 = 0,
  y1 = 0,
  y2 = 0;
  aux = 0;
 let Y = 0;
  let X  = 0;

   /* function opcion(event) {
    if (document.getElementById('myradio_2').checked) {
        //document.write('<script type="text/javascript" src="DDA.js"></script>');
        obtenerCoords(event);
    }
} */

function obtenerCoords2(event) {
  clicks = clicks + 1;
  if (clicks == 1) {
    x1 = event.clientX;
    y1 = event.clientY;
    var coor = "X: " + x1 + ", Y: " + y1;

    console.log(coor);
    //document.getElementById("x1y1").innerHTML = coor;
  } else if (clicks == 2) {
    clicks = 0;
    let i = 0;
    x2 = event.clientX;
    y2 = event.clientY;
    var coor2 = "X2: " + x2 + ", Y2: " + y2;

    console.log(coor2);
    //document.getElementById("x2y2").innerHTML = coor2;

    dy = y2-y1;
    dx = x2-x1;
    m = dy/dx;
    console.log("dy = " + dy, "dx = " + dx + "m = " + m);

    rangox = Math.abs(x1 - x2);
    rangoy = Math.abs(y1 - y2);
    console.log("rango x: " + rangox, "rango y: " + rangoy);
    let inicio = 0, fin = 0;
    
      
      
      var lienzo = document.querySelector("canvas");
      var context = lienzo.getContext("2d");
      context.fillStyle = "blue";
      
      if (Math.abs(x2-x1) >= Math.abs(y2-y1))
        {
          aux = Math.abs(x2 - x1);
          console.log("Aux = " + aux);
        }
        else
        {
          aux = Math.abs(y2 - y1);
          console.log("Aux = " + aux);
        }
       

        dx = (x2 - x1) / aux;
        dy = (y2 - y1) / aux;
        console.log("dx = " + dx);
        console.log("dy = " + dy);
       

        X = x1;
        Y = y1;

        
        
        while(i <= aux)
        {
          RedondeoX = Math.round(X);
          RedondeoY = Math.round(Y);
          console.log("RedX = " + RedondeoX);
          console.log("RedY = " + RedondeoY);

          context.fillRect(RedondeoX, RedondeoY, 1, 1);
          console.log("X = " + X);
          console.log("Y = " + Y);

          X = X + dx;
          Y = Y + dy;
          i++;
        }
      
      }
  } /* else if (clicks == 3) {
    alert("Solo se necesitan dos puntos diferentes de coordenadas");
  } */