const express = require("express");
const router = express.Router();
const baladaController = require("../controllers/clienteController");

router.get("/", baladaController.getTodasBaladas);

router.get("/cidade/:cidade", baladaController.getPorCidade);

router.get("/data/:data", baladaController.getPorData);

router.post("/", baladaController.adicionarBalada);

router.put("/:id", baladaController.atualizarBalada);

router.delete("/:id", baladaController.deletarBalada);
module.exports = router;
