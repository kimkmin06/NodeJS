const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow, unfollow, editUser } = require('../controllers/user');

const router = express.Router();

// POST /user/:id/follow
router.post('/:id/follow', isLoggedIn, follow);

router.delete("/:id/unfollow", isLoggedIn, unfollow);

router.put("/edit", isLoggedIn, editUser);

module.exports = router;
