const { Router } = require('express');
const router = Router();

router.post('/application', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = router;
