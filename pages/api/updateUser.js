import prisma from "@/lib/prisma";

export default async function updateUser(req, res) {
  const result = await prisma.user.update({
    where: {
      email: req.query.email,
    },
    data: {
      username: req.body.username,
      age: req.body.age,
      image: req.body.picture,
      bio: req.body.bio,
    },
  });
  res.status(200).send(result);
}
