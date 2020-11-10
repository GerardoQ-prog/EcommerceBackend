require("dotenv").config();

const app = require("./app");

const { PORT } = require("./config");

const main = () => {
  app.listen(PORT, console.log(`API run on PORT: ${PORT}`));
};
main();
