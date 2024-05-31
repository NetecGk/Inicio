
# CAPÍTULO 3. Pruebas de Integración
## Práctica 3: Calculadora II
Este texto es una descripción general del proyecto. Se debe de sustituir por el contenido
que el instructor decida agregar. 

### Objetivo de la práctica: 
Al finalizar la práctica, serás capaz de:
- Validar la interacción entre métodos, comprobar la coherencia del sistema y detectar problemas de integración.

- Probar cómo diferentes componentes o módulos de tu aplicación interactúan entre sí.

### Duración aproximada:
- 40 minutos.

### Instrucciones:
1.	Regresa al archivo Index.html y añade:

    1.1.	En Body, después del botón: buttondivide
```shell
<<h2>Funciones avanzadas:</h2>
<p>
    Factorial.
    <button id="buttonfactorial" onclick="calcularFactorial()">Calcula</button>

    <h2>Resultados</h2>
<p id="resultado"></p>
```
1.2.	En Script:
```shell
// Lógica para la calculadora
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('resultado').innerText = `${result}`;
    } catch (error) {
        document.getElementById('resultado').value = 'Error';
    }
}
function calcularFactorial() {
    // Obtener el número ingresado por el usuario
    let numero = document.getElementById('display').value;

    // Validar que el usuario haya ingresado un número
    if (numero === '') {
        alert('Por favor, ingrese un número.');
return;
    }
// Convertir el número a entero
    numero = parseInt(numero);

    // Verificar si el número es válido (no negativo)
    if (numero < 0) {
        alert('Ingrese un número no negativo para calcular el factorial.');
        return;
    }

    // Calcular el factorial del número
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    // Mostrar el resultado en la interfaz
    document.getElementById('resultado').innerText = `${factorial}`;
}
```
2.	Añade una nueva prueba.

    2.1.	Da clic derecho en el proyecto de pruebas, selecciona Agregar y Nuevo elemento.
![imagn24](../images/image024.png)

2.2.	 Selecciona en Prueba, la opción de Prueba unitaria. 
Nota: Realizaremos una prueba de integración; sin embargo, el tipo de formato que maneja Visual Studio permite realizar otro tipo de pruebas con el formato: Prueba unitaria.
![imagn25](../images/image025.png)
2.3.	 Da clic derecho sobre el proyecto y selecciona Administrar paquetes NuGet.

2.4.	Selecciona Examinar, busca y añade el paquete Xunit.
![imagn26](../images/image026.png)

2.5.	Selecciona el archivo “UnitTest2 y añade el siguiente código:
```shell
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;
using System.Threading;
using System;

namespace CalculadoraTest2
{
    [TestFixture]
public class Test2
    {

        private readonly string site;
        public Test2()
        {
            //Sigue las instrucciones para añadir la liga de acuerdo a tu computador
            site = "URL";
        }

        [Test]
        public void CalcularFactorial()
        {
            using (var driver = new EdgeDriver())
            {
                try
                {
                    driver.Url = site;
                    Thread.Sleep(5000);
                    // Selecciona el número 5
                    var element = driver.FindElement(By.Id("button5"));
		    element.Submit();
                    Thread.Sleep(1000);
                    // Haz clic en el botón "Factorial"
                    var element2 = driver.FindElement(By.Id("buttonfactorial"));
                    element2.Submit();
                    Thread.Sleep(3000);  
                    var element3 = driver.FindElement(By.Id("resultado"));
                    string actualResult = element3.Text;

                    if (!actualResult.Equals("120"))
                    {
                        throw new Exception($"El resultado esperado es '120', pero se obtuvo '{actualResult}'.");
                    }


                }
                finally                                                    
                {
                    driver.Quit();
                }
            }
        }
    }
}
```
2.6.	Da clic derecho en el archivo UnitTest2 y selecciona Ejecutar pruebas.
![imagn27](../images/image027.png)
2.7.	La prueba saldrá correcta.
![imagn28](../images/image028.png)
2.8.	Modifica el resultado esperado y repite el proceso de ejecución de prueba para validar que la prueba sale errónea.
![imagn29](../images/image029.png)
2.9.	Repite el proceso, pero en este caso selecciona un número diferente para el factorial y mensaje de error, por ejemplo: #3 y mensaje: Resultado incorrecto.

Para una prueba aprobatoria, el resultado se vería de la siguiente forma:
![imagn30](../images/image030.png)
Para una prueba con error, el resultado se vería:
![imagn31](../images/image031.png)

### Solución o producto final:
Para una prueba aprobatoria:
![imagn32](../images/image032.png)

Para una prueba con error:
![imagn33](../images/image033.png)