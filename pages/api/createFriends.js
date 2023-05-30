import prisma from "@/lib/prisma";

module.exports = async (req, res) => {
  const friendsWithId = req.body.friendsWithId;
  const currentUser = req.body.currentUser;

  try {
    const friendsWith = await prisma.friend.create({
      data: {
        friendsWith: { connect: { id: friendsWithId } },
        friendedBy: { connect: { email: currentUser.email } },
      },
    });

    return res.status(200).json({ success: true, friendsWith });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
