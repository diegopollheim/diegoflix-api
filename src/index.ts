import { server } from "./server/server";
require('dotenv').config()

server.listen(process.env.PORT || 3333, () => {
  console.log("Server running... 🚀");
});
