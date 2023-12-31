"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
require('dotenv').config();
server_1.server.listen(process.env.PORT || 3333, () => {
    console.log("Server running... 🚀");
});
