FEATURES (en + los que propongo hacer):
+ Pantalla de inicio
+ Navegación con paso de parámetros
+ Subir archivos
Modo oscuro/claro
+ Busqueda
+ Filtro (por categoría, favoritos, etc)
Compartir info
+ Animaciones básicas
+ Swipe to delete
Persistencia de datos
+ Mostrar algun grafico
+ Reproducir sonidos
Drag & Drop
Consumir una API
+ Usar la hora
Conectar 2 apps



IDEAS:
- SSApp -> SocialSportApp
- Aplicación donde, al iniciar sesión con un nombre (que se recuerda durante la sesión), se puedan compartir imágenes asociadas a una lista de deportes (dependiendo del deporte se piden distintos parámetros a agregar a la publicación (e.g. ski pediría velocidad máxima, metros en bajada, y así)). En base a estas subidas, se puede buscar por palabras según las palabras claves (como tags) que se les dan a las publicaciones, lo cual también se puede filtrar por deporte. Al publicar que mantenga la hora de publicación [6 PUNTOS]
Las publicaciones que se han hecho durante la sesión se pueden eliminar en otra página mediante un 'swipe', al acccionar debe sonar algo. [3 PUNTOS]
En otra pantalla incluir un gráfico sobre la popularidad de cada deporte publicado. [1 PUNTO]


ESTRUCTURA:
-> Toda la memoria de 'perfil' es durante la sesión, pero las publicaciones de todos los 'perfiles' son permanentes.
-> Pantalla de inicio que pide username (no existe autentifiación, sólo el username para el trato durante la sesión).
-> 3 menúes: 
    -> Publicaciones.
    -> Publicar.
    -> Stats de los deportes, gráfico.
    -> Perfil.


COMANDOS NECESARIOS:

- Descargar:
https://developer.android.com/studio

-> Necesario para emular android (única opción en widnows): Asegurarse que estos estén incluídos: Android SDK y Android Virtual Device


- Para archivos: En el terminal general:
npx create-expo-app SSApp

- Para activar el emulador (en mi caso windows):
1. Abrir Android Studio
2. Seleccionar More Actions
3. Virtual Device Manager
4. Agregar un dispositivo en el '+' de arriba
5. Elegir un dispositivo (en mi caso Pixel 9), si es posible ajustarle altiro el tamaño del celular cosa que no sea tan grande, a mi me ocupa mucha pantalla
6. Darle un nombre y Descargar todo lo necesario
7. En la lista de dispositivos activarlo con el botón de play
8. Esperar que se cargue bien y seguir con npx expo start en vscode

- Para activar expo: En el terminal ./SSApp:
npx expo start

- Para abrir y descargar expo en el emulador:
Tras npx expo start, precionar 'a' en el terminal


- Para hacer algo con el expo del emulador (se me olvidó):
ctrl + m



