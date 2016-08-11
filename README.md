# Googleflog
Back in 2013 I built a small clone of Google Translator called Googleflog. The application was pretty simple, it “translated” human sentences or words into a “zh0omeE meEzhzhy up zhHiiT”.

This is the refactor I did just to give it some love.

## Gulp tasks
This application includes the following gulp tasks.

- **js**: Concats and minifies `dist/googleflog.min.js` and `app/src/js/script.js` to `app/dist/app.js`.
- **css**: Uses SCSS to process `app/src/style/*.scss` to `app/dist/style/*.css`.
- **clean_images**: Cleans `app/dist/images` folder.
- **images**: Copies images from `app/src/images/*/**` to `app/dist/images`.
- **jade**: Uses Jade to process `app/src/*.jade` to `app/dist`.
