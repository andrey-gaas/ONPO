const express = require('express');
const exphbs = require('express-handlebars');
const Mongo = require('./db');

const app = express();

Mongo.connect();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  
  helpers: {
    stringify: str => JSON.stringify(str),
    addOne: val => ++val,
    getName: obj=> `${obj.surname} ${obj.name[0].toUpperCase()}. ${obj.middlename?obj.middlename[0].toUpperCase()+'.' : "" }`,
    getDate: time => {
      let date = new Date(time)

      const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
      ];
      
      let res = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} г.`
      let options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
      return res //date.toLocaleString("ru-RU", options)
    }
  }
});

// console.log(hbs.handlebars)
hbs.handlebars.helpers.toHTML = html => new hbs.handlebars.SafeString(html),

hbs.handlebars.helpers.getStarsReview = val => {
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

hbs.handlebars.helpers.getStarsCourse = arrReview => {
  let stars = arrReview.reduce( (acc, val) => acc+val.review, 0 )
  stars/=arrReview.length
  stars*=2
  stars=Math.ceil(stars/2)
  return hbs.handlebars.helpers.getStarsReview(stars)
}

hbs.handlebars.helpers.getCoursesList = courses => {
  res = '<ul class="course_list">'
  for(let cours of courses){
    res+=`<a href="${cours.href}" class="course_item">${cours.title}</a>`
  }
  res+='</ul>'
  return new hbs.handlebars.SafeString(res)
}

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/', require('./routes/home'));
app.use('/api', require('./routes/api'));
app.use('/catalog', require('./routes/catalog'));
app.use('/graduate', require('./routes/graduate'));
app.use('/training', require('./routes/training'));
app.use('/retraining', require('./routes/retraining'));
app.use('/course', require('./routes/course'));
app.use('/teachers', require('./routes/teachers'));
app.use('/reviews', require('./routes/reviews'));
app.use('/structure', require('./routes/structure'));
app.use('/sign-in', require('./routes/sign-in'));
app.use('/error', require('./routes/error'));

//Error routes

app.use(function(req, res, next){
  res
    .status(404)
    .render('error', {
      error: {
        code: 404,
        text: "Страница не найдена",
        description: "Страница, на которую вы перешли, не существует. <br>Возможно она была перенесена или ещё не создана.",
      },
      title: 'Ошибка',
      headerTitle: 'Кажется что-то пошло не так',
      script: 'error.js',
    });
});

app.use(function(err, req, res, next) {
  res
    .status(500)
    .render('error', {
      error: {
        code: 500,
        text:"Ошибка сервера",
        description:"На сервере произошла непредвиденная ошибка. <br>Повторите запрос позже, если ошибка повторится сообщете об этом по почте. <br> email: begisheva@gpntbsib.ru",
      },
      title: 'Ошибка',
      headerTitle: 'Кажется что-то пошло не так',
      script: 'error.js',
    });
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


