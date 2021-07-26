const { Router } = require('express');
const fetch = require('node-fetch');

const router = Router();

const TOKEN = 'wstoken=' + '662109bc9adf83a050c5186c776b3625'
const FUNCTION = 'wsfunction=' + 'core_completion_get_activities_completion_status'
const FORMAT = 'moodlewsrestformat=' + 'json'
const PARAMS = {
  courseid: 2,
  userid: 2,
}
let paramsStr = ''

for(let key in PARAMS){
  paramsStr+='&'+key+'='+PARAMS[key]

}

router.get('/', (req, res) => {
  /* fetch(`http://moodle/webservice/rest/server.php?${TOKEN}&${FORMAT}&${FUNCTION}${paramsStr}`)
    .then( res => res.json() )
    .then( data => {
      console.log(`http://moodle/webservice/rest/server.php?${TOKEN}&${FORMAT}&${FUNCTION}${paramsStr}`)
      res.render('home', { text: JSON.stringify(data) 
    })} ) */
    const direction = [{
      title: `Аспирантура<br/>гпнтб со ран`,
      href: '#1',
      img: 'direction3.png',
    },{
      title: `Повышение квалификации`,
      href: '#2',
      img: 'direction1.png',
    },{
      title: `Профессиональная переподготовка`,
      href: '#3',
      img: 'direction2.png',
    }]

    const courses = [
      {
        id: 0,
        title: 'Делопроизводство. Организация документирования управленческой деятельности в организации',
        stars: 5,
        reviews: [{}, {}, {}],
        type: 'Профессиональная переподготовка',
        discount: 'Скидка 40% до 14 сентября',
        start: '14 сентября 2021 года',
        hours: '16 часов',
        term: '3 месяца',
        price: '1599',
        image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
        categories:[ 'best', 're'],
      },
      {
        id: 0,
        title: 'Делопроизводство. Организация документирования управленческой деятельности в организации',
        stars: 5,
        reviews: [{}, {}, {}],
        type: 'Профессиональная переподготовка',
        discount: 'Скидка 40% до 14 сентября',
        start: '14 сентября 2021 года',
        hours: '16 часов',
        term: '3 месяца',
        price: '1599',
        image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
        categories:['asp',  're'],
      },
      {
        id: 0,
        title: 'Делопроизводство. Организация документирования управленческой деятельности в организации',
        stars: 5,
        reviews: [{}, {}, {}],
        type: 'Профессиональная переподготовка',
        discount: 'Скидка 40% до 14 сентября',
        start: '14 сентября 2021 года',
        hours: '16 часов',
        term: '3 месяца',
        price: '1599',
        image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
        categories:[ 'best', 'pop',],
      },
      {
        id: 0,
        title: 'Делопроизводство. Организация документирования управленческой деятельности в организации',
        stars: 5,
        reviews: [{}, {}, {}],
        type: 'Профессиональная переподготовка',
        discount: 'Скидка 40% до 14 сентября',
        start: '14 сентября 2021 года',
        hours: '16 часов',
        term: '3 месяца',
        price: '1599',
        image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
        categories:['asp', 'best', ],
      },
      {
        id: 1,
        title: 'Организация библиотечно-информационного обслуживания инвалидов и лиц с ОВЗ',
        stars: 5,
        reviews: [{}, {}],
        type: 'Повышение квалификации',
        discount: 'Скидка 40% до 14 сентября',
        start: '7 сентября 2021 года',
        hours: 'от 16 до 72 часов',
        term: 'от 2 дней до 2 недель',
        price: '2799',
        image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
        categories:['asp', 'up', 're'],
      }
    ];

    res.render('home', { courses, direction });
});

module.exports = router;
