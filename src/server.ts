import app from "./app";
import { prisma } from "./lib/prisma";
const PORT = process.env.PORT || 3000;

async function server() {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error);

    await prisma.$disconnect();
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log("server is running on port :", PORT);
  });
}

server();
