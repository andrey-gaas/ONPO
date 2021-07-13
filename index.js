const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  
  helpers: {
    getName:(obj)=>{ return `${obj.surname} ${obj.name[0].toUpperCase()}. ${obj.middlename?obj.middlename[0].toUpperCase()+'.' : "" }` }
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

// ROUTES
app.use('/', require('./routes/home'));
app.use('/dron', require('./routes/dron'));
app.use('/test', require('./routes/testAlex'));

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


