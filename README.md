# logica-programacion-2
Programa de ppractica de logica

# Conversor de Temperatura (JS)

Este proyecto es una práctica de lógica de programación en JavaScript que consiste en un conversor de unidades de temperatura. El programa toma una entrada en grados Celsius y calcula sus equivalentes en Fahrenheit y Kelvin.

## 📋 Instrucciones del Ejercicio

El programa cumple con los siguientes requerimientos:

1.  **Entrada de Datos:** Solicita al usuario la temperatura en grados Celsius (mediante input o prompt).
2.  **Conversión:** Realiza las fórmulas matemáticas para convertir el dato a:
    * Grados Fahrenheit.
    * Grados Kelvin.
3.  **Salida de Datos:** Imprime los resultados tanto en la consola del navegador como en el DOM (interfaz gráfica).
4.  **Validación:** Identifica si el dato de entrada es de tipo `number`. Si no lo es (ej. texto vacío o letras), muestra un mensaje de error y solicita los datos nuevamente.

## 📐 Fórmulas Utilizadas

Para realizar la conversión se aplicaron las siguientes fórmulas estándar:

* **Kelvin:** `K = Celsius + 273.15`
* **Fahrenheit:** `F = (Celsius * 9/5) + 32`

## 🧪 Pruebas (Test Cases)

Puedes utilizar los siguientes valores para verificar la precisión del algoritmo:

### Caso de Prueba 1
* **Entrada:** `45`
* **Salida Esperada:**
    * Grados Kelvin: `318.15`
    * Grados Fahrenheit: `113`

### Caso de Prueba 2
* **Entrada:** `14`
* **Salida Esperada:**
    * Grados Kelvin: `287.15`
    * Grados Fahrenheit: `57.2`

### Casos de Error (Validación)
* **Entrada:** `Hola`
* **Salida:** Mensaje de error indicando que el valor no es numérico.

## 🛠️ Tecnologías

* **HTML5:** Estructura de la página e inputs.
* **JavaScript (ES6):** Lógica de conversión, manipulación del DOM y validación de tipos (`isNaN`, `parseFloat`).

## 📂 Estructura del Proyecto

```text
├── index.html   # Interfaz de usuario
├── script.js    # Lógica del conversor
└── README.md    # Documentación
