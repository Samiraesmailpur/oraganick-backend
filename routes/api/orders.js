const express = require("express");
const ctrl = require("../../controllers/addOrder");
const { validateBody } = require("../../middlewares/validateBody");
const { schema } = require("../../models/order");

const router = express.Router();

router.post("/", validateBody(schema), ctrl.addOrder);

module.exports = router;
