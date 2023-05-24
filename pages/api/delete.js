import prisma from "@/lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.user.delete({
    where: {
      id: req.query.id,
    },
  });
  res.json(result);
}
