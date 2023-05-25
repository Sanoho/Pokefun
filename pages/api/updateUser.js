import prisma from "@/lib/prisma";

module.exports = async (req, res) => {
  const result = await prisma.user.update({
    where: {
      email: req.query.email,
    },
    data: {
      username: req.body.username,
      age: req.body.age,
      picture: req.body.picture,
      bio: req.body.bio,
    },
  });
  res.status(200).send(result);
};
