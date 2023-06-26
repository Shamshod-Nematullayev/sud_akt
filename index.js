const express = require("express");
const cors = require("cors");
const { Telegraf } = require("telegraf");
const { Bildirishnoma } = require("./models/Bildirishnoma");

require("dotenv").config();
const app = express();

// Connect to db
require("./config/connectDB").connectDB();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

// use routers
app.use("/api/auth", require("./routers/auth"));
app.use("/api/sudAkts", require("./routers/sudRouter"));
app.use("/api/bildirgilar", require("./routers/bildirgilarRouter"));
app.use("/api/forma1lar", require("./routers/forma1Router"));
app.use("/api/fetchTelegram", require("./routers/fetchTelegramRouter"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server listening port: ${PORT}`);
  const a = await Bildirishnoma.find({
    "inspector.name": "Муродуллаева Дилфуза",
  });

  // a.forEach((b) => {
  //   b.abonents.forEach((d) => {
  //     console.log(d);
  //   });
  // });
});
require("./core/bot");
