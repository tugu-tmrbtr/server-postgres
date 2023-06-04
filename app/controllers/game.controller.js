const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createGame = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const newGame = await prisma.game.create({
      data: {
        name,
      },
    });
    res.json(newGame);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
const getAllGames = asyncHandler(async (req, res) => {
  try {
    const games = await prisma.game.findMany();
    res.json(games);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
const getGame = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const game = await prisma.game.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
    res.json(game);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
const updateGames = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updatedGame = await prisma.game.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    res.json(updatedGame);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
const deleteGame = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGame = await prisma.game.delete({
      where: {
        id,
      },
    });
    res.json(deletedGame);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = {
  createGame,
  getAllGames,
  getGame,
  updateGames,
  deleteGame,
};
