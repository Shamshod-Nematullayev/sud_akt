const { Telegraf } = require("telegraf");
const { Bildirishnoma } = require("../models/Bildirishnoma");

const bot = new Telegraf(process.env.TOKEN);
bot.launch();
bot.catch((err) => console.log(err));
// // bot.telegram.sendMessage(-1001567163110, "ee");
// (async () => {
//   const datas = await Bildirishnoma.find();
//   datas.forEach(async (data) => {
//     const link = await bot.telegram.getFileLink(data.file_id);
//     await Bildirishnoma.findByIdAndUpdate(data._id, {
//       $set: {
//         file_link: link.href,
//       },
//     });
//   });
//   console.log("Bajarildi hukmdorim");
// })();

module.exports = { bot };
