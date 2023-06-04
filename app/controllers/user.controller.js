const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = asyncHandler(async (req, res) => {
  try {
    const { name, games } = req.body;
    console.log(req.body);
    const newUser = await prisma.user.create({
      data: {
        name,
        games: { connect: { name: games } },
      },
    });
    res.json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await prisma.user.findMany({});
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
const getUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        games: true,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
const updateUser = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
