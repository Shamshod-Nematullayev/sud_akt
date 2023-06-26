const { bot } = require("../core/bot");
const https = require("https");
const fs = require("fs");
const path = require("path");

const router = require("express").Router();

router.get("/:file_id", (req, res, next) => {
  try {
    bot.telegram
      .getFileLink(req.params.file_id)
      .then((result) => {
        bot.telegram.getFile(req.params.file_id);
        https.get(result.href, (respons) => {
          const fileStream = fs.createWriteStream("./uploads/file.pdf");
          respons.pipe(fileStream);
          fileStream.on("finish", () => {
            fileStream.close();
            res.download("./uploads/file.pdf");
            console.log(result);
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
