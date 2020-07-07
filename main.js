(function () {
    var actualizarHora = function () {
        var fecha = new Date(),
            horas = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            ampm,
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        var pHoras = document.getElementById("hora"),
            pMinutos = document.getElementById("minutos"),
            pAMPM = document.getElementById("ampm"),
            pSegundos = document.getElementById("segundos"),
            pDia = document.getElementById("dia"),
            pDiasemana= document.getElementById("diaSemana"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

            var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
            var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

            pDiasemana.textContent = dias[diaSemana];
            pDia.textContent = dia;
            pMes.textContent = meses[mes];
            pYear.textContent = year;

            if (horas >= 12) {
                horas = horas -12;
                ampm = 'PM';
            }else{
                ampm = 'AM';
            }

            if (horas == 0) {
                horas = 12;
            }

            pHoras.textContent = horas;

            if (minutos < 10) {
                minutos = "0" + minutos;
            }

            pMinutos.textContent = minutos;

            if (segundos < 10) {
                segundos = "0" + segundos;
            }

            pSegundos.textContent = segundos;
            pAMPM.textContent = ampm;

            
    }

    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);

}())