const { Client, GatewayIntentBits, Partials } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel]
});

const CHANNEL_ID = "1407805775291879455"; // seu canal

client.on("ready", () => {
  console.log(`Bot online como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.channel.id !== CHANNEL_ID) return;

  try {
    await message.delete();

    if (Math.random() < 0.5) {
      await message.member.timeout(60_000, "Roleta Russa perdeu!");
      await message.channel.send(`💥 ${message.author.username} levou um tiro e ficou 1 min em timeout!`);
      console.log(`${message.author.tag} levou timeout`);
    } else {
      await message.channel.send(`😎 ${message.author.username} sobreviveu dessa vez!`);
      console.log(`${message.author.tag} sobreviveu`);
    }
  } catch (err) {
    console.error("Erro ao processar mensagem:", err);
  }
});

client.login(MTQwNzgwMzUwMjE4MDQzODExOA.GDlx2r.jKqne025vhSoe86EIK3BfDt4W68gmMVVUMqEuI)

