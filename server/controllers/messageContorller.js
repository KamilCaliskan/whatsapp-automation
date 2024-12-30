const readGoogleSheet = require("../services/googleSheets");
const sendWhatsAppMessage = require("../services/whatsapp");

const sendMessages = async (req, res) => {
  try {
    const rows = await readGoogleSheet();
    for (const row of rows) {
      const [message, imageUrl, interval] = row;

      // Simulating interval (convert to ms)
      await new Promise((resolve) => setTimeout(resolve, interval * 60 * 1000));

      // Send message via WhatsApp
      await sendWhatsAppMessage(message, process.env.GROUP_ID);
    }

    res.status(200).send("Messages sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send messages.");
  }
};

module.exports = { sendMessages };
