import { server } from "./server/server";
require('dotenv').config()

server.listen(3333, () => {
  console.log("Server running...");
});
