const { Router } = require('express');
const router = Router();

const { teachers, reviews, courses} = require('./data');


router.get('/', (req, res) => {

    const direction = [{
      title: `Аспирантура<br/>гпнтб со ран`,
      href: '/graduate',
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
    const accordion = {
      training:[{
        title:'Что даёт профессиональная переподготовка?',
        text: 'Профессиональная переподготовка позволяет освоить новую профессию на базе уже имеющегося образования. Программы профессиональной переподготовки направлены на формирование конкретных компетенций для осуществления нового вида профессиональной деятельности в определенной сфере, а также получение определенной квалификации.',
      },{
        title:'Что даёт повышение квалификации?',
        text:'Повышение квалификации дает возможность за короткое время получить новые знания, навыки и умения в рамках существующей профессиональной деятельности обучающегося.',
      },{
        title:'Кто может обучаться по программам повышения квалификации и профессиональной переподготовки?',
        text:'В соответствии с пунктом 3 статьи 76 Федерального закона № 273-ФЗ от 29.12.2012 г. «Об образовании в Российской Федерации» к освоению дополнительных профессиональных программ повышения квалификации допускаются граждане: </br>• лица, имеющие среднее профессиональное и (или) высшее образование; </br>• лица, получающие среднее профессиональное и (или) высшее образование. </br>Если у Вас есть только начальное профессиональное образование, то по действующему законодательству оно приравнено к среднему профессиональному (базовый уровень). Поэтому Вы можете быть зачислены на обучение по дополнительной профессиональной программе повышения квалификации и получить удостоверение о повышении квалификации.',
      },{
        title:'Какой документ выдается после окончания обучения по программе профессиональной переподготовки?',
        text:'По окончании обучения по программам повышения квалификации выдается удостоверение о повышении квалификации установленного образца.',
      },{
        title:'Какой документ выдается после окончания обучения по программе повышения квалификации?',
        text:'По окончании обучения по программам профессиональной переподготовки выдается диплом о профессиональной переподготовке установленного образца.',
      },{
        title:'Что нужно для обучения с применением дистанционных образовательных технологий?',
        text:'Для очного обучения с применением дистанционных образовательных технологий: компьютер с выходом в Интернет; наушники (колонки); web-камера; микрофон. </br>Для заочного обучения с применением дистанционных образовательных технологий: компьютер с выходом в Интернет.',
      },{
        title:'Является ли дополнительное профессиональное образование вторым высшим образованием?',
        text:'Нет, дополнительное профессиональное образование является видом образования, получаемым дополнительно к высшему или среднему профессиональному образованию. Второе высшее образование направлено на подготовку высококвалифицированных кадров (часть 1 статьи 69 Закона от 29.12.2012 г. № 273-ФЗ). </br>Профессиональная переподготовка направлена на получение компетенции, необходимой для выполнения нового вида профессиональной деятельности, приобретение новых навыков, новой квалификации (часть 5 статьи 76 Закона от 29.12.2012 г. № 273-ФЗ).',
      },{
        title:'В чем отличие очного обучения с применением дистанционных образовательных технологий от заочного с применением дистанционных образовательных технологий?',
        text:'‒	очное с применением дистанционных образовательных технологий в группе от 5 чел.; возможны индивидуальные занятия по договорной цене; обучение проходит в формате вебинара, выезд обучающихся не предполагается. </br></br> ‒ заочное обучение с применением дистанционных образовательных технологий (обучение проходит на образовательной платформе «Непрерывное профессиональное образование в ГПНТБ СО РАН http://moodle.spsl.nsc.ru/)',
      }],
      graduate:[{
        title:'Кто может обучаться по программам повышения квалификации и профессиональной переподготовки?',
        text:'В соответствии с пунктом 3 статьи 76 Федерального закона № 273-ФЗ от 29.12.2012 г. «Об образовании в Российской Федерации» к освоению дополнительных профессиональных программ повышения квалификации допускаются граждане: </br>• лица, имеющие среднее профессиональное и (или) высшее образование; </br>• лица, получающие среднее профессиональное и (или) высшее образование. </br>Если у Вас есть только начальное профессиональное образование, то по действующему законодательству оно приравнено к среднему профессиональному (базовый уровень). Поэтому Вы можете быть зачислены на обучение по дополнительной профессиональной программе повышения квалификации и получить удостоверение о повышении квалификации.',
      },{
        title:'Какой документ выдается после окончания обучения по программе профессиональной переподготовки?',
        text:'По окончании обучения по программам повышения квалификации выдается удостоверение о повышении квалификации установленного образца.',
      },{
        title:'Какой документ выдается после окончания обучения по программе повышения квалификации?',
        text:'По окончании обучения по программам профессиональной переподготовки выдается диплом о профессиональной переподготовке установленного образца.',
      },{
        title:'Что нужно для обучения с применением дистанционных образовательных технологий?',
        text:'Для очного обучения с применением дистанционных образовательных технологий: компьютер с выходом в Интернет; наушники (колонки); web-камера; микрофон. </br>Для заочного обучения с применением дистанционных образовательных технологий: компьютер с выходом в Интернет.',
      },{
        title:'Является ли дополнительное профессиональное образование вторым высшим образованием?',
        text:'Нет, дополнительное профессиональное образование является видом образования, получаемым дополнительно к высшему или среднему профессиональному образованию. Второе высшее образование направлено на подготовку высококвалифицированных кадров (часть 1 статьи 69 Закона от 29.12.2012 г. № 273-ФЗ). </br>Профессиональная переподготовка направлена на получение компетенции, необходимой для выполнения нового вида профессиональной деятельности, приобретение новых навыков, новой квалификации (часть 5 статьи 76 Закона от 29.12.2012 г. № 273-ФЗ).',
      },{
        title:'В чем отличие очного обучения с применением дистанционных образовательных технологий от заочного с применением дистанционных образовательных технологий?',
        text:'‒	очное с применением дистанционных образовательных технологий в группе от 5 чел.; возможны индивидуальные занятия по договорной цене; обучение проходит в формате вебинара, выезд обучающихся не предполагается. </br></br> ‒ заочное обучение с применением дистанционных образовательных технологий (обучение проходит на образовательной платформе «Непрерывное профессиональное образование в ГПНТБ СО РАН http://moodle.spsl.nsc.ru/)',
      }]
    }
    
    const carusel = [{
      type:'course',
      // data:{
      //   id:'#21',
      //   review:[
      //     {id:1, review:5}, {id:1, review:6}, {id:1, review:5}
      //   ],
      //   title:'Цифровые инструменты и сервисы в современной библиотеке',
      //   start:'1 сентября 2021 года',
      //   hours: "252 часа",
      //   period: '3 месяца',
      //   price: 5990,
      //   description:'Медиабизнес, как принято считать, раскручивает культурный опрос. Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции. '
      // }
      data: courses[1]
      },{
        type:'course',
        data: courses[5]
      },{
        type:'course',
        data: courses[8]
      },{
        type:'course',
        data: courses[3]
      }
    ]
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
    const teacher = teachers
    

    res.render('home', { 
      courses,
      direction,
      format, 
      accordion,
      carusel,
      organizators, 
      teacher, 
      reviews,
      menu: true,
      script: 'main.js',
      title: 'Образовательные программы ГПНТБ СО РАН',
    });
});

module.exports = router;
