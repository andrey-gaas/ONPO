const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  
  helpers: {
    getName: obj=> `${obj.surname} ${obj.name[0].toUpperCase()}. ${obj.middlename?obj.middlename[0].toUpperCase()+'.' : "" }`,
    getDate: time => {
      let date = new Date(time)
      let options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
      return date.toLocaleString("ru", options)
    }
  }
});

// console.log(hbs.handlebars)
hbs.handlebars.helpers.toHTML = html => new hbs.handlebars.SafeString(html),
hbs.handlebars.helpers.getStars = val => {
  let fullStars = Math.floor(val/2)
  let halfStars = val%2
  let emptyStars = Math.floor( (10-val) / 2)
  let res = '<ul class="stars_list">'
  for(let i = 0; i<fullStars; i++){
    res+='<li class="star activ"><img src="/image/icons/star_fill.svg" class="icon"/></li>'
  }
  if(halfStars === 1){
    res+=`<li class="star activ_half"><img src="/image/icons/star_fill_half.svg" class="icon"/></li>`
  }
  for(let k = 0; k<emptyStars; k++){
    res+='<li class="star"><img src="/image/icons/star_empty.svg" class="icon"/></li>'
  }
  res+='</ul>'
  return new hbs.handlebars.SafeString(res)
},

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));

// ROUTES
app.use('/', require('./routes/home'));
app.use('/test', require('./routes/testAlex'));

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


