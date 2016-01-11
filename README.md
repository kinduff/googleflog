## Gulp tasks
This application includes the following gulp tasks.

- **js**: Concats and minifies `dist/googleflog.min.js` and `app/src/js/script.js` to `app/dist/app.js`.
- **css**: Uses SCSS to process `app/src/style/*.scss` to `app/dist/style/*.css`.
- **clean_images**: Cleans `app/dist/images` folder.
- **images**: Copies images from `app/src/images/*/**` to `app/dist/images`.
- **jade**: Uses Jade to process `app/src/*.jade` to `app/dist`.
