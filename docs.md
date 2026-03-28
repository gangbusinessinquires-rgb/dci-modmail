# 📚 DCI Modmail — Documentation

<p align="center">
  <img src="https://img.shields.io/badge/Version-v0.1.0-38BDF8?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Pre--Release-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Built_With-Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white" />
</p>

---

## 📋 Table of Contents

- [Overview](#overview)
- [File Structure](#file-structure)
- [Configuration](#configuration)
- [Environment Variables](#environment-variables)
- [Commands](#commands)
- [Events](#events)
- [Handlers](#handlers)
- [Utilities](#utilities)
- [Self Hosting](#self-hosting)
- [Dependencies](#dependencies)
- [Contact](#contact)

---

## 📖 Overview

**DCI Modmail** is a free, open-source Discord modmail bot developed by [DCI Studios](https://dcistudios.xyz). It creates a private bridge between server members and your moderation team through Discord threads.

> ⚠️ The bot is currently in pre-release. Documentation is provided ahead of the full public launch.

---

## 🗂️ File Structure

```
dci-modmail/
│
├── src/
│   ├── commands/
│   │   ├── modmail/
│   │   │   ├── close.js
│   │   │   ├── reply.js
│   │   │   ├── silentReply.js
│   │   │   └── transcript.js
│   │   │
│   │   ├── admin/
│   │   │   ├── setup.js
│   │   │   ├── config.js
│   │   │   ├── block.js
│   │   │   └── unblock.js
│   │   │
│   │   └── utility/
│   │       ├── ping.js
│   │       └── stats.js
│   │
│   ├── events/
│   │   ├── messageCreate.js
│   │   ├── threadCreate.js
│   │   ├── threadDelete.js
│   │   ├── interactionCreate.js
│   │   └── ready.js
│   │
│   ├── handlers/
│   │   ├── commandHandler.js
│   │   ├── eventHandler.js
│   │   └── threadHandler.js
│   │
│   ├── utils/
│   │   ├── logger.js
│   │   ├── embed.js
│   │   ├── transcript.js
│   │   └── permissions.js
│   │
│   ├── config/
│   │   ├── config.js
│   │   └── defaults.js
│   │
│   └── index.js
│
├── data/
│   ├── transcripts/
│   └── database/
│
├── .env.example
├── .gitignore
├── config.yml.example
├── package.json
├── LICENSE
└── README.md
```

---

## ⚙️ Configuration

Bot configuration is handled through `config.yml`. Copy the example file and fill in your values.

```yaml
bot:
  status: "Watching for DMs | Modmail"
  presence: "online"

modmail:
  guild_id: "YOUR_SERVER_ID"
  category_id: "YOUR_CATEGORY_ID"
  log_channel_id: "YOUR_LOG_CHANNEL_ID"
  staff_role_id: "YOUR_STAFF_ROLE_ID"
  cooldown: 5000
  maxOpenThreads: 1

messages:
  open: "Your message has been received. A member of our team will be with you shortly."
  close: "This modmail thread has been closed. Feel free to open a new one if you need further assistance."
  blocked: "You are currently unable to use modmail."
  cooldown: "Please wait before sending another message."
  alreadyOpen: "You already have an open modmail thread."

transcripts:
  enabled: true
  saveLocally: true

logging:
  enabled: true
  level: "info"
```

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in your values. Never commit your `.env` file.

```env
DISCORD_TOKEN=your-bot-token-here
CLIENT_ID=your-client-id-here
GUILD_ID=your-guild-id-here
```

| Variable | Description |
|---|---|
| `DISCORD_TOKEN` | Your bot token from the Discord Developer Portal |
| `CLIENT_ID` | Your bot's application/client ID |
| `GUILD_ID` | The ID of the server the bot will operate in |

---

## 🤖 Commands

### Modmail

| Command | Description |
|---|---|
| `/close` | Close an active modmail thread |
| `/reply` | Send a reply to the user in a thread |
| `/silentreply` | Reply without sending a DM to the user |
| `/transcript` | Generate a transcript of the current thread |

### Admin

| Command | Description |
|---|---|
| `/setup` | Run initial bot setup for your server |
| `/config` | View or edit the bot configuration |
| `/block` | Block a user from using modmail |
| `/unblock` | Remove a block from a user |

### Utility

| Command | Description |
|---|---|
| `/ping` | Check the bot's latency |
| `/stats` | View ticket statistics for the server |

---

## 📡 Events

| File | Trigger |
|---|---|
| `ready.js` | Fires once when the bot comes online |
| `messageCreate.js` | Handles incoming DMs and staff replies in threads |
| `threadCreate.js` | Fires when a new modmail thread is opened |
| `threadDelete.js` | Fires when a modmail thread is deleted |
| `interactionCreate.js` | Handles all slash command interactions |

---

## ⚙️ Handlers

| File | Purpose |
|---|---|
| `commandHandler.js` | Recursively loads and registers all slash commands |
| `eventHandler.js` | Loads and binds all event listeners to the client |
| `threadHandler.js` | Core logic for creating and managing modmail threads |

---

## 🛠️ Utilities

| File | Purpose |
|---|---|
| `logger.js` | Console and file logging with log levels |
| `embed.js` | Shared embed builder helpers for consistent styling |
| `transcript.js` | Generates and saves thread transcripts |
| `permissions.js` | Checks user and role permissions before command execution |

---

## 🚀 Self Hosting

```bash
# Clone the repository
git clone https://github.com/dcistudios/dci-modmail.git

# Navigate into the project
cd dci-modmail

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Set up config
cp config.yml.example config.yml

# Start the bot
node src/index.js
```

> Node.js 18 or higher is required.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| `discord.js` | `^14.x` | Discord API wrapper |
| `dotenv` | `^16.x` | Environment variable loader |
| `js-yaml` | `^4.x` | YAML config parser |

---

## 📬 Contact

<p align="center">
  <a href="https://dcistudios.xyz">
    <img src="https://img.shields.io/badge/DCI_Studios-Website-38BDF8?style=for-the-badge" />
  </a>
  <a href="https://forums.dcistudios.xyz">
    <img src="https://img.shields.io/badge/DCI_Forums-Community-8B5CF6?style=for-the-badge" />
  </a>
  <a href="mailto:developer@dcistudios.xyz">
    <img src="https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
</p>

---

<p align="center">
<b>DCI Studios — Architecting Excellence.</b>
</p>
