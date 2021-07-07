const { Router } = require('express');
const fetch = require('node-fetch');

const router = Router();

router.get('/', (req, res) => {
  fetch('http://moodle/webservice/rest/server.php?wstoken=c945ed7e55b3cc709fe449e59ec67fc0&wsfunction=core_webservice_get_site_info&moodlewsrestformat=json')
    .then( res => res.json() )
    .then( data => res.render('home', { text: data.sitename }) )
});

module.exports = router;
