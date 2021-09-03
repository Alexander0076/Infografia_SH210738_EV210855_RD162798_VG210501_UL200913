      const canvas = document.getElementById('canvas3');
      const t = canvas.getContext('2d');
      const personajes = new Image();
      personajes.src = 'img/wario-5.png';

      let indice = 2;
      let frame = 0;
      let estado = "tres";

      function loop(){
        canvas.width = canvas.width;
        if(frame % imagenes[estado].velocidad == 0) indice++;
        frame++;
        if(indice >= imagenes[estado].animaciones.length)indice=0;

        t.drawImage(personajes,imagenes[estado].animaciones[indice].x,personajes,imagenes[estado].animaciones[indice].y, imgWidth, imgHeight,0,0,100,100);

        requestAnimationFrame(loop);
      }
      window.addEventListener('load', loop);