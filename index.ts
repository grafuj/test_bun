import figlet from "figlet";
import index from "./index.html";

// Initial console return
// console.log("Hello via Bun!");

//server to visit
const server = Bun.serve({
  port: 3000,
  routes: {
    "/": index,
    "/figlet": () => {
      const body = figlet.textSync("Oh no, here I go again!");
      return new Response(body);
    }
  }
});

console.log(`Listening on ${server.url}`);