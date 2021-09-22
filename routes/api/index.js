const { Router } = require('express');
const router = Router();

router.post('/application', (req, res) => {
  console.log(req.body);
  res.redirect('/?application=success');
});

module.exports = router;
