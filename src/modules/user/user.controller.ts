import { prisma } from "../../lib/prisma";
import { Request, Response } from "express";

const register = async (req: Request, res: Response) => {
  const payload = req.body;
  const user = await prisma.user.create({
    data: payload,
  });

  res.send({ message: "registerd successfully ", data: user });
};

export const userController = {
  register,
};
