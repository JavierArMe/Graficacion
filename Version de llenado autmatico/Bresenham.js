var clicks = 0;

function obtenerCoords3(event) {
  var x = 0;
  var y = 0;
  var d = 0;
  var delta_A = 0;
  var delta_B = 0;
  /* var x1 = 0,
    x2 = 0,
    y1 = 0,
    y2 = 0,
    dy = 0,
    dx = 0; */
  clicks = clicks + 1;
  if (clicks == 1) {
    x1 = event.clientX-8;
    y1 = event.clientY-8;
    var coor = "X: " + x1 + ", Y: " + y1;

    console.log(coor);
  } else if (clicks == 2) {
    clicks = 0;
    x2 = event.clientX-8;
    y2 = event.clientY-8;
    var coor2 = "X2: " + x2 + ", Y2: " + y2;

    console.log(coor2);

    var dx = x2 - x1;
    var dy = y2 - y1;
    console.log("dx " + dx);
    console.log("dy " + dy);
    var inc_x;
    var inc_y;

    if (dx >= 0) {
      inc_x = +1;
    } else {
      inc_x = -1;
    }

    if (dy >= 0) {
      inc_y = +1;
    } else {
      inc_y = -1;
    }

    if (dx < 0) {
      dx = -dx;
    } else {
      dx = dx;
    }

    if (dy < 0 ) {
        dy = -dy;
    }else{
        dy = dy;
    }

    var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "red";

    if (dx >= dy) {
      d = 2 * dy - dx;
      delta_A = 2 * dy;
      delta_B = 2 * dy - 2 * dx;
      console.log("d " + d);
      console.log("delta_A " + delta_A);
      console.log("delta_A " + delta_B);
      for (i = 0; i <= dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
          console.log("d " + d);
          console.log("x " + x);
          console.log("y " + y);
        } else {
          d += delta_A;
          x += inc_x;
          console.log("d " + d);
          console.log("x " + x);
        }
      }
    } else {
      d = 2 * dx - dy;
      delta_A = 2 * dx;
      delta_B = 2 * dx - 2 * dy;
      console.log("d "+ d);
      console.log("delta_A " + delta_A);
      console.log("delta_A " + delta_B);
      for (i = 0; i <= dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
          console.log("d " + d);
          console.log("x " + x);
          console.log("y " + y);
        } else {
          d += delta_A;
          y += inc_y;
          console.log("d " + d);
          console.log("x " + x);
        }
      }
    }
  } /* else if (clicks == 3) {
    alert("Solo se necesitan dos puntos diferentes de coordenadas");
  } */
}


