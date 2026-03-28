const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { loadCommands } = require('./handlers/commandHandler');
const { loadEvents } = require('./handlers/eventHandler');
const { logInfo, logSuccess, logError } = require('./utils/logger');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
  ],
});

client.commands = new Collection();

(async () => {
  try {
    logInfo('Starting DCI Modmail...');

    await loadCommands(client);
    await loadEvents(client);

    await client.login(process.env.DISCORD_TOKEN);
    logSuccess('Online.');

  } catch (error) {
    logError(error.message);
    process.exit(1);
  }
})();

process.on('unhandledRejection', (error) => {
  logError(error.message);
});

process.on('uncaughtException', (error) => {
  logError(error.message);
  process.exit(1);
});

