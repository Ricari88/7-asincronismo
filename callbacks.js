/*
Por si a alguien le cuesta aun asimilar el concepto de los Callback…

Primero: Los callbacks son el nombre de una convención para usar funciones que llaman a otras en JavaScript. 
No hay una palabra reservada llamada “callback” en el lenguaje JavaScript que haga que nuestro código sea diferente o especial,
es mas una convención.
Tal es el caso que en lugar de llamar “callback” en el ejemplo de la clase, podemos llamarlo “suma” y funcionara igualmente.

Segundo y para que sirven? La mayoría estamos acostumbrados a programar de manera sincrona, es decir le indicamos al código que
por ejemplo defina un Valor “X” y con otro valor “Y” y realizamos un calculo (Por ejemplo una multiplicación).

El problema radica en que por ejemplo si quisiéramos crear un programa que nos convierta nuestra moneda (pesos) a su 
equivalente en Bitcoin,
podemos definir X (Valor de nuestro dinero) pero NO podemos definir de manera implícita “Y” (Precio del Bitcoin) 
por que es algo muy volátil. Entonces necesitamos obtener el precio del Bitcoin de una API, nuestro programa realiza 
una multiplicación de X * Y sin embargo no tenemos Y (precio del bitcion) porque tenemos que esperar que el API nos 
conteste cual es este valor. Es ahí donde sirven los callback

son funciones que al crearlas se les pasa una funcion como parametro
y de esta forma al hacer un llamado asincrono esta se ejecuta despues
del llamado

*/


