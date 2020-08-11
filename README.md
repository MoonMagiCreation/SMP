# SMP [Español]
La simulación de procesos es una representación basada en modelos de procesos químicos, físicos, biológicos y otros procesos técnicos y operaciones unitarias en software. Los prerrequisitos básicos son un conocimiento profundo de las propiedades físicas y químicas de componentes y mezclas puros, de reacciones y de modelos matemáticos que, en combinación, permiten el cálculo de un proceso en computadoras. 

SMP es un sistema sencillo para la realización de simulaciones manuales de procesos. Responde a las necesidades de la asignatura de Simulación impartida en la Universidad de las Ciencias Informáticas. Este sistema está hecho en django y puede visitarse su sitio en http://smprocesos.pythonanywhere.com/.

# [Simulación manual] Generar fórmulas
Para crear variables de entrada y de estado, en el panel de __Variables de entrada y de estados__ de click al botón de adicionar y seleccione _fórmula_. A cada fórmula dele un nombre de variable en _Nombre de Variable_ y en _Fórmula_ escriba la fórmula a emplear. Algunos ejemplos de fórmulas son:

- [A]: Genera números aleatorios entre 0 y 1.
- 4+5: Suma de números
- 6-2: Resta de números
- 2*9: Multiplicación de números
- 6/9: División de números
- TEA+2: Operación con variables ya declaradas
- TEA*PO: Operación entre varibales ya declaradas
- TEA[i-1]: Este inidica el valor resultante anterior de esta variable. Igual puede variar su posición hacia arriba en más de 1, nunca hacia abajo (es decir, sumar [i+1]).
- TEA[i-1]+9: Suma entre el valor anterior de TEA más 9.

Una vez escrita la fórmula, debe darle al botón de adicionar fórmula y esta irá adicionando cada una de las fórmulas que escriba. Una vez haya terminado de escribirlas, debe presionar el botón de adicionar a la tabla según el órden en que sucede la misma. Tenga en cuenta que si una variable depende del resultado de la otra, si esta no aparece antes, su resultado inicial es cero.

# [Simulación manual] Generar condicinales
Las condicionales son elementos que pueden tener varios resultados dependiendo del estado de un valor. Para crear variables condicionales, en el panel de __Variables de entrada y de estados__ de click al botón de adicionar y seleccione _condicional_. Dele nombre a la variable y llene el resto de los parámetros. 

Para introducir un parámetro condicional debe tener en cuenta que este está formado por, Si A y B son [iguales, mayor, menor, mayor igual, menor igual] pues el resultado es ... Entre los parámetros a llenar, se encuentra _Es_ que será el valor resultante cuando sea verdadera la condición. Igual vemos a _valor1_ como el primer valor a comparar, vemos la selección del operador y el _valor2_ como el segundo valor a comparar. Una vez llenados los mismos, se da click al primer botón de adicionar para agregar la condición y escribimos el resto de las condiciones que se desean.

Luego de haber escrito todas las condiciones, se presiona el segundo botón de adicionar para agregar la condicional a la lista de variables. Cuando ya hayamos escrito todas las variabes condicionales y fórmulas, como mismo se hizo anteriormente, debe presionar el botón de adicionar a la tabla según el órden en que suceden las mismas. Tenga en cuenta que si una variable depende del resultado de la otra, si esta no aparece antes, su resultado inicial es cero.

Entre los posibles valores de _valor1_ y de _valor2_ podemos tener números, otras variables y variables con indicador de anterioridad([i-1]). Los posibles valores de _Es_ son números, operaciones(200/36), variables con indicador de anterioridad([i-1]) y otras variables; nunca letras que no representen una variable ya declarada.

# SMP [English]

Process simulation is a model-based representation of chemical, physical, biological and other technical processes and unit operations in software. The basic prerequisites are a thorough knowledge of the physical and chemical properties of pure components and mixtures, of reactions and of mathematical models that, in combination, allow the calculation of a process in computers. 

SMP is a simple system for carrying out manual process simulations. It meets the needs of the Simulation course taught at the University of Computer Science. This system is made in django and can be visited at http://smprocesos.pythonanywhere.com/.
