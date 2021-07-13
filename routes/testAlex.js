const { Router } = require('express');
const router = Router();

const fullName = {name:"Алексей", surname:"Нуждин", middlename:"иванович"}

router.get('/', (req, res) => {
    res.render('testAlex', { fullName });
});

module.exports = router;