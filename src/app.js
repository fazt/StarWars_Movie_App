const express = require('express');
const app = express();
const path = require('path');

const routes = require('./routes');

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', routes.home);
//movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', routes.notFound);

app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});
