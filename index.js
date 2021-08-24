const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  
  helpers: {
    stringify: str => JSON.stringify(str),
    addOne: val => ++val,
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

// TEST ROUTES
app.use('/dron', require('./routes/dron'));
app.use('/test', require('./routes/testAlex'));

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


