exports.config = {
    user:"shubhamr",
    key: "dl8Y8as59i1YyGZZUeLF897aCFvIDmaKkUU1e6RgBmlgMLIIhh",
  
    updateJob: false,
    specs: ["./specs/**/android-test.ts"],
    exclude: [],
  
    capabilities: [
      {
        build: "NodeJS WebDriverIO iOS",
        name: "Sample Test - WebDriverIO",
        isRealMobile: true,
        deviceName: "iPhone.*",
        autoAcceptAlerts:false,
        platformVersion: "15",
        platformName: "iOS",
        app:"lt://APP10160601541707507830867157", //Set your APP URL
        boundElementsByIndex:true,
      },
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 0,
    path: "/wd/hub",
    hostname: "mobile-hub.lambdatest.com",
    port: 80,  
    framework: "mocha",

    
    
    mochaOpts: {
      ui: "bdd",
      timeout: 9000000,
    },
  };