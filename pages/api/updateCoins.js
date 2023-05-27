import prisma from "@/lib/prisma";

module.exports = async (req, res) => {
  const { updatedBalance } = req.body;
  try {
    const result = await prisma.user.update({
      where: {
        email: req.body.email,
      },
      data: {
        coins: updatedBalance,
      },
    });
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
