
# CAPÍTULO 5. Pruebas de Carga y Rendimiento
## Práctica 5: Carga y rendimiento en página web
## Objetivo de la práctica: 
Al finalizar la práctica, serás capaz de:

- Evaluar la capacidad, resistencia y estabilidad de una página web bajo condiciones de carga y demanda, así como analizar el rendimiento, eficiencia y tiempos de respuesta de la aplicación de calculadora en diferentes escenarios y cargas de trabajo.

**Duración aproximada:**
- 40 minutos.

**Instrucciones:**

1.Abre **Apache JMeter**, con este se abrirá automáticamente en un plan de pruebas.
![imagn44](../images/image044.png)
2.	**Añade un grupo de hilos.**<br>
2.1.	Da clic derecho sobre Plan de pruebas del menú de la izquierda.<br>
2.2.	Selecciona: **Añadir, Hilos (usuarios) y Grupo de hilos.**
![imagn45](../images/image045.png)
3.	**Añade una petición HTTP.**
3.1.	Da clic derecho sobre **Grupo de hilos.**
3.2.	Selecciona: **Añadir, Muestreador y Petición HTTP.**
![imagn46](../images/image046.png)
4.	**Configura la petición HTTP.**<br>
4.1.	Ingresa la información básica de: “**Nombre de servidor**” (URL): *iana.org* y “**Ruta**”: */domains* Esto significa que se accederá a la página: iana.org/domains 
![imagn47](../images/image047.png)
5.	En un explorador abrimos el link *iana.org/domains* para verificar el acceso y la información.<br>
![imagn48](../images/image048.png)
6.	 Hasta este momento, se ha añadido lo requerido para acceder a un link y realizar una prueba con cierta cantidad de usuarios (hilos), pero se requiere conocer los resultados. Para ello, se añaden receptores de información del link al que se desea someter a prueba.<br>
6.1. Da clic derecho sobre Grupo de hilos.<br>
6.2. Selecciona **Añadir, Receptor y Ver Árbol de Resultados.**
![imagn49](../images/image049.png)
7.	Se ejecuta la primera prueba, del acceso de un usuario por un segundo realizando este proceso una sola vez.
![imagn50](../images/image050.png)
7.1.	Se solicita guardar el plan de pruebas antes de lanzarlo. Selecciona **Yes.**
![imagn51](../images/image051.png)

7.2.	Se guarda con el nombre: *ejemplo.jmx* y seleccionamos **Save.**
![imagn52](../images/image052.png)
7.3.	Revisa los resultados, seleccionado **Árbol de resultados.**<br>
7.4.	Se mostrará una petición con resultado de muestreador y los datos de respuesta se mostrarán como el “código” del link al que se accedió.
![imagn53](../images/image053.png)
![imagn54](../images/image054.png)
8.	Selecciona en la pantalla de **Grupo de hilos**, el Número de hilos y aumenta a 350 y el período de subida (en segundos) a **10** y ejecuta nuevamente la prueba.
![imagn55](../images/image055.png)
8.1.	Revisa los resultados, seleccionando **Árbol de resultados.**<br>
8.2.	Se mostrarán 350 peticiones con resultado de muestreador, y los datos de respuesta se mostrarán como el “código” del link al que se accedió.
![imagn56](../images/image056.png)
9.	Cambia en la pantalla de **Grupo de hilos**, el período de subida (en segundos) a **90** y ejecuta nuevamente la prueba.
![imagn57](../images/image057.png)
9.1.	Revisa los resultados, seleccionado **Árbol de resultados.**<br>
9.2.	Se mostrarán 350 peticiones con resultado de muestreador, y los datos de respuesta se mostrarán como el “código” del link al que se accedió. 
![imagn58](../images/image058.png)
10.	Cambia en la pantalla de **Grupo de hilos**, el período de subida (en segundos) a “1” y ejecuta nuevamente la prueba.
![imagn59](../images/image059.png)
10.1.	Revisa los resultados, seleccionado **Árbol de resultados.**<br>
10.2.	Se mostrarán 350 peticiones con resultado de muestreador, y los datos de respuesta se mostrarán como el “código” del link al que se accedió. Debido a lo rápido y a la saturación de carga, es posible que algunas cargas sean erróneas.
![imagn60](../images/image060.png)
![imagn61](../images/image061.png)
11.	**Añade otro receptor**<br>
11.1.	Da clic derecho en el grupo de hilos.<br>
11.2.	Selecciona: “añadir”, “Receptor” y “Gráfico de resultados”
![imagn62](../images/image062.png)
12.	Limpia los datos del **Árbol de resultados**.  Da clic derecho sobre **Árbol de resultados** y selecciona Limpiar. Los datos deberán eliminarse.
![imagn63](../images/image063.png)
13.	Realiza nuevamente pruebas validando el rendimiento de acuerdo con las variaciones de carga. Selecciona en la pantalla de **Grupo de hilos**, cambia el período de subida (en segundos) a **10** y ejecuta nuevamente la prueba.
![imagn64](../images/image064.png)
13.1.	Revisa los resultados del **Árbol de resultados**. Se mostrarán 350 peticiones con resultado de muestreador, y los datos de respuesta se mostrarán como el “código” del link al que se accedió.
![imagn65](../images/image065.png)
13.2.	Valida los resultados del **Gráfico de resultados**. Se mostrará una gráfica con el número de muestras, desviación, última muestra, rendimiento, media, mediana y los milisegundos en que se ejecutó.
![imagn66](../images/image066.png)
14.	Limpia los datos del **Árbol de resultados** y del **Gráfico de resultados**.  Da clic derecho sobre **Árbol de resultados** y selecciona **Limpiar**. Los datos deberán eliminarse.
![imagn67](../images/image067.png)
15.	Selecciona en la pantalla de **Grupo de hilos**, cambia el período de subida (en segundos) a **120** y ejecuta nuevamente la prueba.
![imagn68](../images/image068.png)
15.1.	Valida los resultados del **Gráfico de resultados**. Se mostrará una gráfica con el número de muestras, desviación,  muestra, rendimiento, media, mediana y los milisegundos en que se ejecutó.
![imagn69](../images/image069.png)
16.	Limpia los datos del **Árbol de resultados** y del **Gráfico de resultados**.  Da clic derecho sobre Árbol de resultados y selecciona Limpiar. Los datos deberán eliminarse.
17.	Selecciona en la pantalla de Grupo de hilos cambia el período de subida (en segundos) a **1** y ejecuta nuevamente la prueba.
![imagn70](../images/image070.png)
17.1.	Valida los resultados del **Árbol de resultados**. Se mostrará una gráfica con el número de muestras, desviación,  muestra, rendimiento, media, mediana y los milisegundos en que se ejecutó.
![imagn71](../images/image071.png)
18.	Valida que las tres graficas anteriores sean diferentes con sólo variar el período de subida, siendo que entre mayor sea el número de segundos, la página web se vuelve más estable.
**Solución o producto final:**<br># hilos: 350 // Periodo de subida:10
![imagn72](../images/image072.png)<br># hilos: 350 // Período de subida:120<br>
![imagn73](../images/image073.png)<br># hilos: 350 // Período de subida:1
![imagn74](../images/image074.png)