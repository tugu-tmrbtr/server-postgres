const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const {
  createGame,
  getAllGames,
  getGame,
  updateGames,
  deleteGame,
} = require("../controllers/game.controller");

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.post("/games", createGame);
router.get("/games", getAllGames);
router.get("/games/:id", getGame);
router.put("/games/:id", updateGames);
router.delete("/games/:id", deleteGame);

module.exports = router;
