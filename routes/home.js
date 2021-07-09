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
        image: 'https://lh3.googleusercontent.com/proxy/kxq1w8CbRUdcFt9nH3liIMXWgK0c3Gj9TC_K2Cbv72WqI_aLoH1sKR9EebN0xA-a-B1NhzzRTy8KJhMdv0ls1IOZfbGCCNaK4Bh3PIRYwufCMkzpXpMUowVwZW9liKlBZw',
      }
    ];

    res.render('home', { courses });
});

module.exports = router;
