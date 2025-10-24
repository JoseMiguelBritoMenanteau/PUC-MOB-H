# Documentación
https://docs.expo.dev/

FEATURES (en + los que propongo hacer):
+ Pantalla de inicio
Navegación con paso de parámetros
+ Subir archivos
Modo oscuro/claro
Busqueda
Filtro (por categoría, favoritos, etc)
+ Compartir info
+ Animaciones básicas
+ + Swipe to delete
Persistencia de datos
Mostrar algun grafico     [No logramos hacerlo tras una seria cantidad de intentos]
+ Reproducir sonidos
Drag & Drop
Consumir una API
+ Usar la hora
Conectar 2 apps

Pack de fuente:
https://www.npmjs.com/package/@expo-google-fonts/inter



IDEAS:
- SSApp -> SocialSportApp
- Aplicación donde, al iniciar sesión con un nombre (que se recuerda durante la sesión), se puedan compartir imágenes asociadas a una lista de deportes (dependiendo del deporte se piden distintos parámetros a agregar a la publicación (e.g. ski pediría velocidad máxima, metros en bajada, y así)). En base a estas subidas, se puede buscar por palabras según las palabras claves (como tags) que se les dan a las publicaciones, lo cual también se puede filtrar por deporte. Al publicar que mantenga la hora de publicación [5 PUNTOS]
Las publicaciones que se han hecho durante la sesión se pueden eliminar en otra página mediante un 'swipe', al acccionar debe sonar algo. [3 PUNTOS]
En otra pantalla incluir un gráfico sobre la popularidad de cada deporte publicado. [1 PUNTO]


ESTRUCTURA APP:
-> Toda la memoria de 'perfil' es durante la sesión, pero las publicaciones de todos los 'perfiles' son permanentes.
-> Pantalla de inicio que pide username (no existe autentifiación, sólo el username para el trato durante la sesión).
-> 3 menúes: 
    -> Publicaciones.
    -> Publicar.
    -> Stats de los deportes, gráfico.
    -> Perfil.

ESTRUCTURA CARPETAS:
-> index con su respectivo layout como pantalla de inicio (en este caso simplemente para dar tu nombre)
-> ruta de (tabs) para la app como tal con las 4 opciones de navegación.

-> carpeta app para las rutas con sus layouts
-> carpeta pages para la estructura visual (componentes) del mapa de rutas de app

-> la idea de la carpeta components es poner las estructuras que se repiten cosa de llamarlas siempre de ahí


COMANDOS NECESARIOS:

- Descargar:
https://developer.android.com/studio

-> Necesario para emular android (única opción en widnows): Asegurarse que estos estén incluídos: Android SDK y Android Virtual Device


- Para archivos: En el terminal general:
npx create-expo-app SSApp

- Para activar el emulador (en mi caso windows, sólo android. Para tu air se puede iphone):
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

- para que funcione bien el codigo de la pagina "publish" instalar:
1. npx expo install expo-image-picker
2. npm install @react-native-picker/picker


- Para instalar lo necesairo para los gráficos:
npx expo install victory-native
npm install victory
npx expo install victory-native react-native-svg
https://nearform.com/open-source/victory-native/docs/polar/pie/pie-charts/


npm install expo-av


