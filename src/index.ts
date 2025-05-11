import { server } from "./server/server.js"; // <- IMPORTANTE usar .js no final

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
