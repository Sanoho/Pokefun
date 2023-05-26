import prisma from "@/lib/prisma";

module.exports = async (req, res) => {
  const allPokemon = await prisma.pokemon.findMany();
  res.status(200).json(allPokemon);
};
