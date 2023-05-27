import prisma from "@/lib/prisma";

module.exports = async (req, res) => {
  const id = req.body.id;
  const pokemon = await prisma.pokemon.findUnique({
    where: {
      id,
    },
  });
  res.status(200).send(pokemon);
};
