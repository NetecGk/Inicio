# CAPÍTULO 10. Gestión y Reporte de Defectos
## Práctica 10: Página web
**Objetivo de la práctica:**<br>
Al finalizar la práctica, serás capaz de:<br>
- Integrar lo aprendido en el curso para la realización de pruebas en un ejercicio.
- Realizar pruebas unitarias.
- Ejecutar pruebas de sistemas, aceptación y usabilidad.
- Practicar las pruebas de carga y rendimiento .
- Utilizar el entorno DevOps de Azure como guía para el proceso y de la actividad y realizar pruebas automatizadas.
- Ejecutar pruebas con errores y pruebas correctas.
- Mostar los errores en el entorno DevOps.

**Duración aproximada:**<br>
- 210 minutos.

**Instrucciones:**<br>
Se proporciona el código de una página web que hay que validar. Para ello, se debe pasar por diferentes pruebas y procesos que se solicitan a continuación.<br>
**1.** Realiza las primeras instrucciones para crear un proyecto, con el nombre Pag-web-iniciales y añade tres archivos .html con los siguientes nombres y códigos:<br>
a.	**index.html**
```h
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de inicio</title>
</head>
<body>
    <form id="formInicioSesion" runat="server">
        <h2>Página de inicio. -INDEX-</h2>
        <div>
            <button type="button" id="btnTexto" runat="server" onclick="redireccionarTexto()">Ir a Texto</button>
        </div>
        <div>
            <button type="button" id="btnNumero" runat="server" onclick="redireccionarNumero()">Ir a Número</button>
        </div>
    </form>
    <script>
        function iniciarSesion() {
            // Simulando la redirección del lado del cliente
            window.location.href = "index.html";
        }

        function redireccionarTexto() {
            // Simulando la redirección del lado del cliente
            window.location.href = "texto.html";
        }

        function redireccionarNumero() {
            // Simulando la redirección del lado del cliente
            window.location.href = "numero.html";
        }
    </script>
</body>
</html>
```
**b.** **texto.html**<br>
```h
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Texto</title>
</head>
<body>
    <form id="formPaginaTexto" runat="server">
        <div>
            <h2>Página de texto</h2>
            <label for="txtTexto">Texto:</label>
            <input type="text" id="txtTexto" runat="server" />
        </div>
        <div>
            <button type="button" id="btnMostrar" runat="server" onclick="mostrarTexto()">Mostrar Texto</button>
        </div>
        <div>
            <button type="button" id="btnRegresar" runat="server" onclick="regresar()">Regresar a Inicio</button>
        </div>
    </form>

    <script>
        function mostrarTexto() {
            var texto = document.getElementById('txtTexto').value;
            // Puedes realizar alguna acción con el texto aquí
            alert(texto);  // Este es solo un ejemplo, puedes ajustarlo según tus necesidades
        }
        function regresar() {
            // Simulando la redirección del lado del cliente
            window.location.href = "index.html";
        }
    </script>
</body>
</html>
c.	numero.html 
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Número</title>
</head>
<body>
    <form id="formPaginaNumero" runat="server">
        <div>
            <h2>Página de texto</h2>
            <label for="txtNumero">Número:</label>
            <input type="text" id="txtNumero" runat="server" />
        </div>
        <div>
            <button type="button" id="btnMostrar" runat="server" onclick="mostrarNumero()">Mostrar Número</button>
        </div>
        <div>
            <label id="lblResultado" runat="server"></label>
        </div>
        <div>
            <button type="button" id="btnRegresar" runat="server" onclick="regresar()">Regresar a Inicio</button>
        </div>
    </form>

    <script>
        function mostrarNumero() {
            var numero = document.getElementById('txtNumero').value;

            // Manejar la lógica de mostrar el número (puedes personalizar esto)
            try {
                // Convertir el valor del campo de texto a un número entero
                numero = parseInt(numero);

                if (!isNaN(numero)) {
                    // Realizar alguna acción con el número
                    document.getElementById('lblResultado').innerText = "Número ingresado: " + numero;
                } else {
                    // Mostrar un mensaje si el valor no es un número válido
                    document.getElementById('lblResultado').innerText = "Por favor, ingrese un número válido.";
                }
            } catch (error) {
                // Manejar cualquier error que pueda ocurrir durante la conversión
                document.getElementById('lblResultado').innerText = "Ocurrió un error al procesar el número.";
            }
        }

        function regresar() {
            // Simulando la redirección del lado del cliente
            window.location.href = "index.html";
        }
    </script>
</body>
</html>
```
**2.** En el entorno de Azure DevOps añade la actividad página web. <br>
**3.** Añade las pruebas para validarlas:<br>&nbsp;
**3.1.** **Pruebas unitarias** <br>&nbsp;
**3.1.1.** Validar acceso. <br>&nbsp;
**3.1.2.** Validar Pantalla texto.<br>&nbsp;
**3.1.3.** Validar Pantalla número.<br><br>
Estas pruebas deben estar descritas paso a paso en Azure DevOps. Se apoyarán de Selenium para realizarlas por lo que serán pruebas automatizadas, que se ejecutan en Visual Studio y se señalan en Azure DevOps. Las pruebas se deben realizar para fallar y para funcionar correctamente, ya que de esta forma se valida el proceso de errores y fallas.<br><br>
**3.2.** **Pruebas de sistemas, aceptación y usabilidad**<br>&nbsp;
**3.2.1.** Cuestionario para el usuario sobre la funcionalidad del sistema.<br>&nbsp;
**3.2.2.** Grabación de cómo opera la página para detectar usabilidad.<br>&nbsp;
**3.2.3.** Validación de funcionamiento del sistema.<br>
Estas pruebas deben estar descritas paso a paso en Azure DevOps. Se apoyarán de Selenium, alguna plataforma para realizar cuestionarios y grabación de pantalla para realizarlas por lo que serán pruebas automatizadas, que se ejecutan en Visual Studio y se señalan en Azure DevOps.<br>
**3.3.** **Pruebas de carga y rendimiento**<br>&nbsp;
3.3.1.	Valida el rendimiento de la página web.<br>
Estas pruebas deben estar descritas paso a paso en Azure DevOps. Se apoyarán de JMeter, para realizarlas, por lo que serán pruebas que se ejecutan en Visual Studio y se señalan en Azure DevOps.<br><br>
<font color="purple">**Solución o producto final:**</font><br>
Se deberán tener en total 10 pruebas.<br>
![image140](../images/image140.png)
