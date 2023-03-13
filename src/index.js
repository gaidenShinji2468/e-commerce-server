require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = require("./app");
const sequelize = require("./utils/connection");

async function main() {
  try {
    await sequelize.sync();
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server runs on port ${PORT}`);
    });
  }catch(err) {
    console.log(err);
  }
}

main();
