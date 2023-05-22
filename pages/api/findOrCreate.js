import prisma from "@/lib/prisma";

module.exports = async (req, res) => {
  const email = req.body.email;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      pokemons: true,
      friendsWith: true,
    },
  });

  if (user) {
    res.send({ user: user });
    return;
  }
  const createdUser = await prisma.user.create({
    data: {
      email: req.body.email,
      username: req.body.username,
      name: req.body.name,
      picture: req.body.picture,
    },
  });
  res.status(200).send(createdUser);
};
