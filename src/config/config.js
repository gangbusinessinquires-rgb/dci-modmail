const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const configPath = path.join(__dirname, '../../config.yml');

let config;

try {
  const file = fs.readFileSync(configPath, 'utf8');
  config = yaml.load(file);
} catch (error) {
  console.error(`Failed to load config: ${error.message}`);
  process.exit(1);
}

module.exports = config;

