// CHANGE THIS TO RUN REMOTES IN LOCAL DEV MODE
// add in this runningRemotes array the remotes you want to run in local dev mode

const remotes = [
  "@tpd-web-core-remotes/tpd-remotes-importer", // must use it to import all remotes!
  "@tpd-web-core-remotes/rich-text",
  "@tpd-web-core-remotes/tpd-cta",
  "@tpd-web-core-remotes/tpd-image",
  "@tpd-web-core-remotes/tpd-item",
  "@tpd-web-core-remotes/tpd-option-selection",
  "@tpd-web-core-remotes/tpd-short-text",
  "@tpd-web-core-remotes/tpd-number",
];

module.exports = [...remotes];
