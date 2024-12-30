const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("WhatsApp client is ready!");
});

client.initialize();

const sendWhatsAppMessage = async (message, groupId = null) => {
  if (!groupId) throw new Error("Group ID is required!");

  client.sendMessage(groupId, message);
};

module.exports = sendWhatsAppMessage;
