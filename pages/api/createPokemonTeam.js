import prisma from "@/lib/prisma";

module.exports = async (req, res) => {
  const pokemonId = req.body.pokemonId;
  const currentUser = req.body.currentUser;
  const coins = req.body.coins;

  try {
    const pokemonTeam = await prisma.pokemonTeam.create({
      data: {
        pokemon: { connect: { id: pokemonId } },
        trainer: { connect: { email: currentUser.email } },
      },
    });
    const updateCoins = await prisma.user.update({
      where: {
        email: currentUser.email,
      },
      data: {
        coins: coins,
      },
    });

    return res
      .status(200)
      .json({ success: true, pokemonTeam, currentUser: updateCoins });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
