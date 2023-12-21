function cargarContenido(parametro) {
    document.getElementById('contenidoArticulo').innerHTML = '';

    var nuevoH2 = document.createElement('h2');
    var nuevoP = document.createElement('p');

    nuevoH2.textContent = parametro;
    nuevoP.textContent = 'Aquí va la información específica para ' + parametro;
    if (parametro == 'Programación') {
        nuevoP.textContent = "La formación en ingeniería informática brinda habilidades técnicas valiosas que son esenciales tanto en el ámbito académico como en el profesional. En el estudio, adquirir estas habilidades implica comprender y aplicar conceptos complejos de programación, algoritmos y estructuras de datos. En el entorno laboral, estas habilidades se traducen en la capacidad para desarrollar soluciones informáticas efectivas, optimizar el rendimiento de software y resolver problemas de manera eficiente. Aquí podemos ver una representación visual del nivel de cada lenguaje de programación que se han mencionado en el apartado de proyectos."
        document.getElementById('contenidoArticulo').appendChild(nuevoH2);
        document.getElementById('contenidoArticulo').appendChild(nuevoP);
        var imagenes = ['multimedia/c++.png', 'multimedia/java.png', 'multimedia/python.png', 'multimedia/unreal.png'];
        var nombres = ['C++', 'Java', 'Python', 'Unreal'];
        if (parametro === 'Programación') {
            var numeroDivs = imagenes.length;

            for (var i = 0; i < numeroDivs; i++) {
                var nuevoDivContenedor = document.createElement('div');
                var nuevoDivElemento = document.createElement('div');
                var nuevoH3 = document.createElement('h3');
                var nuevaImagen = document.createElement('img');

                nuevoDivContenedor.id = 'divProgramacion' + i;

                nuevoDivContenedor.className = 'contenedor';
                nuevoDivElemento.className = 'elemento' + i;
                nuevoH3.textContent = nombres[i];

                nuevaImagen.src = imagenes[i];
                nuevaImagen.alt = 'Imagen';

                nuevoDivElemento.appendChild(nuevoH3);
                nuevoDivContenedor.appendChild(nuevoDivElemento);
                nuevoDivContenedor.appendChild(nuevaImagen);

                document.getElementById('contenidoArticulo').appendChild(nuevoDivContenedor);
            }
        }
    } 
    else {
        if (parametro == 'Responsabilidad y compromiso') {
            nuevoP.textContent = "La responsabilidad desempeña un papel fundamental tanto en el ámbito académico como en el profesional. En el estudio, implica la gestión efectiva del tiempo, el compromiso con las tareas asignadas y la capacidad de cumplir con los plazos establecidos. La responsabilidad en el trabajo se traduce en el cumplimiento diligente de las obligaciones laborales, la confiabilidad en la ejecución de tareas encomendadas y la contribución proactiva al logro de los objetivos organizacionales."
        } else if (parametro == 'Segundo idioma: Inglés') {
            nuevoP.textContent = "He cursado tanto educación primaria, como educación secundaria como el grado en modalidad bilingüe, además de haber recibido clases de inglés en academias desde los 5 años hasta los 16 años. El nivel de inglés constatable certificado incluye el nivel First, pero se ha preparado para el examen del nivel Advanced."
        } else if (parametro == 'Carné de conducir permiso B') {
            nuevoP.textContent = "El permiso B autoriza para conducir: Automóviles cuya masa máxima autorizada no exceda de 3.500 kg que estén diseñados y construidos para el transporte de no más de ocho pasajeros además del conductor, conjuntos de vehículos acoplados compuestos por un vehículo tractor de los que autoriza a conducir el permiso de la clase B y un remolque cuya masa máxima autorizada exceda de 750 kg, siempre que la masa máxima autorizada del conjunto no exceda de 4.250 kg, sin perjuicio de las disposiciones que las normas de aprobación de tipo establezcan para estos vehículos y por último, triciclos y cuadriciclos de motor."
        }
        document.getElementById('contenidoArticulo').appendChild(nuevoH2);
        document.getElementById('contenidoArticulo').appendChild(nuevoP);
    }
  


}