function linea2(event){
  //console.log("HOLA");
  console.time('testTime');
  let aux1=0, aux2=0, auxy1=0, auxy2=0;
  let conta=0;
    x1 = 0;
    x2 = 0;
    y1 = 0;
    y2 = 0;

    for(let index = 1; index <= 100; index++){
      x1 = 0;
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
      
      var dx = x2 - x1;
    var dy = y2 - y1;

    var inc_x;
    var inc_y;

    if (dx >= 0) {
      inc_x = +1;
    } else {
      inc_x = -1;
    }

    if (dy >= 0) {
      inc_y = +1;
    } else {
      inc_y = -1;
    }

    if (dx < 0) {
      dx = -dx;
    } else {
      dx = dx;
    }

    if (dy < 0 ) {
        dy = -dy;
    }else{
        dy = dy;
    }

    /* console.log("******************");
    console.log("dx=" + dx);
    console.log("dy=" + dy);
    console.log("******************"); */

    /* var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "blue"; */

    if (dx >= dy) {
      var d = 2 * dy - dx;
      var delta_A = 2 * dy;
      var delta_B = 2 * dy - 2 * dx;
      /* console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************"); */

      var x = 0;
      var y = 0;
      for (i = 0; i <= dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
       /*  console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    } else {
      var d = 2 * dx - dy;
      var delta_A = 2 * dx;
      var delta_B = 2 * dx - 2 * dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    }
    if (conta == 1) {
      x1 = aux1;
      x2 = aux2;
      y1 = auxy1;
      y2 = auxy2;
    }
    }

    x1 = 0;
    x2 = 0;
    y1 = 0;
    y2 = 0;

    for(let index = 1; index <= 100; index++){
         
        x2 += 2;
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
        var dx = x2 - x1;
    var dy = y2 - y1;

    var inc_x;
    var inc_y;

    if (dx >= 0) {
      inc_x = +1;
    } else {
      inc_x = -1;
    }

    if (dy >= 0) {
      inc_y = +1;
    } else {
      inc_y = -1;
    }

    if (dx < 0) {
      dx = -dx;
    } else {
      dx = dx;
    }

    if (dy < 0 ) {
        dy = -dy;
    }else{
        dy = dy;
    }

    /* console.log("******************");
    console.log("dx=" + dx);
    console.log("dy=" + dy);
    console.log("******************"); */

   /*  var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "green"; */

    if (dx >= dy) {
      var d = 2 * dy - dx;
      var delta_A = 2 * dy;
      var delta_B = 2 * dy - 2 * dx;
      /* console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************"); */

      var x = 0;
      var y = 0;
      for (i = 0; i <= dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    } else {
      var d = 2 * dx - dy;
      var delta_A = 2 * dx;
      var delta_B = 2 * dx - 2 * dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    }
    if (conta == 1) {
      x1 = aux1;
      x2 = aux2;
      y1 = auxy1;
      y2 = auxy2;
    }
    }

    x1 = 1000;
    y1 = 0;
    x2 = 1000;
    y2 = 0;

    for(let index = 1; index <= 100; index++){
         
        x2 -= 2;
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
        var dx = x2 - x1;
    var dy = y2 - y1;

    var inc_x;
    var inc_y;

    if (dx >= 0) {
      inc_x = +1;
    } else {
      inc_x = -1;
    }

    if (dy >= 0) {
      inc_y = +1;
    } else {
      inc_y = -1;
    }

    if (dx < 0) {
      dx = -dx;
    } else {
      dx = dx;
    }

    if (dy < 0 ) {
        dy = -dy;
    }else{
        dy = dy;
    }

    /* console.log("******************");
    console.log("dx=" + dx);
    console.log("dy=" + dy);
    console.log("******************"); */

    /* var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "black"; */

    if (dx >= dy) {
      var d = 2 * dy - dx;
      var delta_A = 2 * dy;
      var delta_B = 2 * dy - 2 * dx;
      /* console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************"); */

      var x = 0;
      var y = 0;
      for (i = 0; i <= dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
       /*  console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    } else {
      var d = 2 * dx - dy;
      var delta_A = 2 * dx;
      var delta_B = 2 * dx - 2 * dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
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
    var dx = x2 - x1;
    var dy = y2 - y1;

    var inc_x;
    var inc_y;

    if (dx >= 0) {
      inc_x = +1;
    } else {
      inc_x = -1;
    }

    if (dy >= 0) {
      inc_y = +1;
    } else {
      inc_y = -1;
    }

    if (dx < 0) {
      dx = -dx;
    } else {
      dx = dx;
    }

    if (dy < 0 ) {
        dy = -dy;
    }else{
        dy = dy;
    }

    /* console.log("******************");
    console.log("dx=" + dx);
    console.log("dy=" + dy);
    console.log("******************"); */

    /* var lienzo = document.querySelector("canvas");
    var context = lienzo.getContext("2d");
    context.fillStyle = "red"; */

    if (dx >= dy) {
      var d = 2 * dy - dx;
      var delta_A = 2 * dy;
      var delta_B = 2 * dy - 2 * dx;
      /* console.log("D=" + d);
      console.log("Delta A=" + delta_A);
      console.log("Delta B=" + delta_B);
      console.log("******************"); */

      var x = 0;
      var y = 0;
      for (i = 0; i <= dx; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;

        } else {
          d += delta_A;
          x += inc_x;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    } else {
      var d = 2 * dx - dy;
      var delta_A = 2 * dx;
      var delta_B = 2 * dx - 2 * dy;

      var x = 0;
      var y = 0;
      for (i = 0; i <= dy; i++) {
        //put_pixel(ctx, x + x1, y + y1, "black");
        context.fillRect(x + x1, y + y1, 1, 1);
        if (d > 0) {
          d += delta_B;
          x += inc_x;
          y += inc_y;
        } else {
          d += delta_A;
          y += inc_y;
        }
        /* console.log("D=" + d);
        console.log("Y=" + y);
        console.log("X=" + x);
        console.log("******************"); */
      }
    }
    }
    if (conta == 1) {
      x1 = aux1;
      x2 = aux2;
      y1 = auxy1;
      y2 = auxy2;
    }
  console.timeEnd('testTime');
}

function cuadrado(event) {
  
}