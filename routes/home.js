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
    const format = [{
      title:'Вы оставляете заявку',
      text:'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
      },{
      title:'Вы проходите регистрацию',
      text:'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
      },{
      title:'Вы оплачиваете обучение',
      text:'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
      },{
      title:'Вы начинаете обучение',
      text:'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
      },{
      title:'Вы проходите аттестацию',
      text:'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
      },{
      title:'Вы получаете диплом',
      text:'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
      },
    ]
    const accordion = [{
      title:'Является ли дополнительное профессиональное образование высшим образованием?',
      text: 'Профессиональная переподготовка позволяет освоить новую профессию на базе уже имеющегося образования. Программы профессиональной переподготовки направлены на формирование конкретных компетенций для осуществления нового вида профессиональной деятельности в определенной сфере, а также получение определенной квалификации.',
    },{
      title:'Как можно записаться на дополнительное профессиональное образование в вашем филиале?',
      text: 'Профессиональная переподготовка позволяет освоить новую профессию на базе уже имеющегося образования. Программы профессиональной переподготовки направлены на формирование конкретных компетенций для осуществления нового вида профессиональной деятельности в определенной сфере, а также получение определенной квалификации.',
    },{
      title:'Что даёт профессиональная переподготовка?',
      text: 'Профессиональная переподготовка позволяет освоить новую профессию на базе уже имеющегося образования. Программы профессиональной переподготовки направлены на формирование конкретных компетенций для осуществления нового вида профессиональной деятельности в определенной сфере, а также получение определенной квалификации.',
    },{
      title:'Какой диплом выдается после окончания обучения по программе профессиональной переподготовки?',
      text: 'Профессиональная переподготовка позволяет освоить новую профессию на базе уже имеющегося образования. Программы профессиональной переподготовки направлены на формирование конкретных компетенций для осуществления нового вида профессиональной деятельности в определенной сфере, а также получение определенной квалификации.',
    },{
      title:'Что нужно для обучения с применением дистанционных образовательных технологий?',
      text: 'Профессиональная переподготовка позволяет освоить новую профессию на базе уже имеющегося образования. Программы профессиональной переподготовки направлены на формирование конкретных компетенций для осуществления нового вида профессиональной деятельности в определенной сфере, а также получение определенной квалификации.',
    }]
    
    const carusel = [{
      type:'course',
      data:{
        id:'#21',
        review:[
          {id:1, review:5}, {id:1, review:6}, {id:1, review:5}
        ],
        title:'Цифровые инструменты и сервисы в современной библиотеке',
        start:'1 сентября 2021 года',
        hours: "252 часа",
        period: '3 месяца',
        price: 5990,
        description:'Медиабизнес, как принято считать, раскручивает культурный опрос. Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции. '
      }
    },{
      type:'course',
      data:{
        id:'#22',
        review:[
          {id:1, review:5}, {id:1, review:10}, {id:1, review:10}, {id:1, review:6}, {id:1, review:5}
        ],
        title:'Цифровые оболчки для управления данными',
        start:'1 сентября 2021 года',
        hours: "300 часа",
        period: '4 месяца',
        price: 65000,
        description:'Медиабизнес, как принято считать, раскручивает культурный опрос. Создание приверженного переворачивает жизненный цикл продукции. '
      }
    }]
    const organizators =[{
      name: 'Ирина',
      surname: 'Гузенок',
      middlename: 'Валерьевна',
      position:'Заведующий отделом непрерывного профессионального образования',
      education:'Кандидат технических наук',
      phone:'(383) 373-06-58',
      email:'guzenok@gpntbsib.ru',
      image: '1.png'
    },{
      name: 'Екатерина',
      surname: 'Туманик',
      middlename: 'Николаевна',
      position:'Заведующий отделом непрерывного профессионального образования',
      education:'Кандидат технических наук',
      phone:'(383) 373-06-58',
      email:'tumanik@gpntbsib.ru',
      image: '2.png'
    },{
      name: 'Ирина',
      surname: 'Гузенок',
      middlename: 'Валерьевна',
      position:'Заведующий отделом непрерывного профессионального образования',
      education:'Кандидат технических наук',
      phone:'(383) 373-06-58',
      email:'guzenok@gpntbsib.ru',
      image: '1.png'
    },{
      name: 'Екатерина',
      surname: 'Туманик',
      middlename: 'Николаевна',
      position:'Заведующий отделом непрерывного профессионального образования',
      education:'Кандидат технических наук',
      phone:'(383) 373-06-58',
      email:'tumanik@gpntbsib.ru',
      image: '2.png'
    }]
    const teacher = [{
      id:'3',
      name:"3 сабина", 
      surname:"Тихомирова", 
      middlename:"Ильинична", 
      position:'Доктор педагогических наук', 
      img:'/image/oraganizators/1.png',
      courses:[{
        title:'Библиографическое описание. Общие требования и правила составления',
        href:"#0"
      },{
        title:'Современные инфокоммуникационные технологии. Технологии «ИРБИС»',
        href:"#1"
      },{
        title:'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
        href:"#2"
      }],
      status:{
        education:'ОМГПУ, ОМГУПС',
        form:'Онлайн / Оффлайн',
        experience:'7 лет'
      }
    },{
      id:'4',
      name:"4 сабина", 
      surname:"Тихомирова", 
      middlename:"Ильинична", 
      position:'Доктор педагогических наук', 
      img:'/image/oraganizators/2.png',
      courses:[{
        title:'Библиографическое описание. Общие требования и правила составления',
        href:"#0"
      },{
        title:'Современные инфокоммуникационные технологии. Технологии «ИРБИС»',
        href:"#1"
      },{
        title:'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
        href:"#2"
      }],
      status:{
        education:'ОМГПУ, ОМГУПС',
        form:'Онлайн / Оффлайн',
        experience:'8 лет'
      }
    },{
      id:'5',
      name:"5 сабина", 
      surname:"Тихомирова", 
      middlename:"Ильинична", 
      position:'Доктор педагогических наук', 
      img:'/image/oraganizators/2.png',
      courses:[{
        title:'Библиографическое описание. Общие требования и правила составления',
        href:"#0"
      },{
        title:'Современные инфокоммуникационные технологии. Технологии «ИРБИС»',
        href:"#1"
      },{
        title:'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
        href:"#2"
      }],
      status:{
        education:'ОМГПУ, ОМГУПС',
        form:'Онлайн / Оффлайн',
        experience:'8 лет'
      }
    },{
      id:'6',
      name:"6 Cабина", 
      surname:"Тихомирова", 
      middlename:"Ильинична", 
      position:'Доктор педагогических наук', 
      img:'/image/oraganizators/2.png',
      courses:[{
        title:'Библиографическое описание. Общие требования и правила составления',
        href:"#0"
      },{
        title:'Современные инфокоммуникационные технологии. Технологии «ИРБИС»',
        href:"#1"
      },{
        title:'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
        href:"#2"
      }],
      status:{
        education:'ОМГПУ, ОМГУПС',
        form:'Онлайн / Оффлайн',
        experience:'8 лет'
      }
    }]
    const reviews = [{
      course: 'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
      text: '«Во-первых, очень чёткая организация. Во-вторых, сама тематика подобрана с большим знанием проблем. В-третьих, дистанционная форма проведения занятий — самая подходящая. Спасибо за курс, было очень интересно и познавательно. Всё применимо на практике».',
      user: {name:"Алексей", surname:"Нуждин", middlename:"иванович", position:'Кандидат педагогичкских наук', img:'/image/oraganizators/1.png'},
      stars: 7,
      date: 1626331542620,
      likes: [12, 11,3,2,5],
    
    },{
      course: 'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
      text: '«Во-первых, очень чёткая организация. Во-вторых, сама тематика подобрана с большим знанием проблем. В-третьих, дистанционная форма проведения занятий — самая подходящая. Спасибо за курс, было очень интересно и познавательно. Всё применимо на практике».',
      user: {name:"Алексей", surname:"Нуждин", middlename:"иванович", position:'заместитель директора по научной работе', img:'/image/oraganizators/1.png'},
      stars: 6,
      date: 1626101542620,
      likes: [12, 11,3,2,5,12 ,2],
    },{
      course: 'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
      text: '«Во-первых, очень чёткая организация. Во-вторых, сама тематика подобрана с большим знанием проблем. В-третьих, дистанционная форма проведения занятий — самая подходящая. Спасибо за курс, было очень интересно и познавательно. Всё применимо на практике».',
      user: {name:"Алексей", surname:"Нуждин", middlename:"иванович", position:'заместитель директора по научной работе', img:'/image/oraganizators/1.png'},
      stars: 6,
      date: 1626101542620,
      likes: [12, 11,3,2,5,12 ,2],
    },{
      course: 'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
      text: '«Во-первых, очень чёткая организация. Во-вторых, сама тематика подобрана с большим знанием проблем. В-третьих, дистанционная форма проведения занятий — самая подходящая. Спасибо за курс, было очень интересно и познавательно. Всё применимо на практике».',
      user: {name:"Алексей", surname:"Нуждин", middlename:"иванович", position:'заместитель директора по научной работе', img:'/image/oraganizators/1.png'},
      stars: 6,
      date: 1626101542620,
      likes: [12, 11,3,2,5,12 ,2],
    },{
      course: 'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
      text: '«Во-первых, очень чёткая организация. Во-вторых, сама тематика подобрана с большим знанием проблем. В-третьих, дистанционная форма проведения занятий — самая подходящая. Спасибо за курс, было очень интересно и познавательно. Всё применимо на практике».',
      user: {name:"Алексей", surname:"Нуждин", middlename:"иванович", position:'заместитель директора по научной работе', img:'/image/oraganizators/1.png'},
      stars: 6,
      date: 1626101542620,
      likes: [12, 11,3,2,5,12 ,2],
    },{
      course: 'Культурно-досуговая деятельность библиотек в современных социокультурных условиях',
      text: '«Во-первых, очень чёткая организация. Во-вторых, сама тематика подобрана с большим знанием проблем. В-третьих, дистанционная форма проведения занятий — самая подходящая. Спасибо за курс, было очень интересно и познавательно. Всё применимо на практике».',
      user: {name:"Алексей", surname:"Нуждин", middlename:"иванович", position:'заместитель директора по научной работе', img:'/image/oraganizators/1.png'},
      stars: 6,
      date: 1626101542620,
      likes: [12, 11,3,2,5,12 ,2],
    }]

    res.render('home', { 
      courses, direction, format, 
      accordion, carusel, organizators, 
      teacher, reviews,
    });
});

module.exports = router;
