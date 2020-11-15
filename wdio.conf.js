const headed = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["dot"],
  mochaOpts: {},
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
  cucumberOpts: {},
  // eslint-disable-next-line no-unused-vars
  before: (capabilities, specs) => {},
};

const headless = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      },
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["dot"],
  mochaOpts: {},
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
  cucumberOpts: {},
  // eslint-disable-next-line no-unused-vars
  before: (capabilities, specs) => {},
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
