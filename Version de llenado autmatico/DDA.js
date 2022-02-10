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
    x1 = event.clientX-8;
    y1 = event.clientY-8;
    var coor = "X: " + x1 + ", Y: " + y1;

    console.log(coor);
    //document.getElementById("x1y1").innerHTML = coor;
  } else if (clicks == 2) {
    clicks = 0;
    let i = 0;
    x2 = event.clientX-8;
    y2 = event.clientY-8;
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

  function linea(event){
    //console.log("HOLA");
   let aux1=0, aux2=0, auxy1=0, auxy2=0;
   let conta=0;
    x1 = 0;
    y1 = 0;
    x2 = 0;
    y2 = 0;
    console.time('testTime');
    for (let index = 1; index <= 100; index++) {

      x1 = 1;
      x2 = 1000;
      y1 = y1 + 2;
      y2 = y2 + 2;

      if (conta == 0) {
        aux1 = x1;
        aux2 = x2;
        auxy1 = y1;
        auxy2 = y2;
        x1 = aux2;
        x2 = aux1;
        y1 = auxy2;
        y2 = auxy1;
        conta = 1;
      }else{
        conta =0;
      }
      var lienzo = document.querySelector("canvas");
          var context = lienzo.getContext("2d");
        //  context.fillStyle = "Blue";
if (conta == 1) {
  context.fillStyle = "red";
}else{
  context.fillStyle = "Blue";
}
      
        if (Math.abs(x2-x1) >= Math.abs(y2-y1))
          {
            aux = Math.abs(x2 - x1);
            //console.log("Aux = " + aux);
          }
          else
          {
            aux = Math.abs(y2 - y1);
            //console.log("Aux = " + aux);
          }
          //console.log("*************************************");

          Dx = (x2 - x1) / aux;
          Dy = (y2 - y1) / aux;
          /*console.log("Dx = " + Dx);
          console.log("Dy = " + Dy);
          console.log("*************************************");*/

          X = x1;
          Y = y1;

          
          
          let i = 0;
          while(i <= aux)
          {
            RedondeoX = Math.round(X);
            RedondeoY = Math.round(Y);
            //console.log("RedX = " + RedondeoX);
            //console.log("RedY = " + RedondeoY);

            context.fillRect(RedondeoX, RedondeoY, 1, 1);
            //console.log("X = " + X);
            //console.log("Y = " + Y);

            X = X + Dx;
            Y = Y + Dy;
            i++;
          }
          if (conta == 1) {
            x1 = aux1;
            x2 = aux2;
            y1 = auxy1;
            y2 = auxy2;
          }
      }
      //jj
      x1 = 0;
    y1 = 0;
    x2 = 0;
    y2 = 0;

    for (let index = 1; index <= 100; index++) {

      x1 = 0;
            x2 += 2;
            y1 += 2;
            y2 = 0;
            if (conta == 0) {
              aux1 = x1;
              aux2 = x2;
              auxy1 = y1;
              auxy2 = y2;
              x1 = aux2;
              x2 = aux1;
              y1 = auxy2;
              y2 = auxy1;
              conta = 1;
            }else{
              conta =0;
            }
            var lienzo = document.querySelector("canvas");
                var context = lienzo.getContext("2d");
              //  context.fillStyle = "Blue";
      if (conta == 1) {
        context.fillStyle = "red";
      }else{
        context.fillStyle = "Blue";
      }
        if (Math.abs(x2-x1) >= Math.abs(y2-y1))
          {
            aux = Math.abs(x2 - x1);
            //console.log("Aux = " + aux);
          }
          else
          {
            aux = Math.abs(y2 - y1);
            //console.log("Aux = " + aux);
          }
          //console.log("*************************************");

          Dx = (x2 - x1) / aux;
          Dy = (y2 - y1) / aux;
          /*console.log("Dx = " + Dx);
          console.log("Dy = " + Dy);
          console.log("*************************************");*/

          X = x1;
          Y = y1;

        
          
          let i = 0;
          while(i <= aux)
          {
            RedondeoX = Math.round(X);
            RedondeoY = Math.round(Y);
            //console.log("RedX = " + RedondeoX);
            //console.log("RedY = " + RedondeoY);

            context.fillRect(RedondeoX, RedondeoY, 1, 1);
            //console.log("X = " + X);
            //console.log("Y = " + Y);

            X = X + Dx;
            Y = Y + Dy;
            i++;
          }
          if (conta == 1) {
            x1 = aux1;
            x2 = aux2;
            y1 = auxy1;
            y2 = auxy2;
          }
      }
      x1 = 1000;
              x2 = 1000;
              y1 = 0;
              y2 = 0;

    for (let index = 1; index <= 100; index++) {

      // x1 = 1000;
      x2 -= 2;
      //y1 = 1000;
      y1 += 2;
      if (conta == 0) {
        aux1 = x1;
        aux2 = x2;
        auxy1 = y1;
        auxy2 = y2;
        x1 = aux2;
        x2 = aux1;
        y1 = auxy2;
        y2 = auxy1;
        conta = 1;
      }else{
        conta =0;
      }
      var lienzo = document.querySelector("canvas");
          var context = lienzo.getContext("2d");
        //  context.fillStyle = "Blue";
if (conta == 1) {
  context.fillStyle = "red";
}else{
  context.fillStyle = "Blue";
}
        if (Math.abs(x2-x1) >= Math.abs(y2-y1))
          {
            aux = Math.abs(x2 - x1);
            //console.log("Aux = " + aux);
          }
          else
          {
            aux = Math.abs(y2 - y1);
            //console.log("Aux = " + aux);
          }
          //console.log("*************************************");

          Dx = (x2 - x1) / aux;
          Dy = (y2 - y1) / aux;
          /*console.log("Dx = " + Dx);
          console.log("Dy = " + Dy);
          console.log("*************************************");*/

          X = x1;
          Y = y1;

          
          
          let i = 0;
          while(i <= aux)
          {
            RedondeoX = Math.round(X);
            RedondeoY = Math.round(Y);
            //console.log("RedX = " + RedondeoX);
            //console.log("RedY = " + RedondeoY);

            context.fillRect(RedondeoX, RedondeoY, 1, 1);
            //console.log("X = " + X);
            //console.log("Y = " + Y);

            X = X + Dx;
            Y = Y + Dy;
            i++;
          }
          if (conta == 1) {
            x1 = aux1;
            x2 = aux2;
            y1 = auxy1;
            y2 = auxy2;
          }
      }
      x1 = 0;
      y1 = 0;
      x2 = 0;
      y2 = 1000;
  
      for (let index = 1; index <= 100; index++) {
  
        x2 += 2;
        x1 += 2;
        if (conta == 0) {
          aux1 = x1;
          aux2 = x2;
          auxy1 = y1;
          auxy2 = y2;
          x1 = aux2;
          x2 = aux1;
          y1 = auxy2;
          y2 = auxy1;
          conta = 1;
        }else{
          conta =0;
        }
        var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
          //  context.fillStyle = "Blue";
  if (conta == 1) {
    context.fillStyle = "red";
  }else{
    context.fillStyle = "Blue";
  }
          if (Math.abs(x2-x1) >= Math.abs(y2-y1))
            {
              aux = Math.abs(x2 - x1);
              //console.log("Aux = " + aux);
            }
            else
            {
              aux = Math.abs(y2 - y1);
              //console.log("Aux = " + aux);
            }
            //console.log("*************************************");
  
            Dx = (x2 - x1) / aux;
            Dy = (y2 - y1) / aux;
            /*console.log("Dx = " + Dx);
            console.log("Dy = " + Dy);
            console.log("*************************************");*/
  
            X = x1;
            Y = y1;
  
            let i = 0;
            while(i <= aux)
            {
              RedondeoX = Math.round(X);
              RedondeoY = Math.round(Y);
              //console.log("RedX = " + RedondeoX);
              //console.log("RedY = " + RedondeoY);
  
              context.fillRect(RedondeoX, RedondeoY, 1, 1);
              //console.log("X = " + X);
              //console.log("Y = " + Y);
  
              X = X + Dx;
              Y = Y + Dy;
              i++;
            }
            if (conta == 1) {
              x1 = aux1;
              x2 = aux2;
              y1 = auxy1;
              y2 = auxy2;
            }
        }
        console.timeEnd('testTime');
    
  }