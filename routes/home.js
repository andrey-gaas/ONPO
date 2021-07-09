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
  res.render('home')
  // fetch(`http://moodle/webservice/rest/server.php?${TOKEN}&${FORMAT}&${FUNCTION}${paramsStr}`)
  //   .then( res => res.json() )
  //   .then( data => {
  //     console.log(`http://moodle/webservice/rest/server.php?${TOKEN}&${FORMAT}&${FUNCTION}${paramsStr}`)
  //     res.render('home', { text: JSON.stringify(data) 
  //   })} )
});

module.exports = router;
