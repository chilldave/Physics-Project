var getdata =  function(){

    var angulo = document.getElementById("angulo").value;
    var rapidez = document.getElementById("rapidez").value;
    var tiempo = document.getElementById("tiempo").value;
    var velocidadtangencial = document.getElementById("velocidadtangencial").value;
    var longitudarco = document.getElementById("longitudarco").value;
    var diametro = document.getElementById("diametro").value;
    var periodo = document.getElementById("periodo").value;
    var acecentripeta = document.getElementById("acecentripeta").value;
    var frecuencia = document.getElementById("frecuencia").value;   

    if(angulo === '' && rapidez === ''){
        alert('Campo vacio');
    }else{
        alert('La velocidad angular es : ')
    }
}


