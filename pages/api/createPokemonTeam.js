module.exports = async (req, res) => {
  const pokemonId = req.body.pokemonId;
  const trainerId = req.body.trainerId;

  try {
    const pokemonTeam = await prisma.pokemonTeam.create({
      data: {
        pokemon: { connect: { id: pokemonId } },
        trainer: { connect: parseInt(trainerId) },
      },
    });

    return res.status(200).json({ success: true, pokemonTeam });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
