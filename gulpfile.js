const { src, dest, watch } = require("gulp"); //src es una función para identificar los archivos
//dest es una función para almacenar los archivos
const sass = require("gulp-sass")(
  require("sass")
); /* Traemos la funcionalidad de gulp-sass y despues desde gulp-sass extraemos sass y se la asignamos a la constante sass */
const plumber = require("gulp-plumber"); //Esta dependencia nos sirve para que cuando tengamos errores no detenga la ejecución del programa

function css(done) {
  src("src/scss/**/*.scss") //identificar el archivo a compilar, para que compile todos los archivos con extención scss cambiamos el app.scss por **/*.scss */
    .pipe(plumber())
    .pipe(sass()) //compilamos
    .pipe(dest("build/css")); //almacenamos en el disco duro

  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css); //identificamos el archivo y la tarea que va a ejecutar, para que compile todos los archivos con extención scss cambiamos el app.scss por **/*.scss */
  done();
}
exports.css = css;
exports.dev = dev;
