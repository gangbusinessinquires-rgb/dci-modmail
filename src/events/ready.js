const { ActivityType } = require('discord.js');
const { logInfo, logSuccess } = require('../utils/logger');

module.exports = {
  name: 'ready',
  once: true,

  async execute(client) {
    // bot is ready
    logSuccess(`Logged in as ${client.user.tag}`);
    logInfo(`Serving ${client.guilds.cache.size} guild(s)`);
    logInfo(`Watching ${client.users.cache.size} user(s)`);

    // presemce
    client.user.setPresence({
      activities: [
        {
          name: 'for DMs | Modmail',
          type: ActivityType.Watching,
        },
      ],
      status: 'online',
    });

    logSuccess('DCI Modmail is online and ready.');
  },
};
