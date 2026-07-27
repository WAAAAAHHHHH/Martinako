const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ]
});

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.MessageCreate, async (message) => {
  // Ignore bots
  if (message.author.bot) return;

  // React to every message
  try {
    await message.react('🤍');
  } catch (err) {
    console.error("Couldn't react:", err);
  }

  // !isp command
  if (message.content.toLowerCase() === "!isp") {
    try {
      await message.author.send(
`contant me on insta for dev roles, love you.'

https://www.instagram.com/aboredloner/

      );

      // Optional confirmation in the channel
      await message.reply("🤍 Check your DMs!");
    } catch (err) {
      await message.reply("I couldn't send you a DM. Please enable DMs from server members.");
    }
  }
});

client.login("YOUR_BOT_TOKEN");
