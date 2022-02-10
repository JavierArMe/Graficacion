var clicks = 0;
      var x1 = 0,
        x2 = 0,
        y1 = 0,
        y2 = 0;
function opcion(event) {
    if (document.getElementById('myradio_1').checked) {
        obtenerCoords(event);
    }else if (document.getElementById('myradio_2').checked) {
        obtenerCoords2(event);
    }else if (document.getElementById('myradio_3').checked) {
        obtenerCoords3(event);
    }else if (document.getElementById('myradio_4').checked) {
      
     pruebalinea(event);
      //pruebalineader(event);
    }else if (document.getElementById('myradio_5').checked) {
      linea(event);
    }else if (document.getElementById('myradio_6').checked) {
      linea2(event);
    }
}
        
      function obtenerCoords(event) {
        clicks = clicks + 1;
        if (clicks == 1) {
          x1 = event.clientX-8;
          y1 = event.clientY-8;
          var coor = "X: " + x1 + ", Y: " + y1;

          console.log(coor);
          //document.getElementById("x1y1").innerHTML = coor;
        } else if (clicks == 2) {
          clicks = 0;
          x2 = event.clientX-8;
          y2 = event.clientY-8;
          var coor2 = "X2: " + x2 + ", Y2: " + y2;

          console.log(coor2);
          //document.getElementById("x2y2").innerHTML = coor2;

          var m = (y2 - y1) / (x2 - x1);
          var b = y1 - m * x1;
          console.log("m = " + m, "b = " + b);

          rangox = Math.abs(x1 - x2);
          rangoy = Math.abs(y1 - y2);
          console.log("rango x: " + rangox, "rango y: " + rangoy);

          if (rangox > rangoy) {
            if (x1 > x2) {
              inicio = x2;
              fin = x1;
            } else {
              inicio = x1;
              fin = x2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "green";

            for (let i = inicio; i <= fin; i++) {
              var y = Math.round(m * i) + b;
              context.fillRect(i, y, 1, 1);
              //console.log("M = " + m + " " + "B = " + b);
              console.log("X " + i + " " + "Y " + y);
              //document.getElementById("valores2").innerHTML = "M = " + m + " " + "B = " + b;
              //document.getElementById("valores").innerHTML += "X " + i + " " + "Y " + y + "<br>" ;
              //document.getElementById("valores2").innerHTML = y;
            }
          } else {
            if (y1 > y2) {
              inicio = y2;
              fin = y1;
            } else {
              inicio = y1;
              fin = y2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "green";

            for (let i = inicio; i <= fin; i++) {
              var x = Math.round(i - b) / m;
              context.fillRect(x, i, 1, 1);
              //console.log("M = " + m + " " + "B = " + b);
              console.log("X " + i + " " + "Y " + x);
              //document.getElementById("valores2").innerHTML = "M = " + m + " " + "B = " + b;
              //document.getElementById("valores").innerHTML += "X " + i + " " + "Y " + y + "<br>" ;
              //document.getElementById("valores2").innerHTML = y;
            }
          }
        } /* else if (clicks == 3) {
          alert("Solo se necesitan dos puntos diferentes de coordenadas");
        } */
      }
      let contar =1;
      function pruebalinea(event) {
       
        console.time('testTime');
        for (let index =1; index <= 500; index++) {
          
        x1 = 1;
        x2 = 1000;
        y1 = y1 + 2;
        y2 = y2 + 2;
        
        var m = (y2 - y1) / (x2 - x1);
          var b = y1 - m * x1;
          //console.log("m = " + m, "b = " + b);

          rangox = Math.abs(x1 - x2);
          rangoy = Math.abs(y1 - y2);
         // console.log("rango x: " + rangox, "rango y: " + rangoy);
        
          if (rangox > rangoy) {
            if (x1 > x2) {
              inicio = x2;
              fin = x1;
            } else {
              inicio = x1;
              fin = x2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "black";

            for (let i = inicio; i <= fin; i++) {
              var y = Math.round(m * i) + b;
              context.fillRect(i, y, 1, 1);
          //    console.log("X " + i + " " + "Y " + y);
            }
          } else {
            if (y1 > y2) {
              inicio = y2;
              fin = y1;
            } else {
              inicio = y1;
              fin = y2;
            }
            var lienzo = document.querySelector("canvas");
            var context = lienzo.getContext("2d");
            context.fillStyle = "red";

            for (let i = inicio; i <= fin; i++) {
              var x = Math.round(i - b) / m;
              context.fillRect(x, i, 1, 1);
            //  console.log("X " + i + " " + "Y " + x);
            }
          }
          }
          //ss
          x1 = 0;
            x2  =0;
            y1 = 0;
            y2 = 0;
          for (let index =1; index <= 1000; index++) {
            x1 = 0;
            x2 += 2;
            y1 += 2;
            y2 = 0;
            
            var m = (y2 - y1) / (x2 - x1);
              var b = y1 - m * x1;
              //console.log("m = " + m, "b = " + b);
    
              rangox = Math.abs(x1 - x2);
              rangoy = Math.abs(y1 - y2);
            //  console.log("rango x: " + rangox, "rango y: " + rangoy);
            
              if (contar == 1) {
                if (x1 > x2) {
                  inicio = x2;
                  fin = x1;
                } else {
                  inicio = x1;
                  fin = x2;
                }
                var lienzo = document.querySelector("canvas");
                var context = lienzo.getContext("2d");
                context.fillStyle = "cyan";
    
                for (let i = inicio; i <= fin; i++) {
                  var y = Math.round(m * i) + b;
                  context.fillRect(i, y, 1, 1);
            //      console.log("X " + i + " " + "Y " + y);
                }
                contar=0;
              } else {
                if (y1 > y2) {
                  inicio = y2;
                  fin = y1;
                } else {
                  inicio = y1;
                  fin = y2;
                }
                var lienzo = document.querySelector("canvas");
                var context = lienzo.getContext("2d");
                context.fillStyle = "green";
    
                for (let i = inicio; i <= fin; i++) {
                  var x = Math.round(i - b) / m;
                  context.fillRect(x, i, 1, 1);
                //  console.log("X " + i + " " + "Y " + x);
                }
                contar=1;
              }
              }
              //s2
              x1 = 1000;
              x2 = 1000;
              y1 = 0;
              y2 = 0;
            for (let index =1; index <= 1000; index++) {
             // x1 = 1000;
              x2 -= 2;
              //y1 = 1000;
              y1 += 2;
              
              var m = (y2 - y1) / (x2 - x1);
                var b = y1 - m * x1;
               // console.log("m = " + m, "b = " + b);
      
                rangox = Math.abs(x1 - x2);
                rangoy = Math.abs(y1 - y2);
               // console.log("rango x: " + rangox, "rango y: " + rangoy);
              
                if (contar == 1) {
                  if (x1 > x2) {
                    inicio = x2;
                    fin = x1;
                  } else {
                    inicio = x1;
                    fin = x2;
                  }
                  var lienzo = document.querySelector("canvas");
                  var context = lienzo.getContext("2d");
                  context.fillStyle = "gold";
      
                  for (let i = inicio; i <= fin; i++) {
                    var y = Math.round(m * i) + b;
                    context.fillRect(i, y, 1, 1);
                //    console.log("X " + i + " " + "Y " + y);
                  }
                  contar=0;
                } else {
                  if (y1 > y2) {
                    inicio = y2;
                    fin = y1;
                  } else {
                    inicio = y1;
                    fin = y2;
                  }
                  var lienzo = document.querySelector("canvas");
                  var context = lienzo.getContext("2d");
                  context.fillStyle = "rose";
      
                  for (let i = inicio; i <= fin; i++) {
                    var x = Math.round(i - b) / m;
                    context.fillRect(x, i, 1, 1);
                //    console.log("X " + i + " " + "Y " + x);
                  }
                  contar=1;
                }
                }
                 //s2
              x1 = -2;
              x2 = 0;
              y1 = 0;
              y2 = 1000;
            for (let index =1; index <= 500; index++) {
              x1 += 2;
              x2 += 2;
             // y1 = 0;
             // y2 = 1000;
              
              var m = (y2 - y1) / (x2 - x1);
                var b = y1 - m * x1;
              // console.log("m = " + m, "b = " + b);
      
                rangox = Math.abs(x1 - x2);
                rangoy = Math.abs(y1 - y2);
               // console.log("rango x: " + rangox, "rango y: " + rangoy);
              
                if (contar == 1) {
                  if (x1 > x2) {
                    inicio = x2;
                    fin = x1;
                  } else {
                    inicio = x1;
                    fin = x2;
                  }
                  var lienzo = document.querySelector("canvas");
                  var context = lienzo.getContext("2d");
                  context.fillStyle = "yellow";
      
                  for (let i = inicio; i <= fin; i++) {
                    var y = Math.round(m * i) + b;
                    context.fillRect(i, y, 1, 1);
                  //  console.log("X " + i + " " + "Y " + y);
                  }
                  contar=0;
                } else {
                  if (y1 > y2) {
                    inicio = y2;
                    fin = y1;
                  } else {
                    inicio = y1;
                    fin = y2;
                  }
                  var lienzo = document.querySelector("canvas");
                  var context = lienzo.getContext("2d");
                  context.fillStyle = "magenta";
      
                  for (let i = inicio; i <= fin; i++) {
                    var x = Math.round(i - b) / m;
                    context.fillRect(x, i, 1, 1);
                  //  console.log("X " + i + " " + "Y " + x);
                  }
                  contar=1;
                }
                }

                //s2abajomal
                x1 = 0;
                x2 = 1000;
                y1 = 0;
                y2 = 1000;
            for (let index =1; index <= 0; index++) {
             /*  x2 = 0;
              x1 += 2;
              y2 += 2;
              y1 = 0; */
               // x1 = 1000;
               x1 -= 2;
               //y1 = 1000;
               y2 += 2;
              
              var m = (y2 - y1) / (x2 - x1);
                var b = y1 - m * x1;
               // console.log("m = " + m, "b = " + b);
      
                rangox = Math.abs(x1 - x2);
                rangoy = Math.abs(y1 - y2);
               // console.log("rango x: " + rangox, "rango y: " + rangoy);
              
                if (contar == 1) {
                  if (x1 > x2) {
                    inicio = x2;
                    fin = x1;
                  } else {
                    inicio = x1;
                    fin = x2;
                  }
                  var lienzo = document.querySelector("canvas");
                  var context = lienzo.getContext("2d");
                  context.fillStyle = "gold";
      
                  for (let i = inicio; i <= fin; i++) {
                    var y = Math.round(m * i) + b;
                    context.fillRect(i, y, 1, 1);
                //    console.log("X " + i + " " + "Y " + y);
                  }
                  contar=0;
                } else {
                  if (y1 > y2) {
                    inicio = y2;
                    fin = y1;
                  } else {
                    inicio = y1;
                    fin = y2;
                  }
                  var lienzo = document.querySelector("canvas");
                  var context = lienzo.getContext("2d");
                  context.fillStyle = "red";
      
                  for (let i = inicio; i <= fin; i++) {
                    var x = Math.round(i - b) / m;
                    context.fillRect(x, i, 1, 1);
                //    console.log("X " + i + " " + "Y " + x);
                  }
                  contar=1;
                }
                }

                //s2abajoizq
                x1 = 0;
                x2=1000;
                y2 = 0;
                y1=1000;
            for (let index =1; index <= 0; index++) {
              x1 += 2;
              x2 = 0;
              y2 += 2;
              y1 = 0;

              var m = (y2 - y1) / (x2 - x1);
                var b = y1 - m * x1;
               // console.log("m = " + m, "b = " + b);
      
                rangox = Math.abs(x1 - x2);
                rangoy = Math.abs(y1 - y2);
               // console.log("rango x: " + rangox, "rango y: " + rangoy);
              
                if (contar == 1) {
                  if (x1 > x2) {
                    inicio = x2;
                    fin = x1;
                  } else {
                    inicio = x1;
                    fin = x2;
                  }
                  var lienzo = document.querySelector("canvas");
                  var context = lienzo.getContext("2d");
                  context.fillStyle = "gold";
      
                  for (let i = inicio; i <= fin; i++) {
                    var y = Math.round(m * i) + b;
                    context.fillRect(i, y, 1, 1);
                //    console.log("X " + i + " " + "Y " + y);
                  }
                  contar=0;
                } else {
                  if (y1 > y2) {
                    inicio = y2;
                    fin = y1;
                  } else {
                    inicio = y1;
                    fin = y2;
                  }
                  var lienzo = document.querySelector("canvas");
                  var context = lienzo.getContext("2d");
                  context.fillStyle = "red";
      
                  for (let i = inicio; i <= fin; i++) {
                    var x = Math.round(i - b) / m;
                    context.fillRect(x, i, 1, 1);
                //    console.log("X " + i + " " + "Y " + x);
                  }
                  contar=1;
                }
                }

                console.timeEnd('testTime');
                
      }

      function pruebalineader(event) {
       
        
      }