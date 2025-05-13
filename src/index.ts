import { server } from "./server/server.ts";

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});