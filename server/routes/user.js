import express from 'express';
const UserCtrl = require("../controllers/user");

const router = express.Router();

router.get('/', UserCtrl.getUsers);
router.post('/', UserCtrl.createUser);
router.delete('/:name', UserCtrl.deleteUser);

module.exports = router;
