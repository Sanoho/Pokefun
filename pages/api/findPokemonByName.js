import prisma from "@/lib/prisma";

module.exports = async (req, res) => {
  const name = req.body.name;
  const pokemon = await prisma.pokemon.findUnique({
    where: {
      name,
    },
  });
  res.status(200).send(pokemon);
};
