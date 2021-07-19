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

hbs.handlebars.helpers.getCaruselList = caruselList => {
  res = ''
  for(let item of caruselList){
    if(item.type = 'course'){
      res+=`
        <div class="swiper-slide"><div class="container">

        <div class="slide_course">
          <div class="top">
            <div class="course">
              <div class="title">${item.data.title}</div>
              <div class="description">${item.data.description}</div>
              <div class="date">
                <span class="start"><span class="bold">Старт</span> - ${item.data.start}</span>
                <span class="hours"><span class="bold">Количество часов</span> - ${item.data.hours}</span>
                <span class="period"><span class="bold">Срок обучения</span> - ${item.data.period}</span>
              </div>
              <div class="review">
                ${ hbs.handlebars.helpers.getStarsCourse(item.data.review) }
                <div class="count">(${item.data.review.length} отзыва)</div>
              </div>
            </div>
            <div class="price">₽ ${item.data.price}</div>
          </div>
          <a href="${item.data.id}" class="button color_red size_norm">Подробнее</a>
        </div>

        </div></div>
      `
    }
  }
  return new hbs.handlebars.SafeString(res)
},

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


