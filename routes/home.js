const { Router } = require('express');
const CourseApi = require('../services/Course');
const TeacherApi = require('../services/Teacher');
const ReviewApi = require('../services/Review');
const PagesApi = require('../services/Pages');
const router = Router();


router.get('/', async (req, res) => {

    const direction = [{
      title: `Аспирантура<br/>гпнтб со ран`,
      //href: '/graduate',
      href: '',
      img: 'direction3.png',
    },{
      title: `Повышение квалификации`,
      href: '/training',
      img: 'direction1.png',
    },{
      title: `Профессиональная переподготовка`,
      href: '/retraining',
      img: 'direction2.png',
    }]

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

    try {
      const courses = await CourseApi.get({});
      const reviews = await ReviewApi.get({});
      const teachers = await TeacherApi.get({});
      const {accordion, carusel, organizators} = await PagesApi.getOne("home")

      const formRaioChekboxList = courses.map( item => ({title:item.title, id: item.id,}));

      res.render('home', { 
        courses,
        formRaioChekboxList,
        direction,
        format, 
        accordion,
        carusel,
        organizators, 
        teacher: teachers, 
        reviews,
        menu: true,
        script: 'main.js',
        title: 'Образовательные программы ГПНТБ СО РАН',
      });
    } catch(error) {
      console.log('Ошибка в "/"');
      console.log(error.message);
      res.redirect('/error?code=500');
    }
});

module.exports = router;
