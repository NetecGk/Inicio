# CAPÍTULO 9. Pruebas en Entornos DevOps
## Práctica 9: Calculadora VII
**Objetivo de la práctica:** <br>
Al finalizar la práctica, serás capaz de:<br>
- Descubrir el uso de pruebas en entornos DevOps e Integrar al ejercicio de calculadora.

**Duración aproximada:**<br>
- 45 minutos.

**Instrucciones:**<br>
**1.** Accede a Azure DevOps.<br>
**2.** Agrega una nueva organización.<br>
**3.** Ingresa el nombre del proyecto: *“CalculadoraWeb”*.<br>
![image117](../images/image117.png)
**4.** Selecciona Crear proyecto.<br>
![image118](../images/image118.png)<br>
**5.** Conecta Visual Studio a Git.<br>
**5.1.** Abre Visual Studio.<br>
**5.2.** Selecciona en el menú superior “Git” y “Clonar repositorio”.<br>
![image119](../images/image119.png)<br>
**5.3.** Selecciona Examinar un repositorio Azure.<br>
![image120](../images/image120.png)<br>
**5.4.** Selecciona el que se añadió en DevOps.<br>
**5.5.** Selecciona **Clonar.**<br>
![image121](../images/image121.png)<br>
**5.6.** Solicitará información para validar la cuenta.<br>
![image122](../images/image122.png)<br>
**5.7.** El proyecto está clonado, selecciona la solución *CalculadoraWeb*.<br>
**5.7.1.** Valida que se pueda acceder a la página web. Se mostrará la siguiente versión de la calculadora.<br>
![image123](../images/image123.png)<br>
**6.** Regresa a Azure DevOps. Se mostrará en Files la documentación correspondiente a la calculadora web.<br>
![image124](../images/image124.png)<br>
**7.** Explora el área de repos.<br>
**8.** Selecciona en el menú izquierdo Boards y Boards. En este apartado, encontrarás todas las actividades del equipo divididas en: Por hacer, haciendo y terminadas.<br>
![image125](../images/image125.png)<br>
**8.1.** Añadiremos actividades.<br>
**8.1.1.** Selecciona **Añadir item.**<br>
![image126](../images/image126.png)<br>
**8.1.2.** Añade los siguientes ítems:<br>
- Calculadora web.<br>
- Lector de texto.<br>
- Traductor.

 ![image127](../images/image127.png)<br>
**8.1.3.** Configura **Calculadora Web.**<br>
**8.1.3.1.** Selecciona **Calculadora web.**<br>
![image128](../images/image128.png)<br>
**8.1.3.2.** Asígnate la actividad.<br>
**8.1.3.3.** Añade una descripción de la actividad.<br>
**8.1.3.4.** Coloca la prioridad 1.<br>
**8.1.3.5.** Cierra y guarda.
![image129](../images/image129.png)<br>
**8.1.3.6.** Lleva Calculadora web a **“Doing”**.<br>
![image130](../images/image130.png)<br>
**8.2.** Agrega una prueba.<br>
**8.2.1.** Del menú de la izquierda, selecciona **Test plans.**<br>
**8.2.2.** Selecciona **New test plan.**<br>
![image131](../images/image131.png)<br>
**8.2.3.** Ingresa el nombre de *“Pruebas unitarias”* y selecciona **“Crear”.** <br>
![image132](../images/image132.png)<br>
**8.2.4.** Añade un Nuevo caso de prueba.
![image133](../images/image133.png)<br>
**8.2.5.**  Ingresa el título “Suma”.<br>
**8.2.6.** Añade los pasos de la prueba de suma.<br>
![image134](../images/image134.png)<br>
**8.2.7.** Selecciona Guardar y modifica el estatus a Listo.<br>
![image135](../images/image135.png)<br>
**8.2.8.** Selecciona **Guardar.** <br>
**8.3.** Añadimos el caso de prueba a Calculadora web.<br>
**8.3.1.** Selecciona **Añadir link** y da clic en **Item existente.**<br>
![image136](../images/image136.png)<br>
**8.3.2.** Selecciona **Test** a *Calculadora web* y da clic en **Ok.**<br>
![image137](../images/image137.png)<br>
**8.3.3.** Selecciona Guardar y cerrar.<br>
**8.4.** Valida la información en **Boards.**<br>
![image138](../images/image138.png)<br>
**8.5.** Añade los casos de prueba de resta, multiplicación y división.<br>
<font color="purple">**Solución o producto final:**</font>
![image139](../images/image139.png)<br>