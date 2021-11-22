const logLevels = {
  "FATAL": {
    level: 110,
    description: "Fatal errors are those that actually break the application in most cases....or your code might be somehow able to start aborting prevention of some data corruption, so it all goes sideways. Very serious thing to deal with, type of problem that should result in people getting emergency calls in the middle of the night.",
    icon: "🔥",
    print_to_console: ["development", "production"],
    save_to_file: ["all"]
  },
  "ERROR": {
    level: 90,
    description: "An error is a serious issue and represents the failure of something important going on in your application.  Unlike FATAL, the application itself isn’t going down the tubes.  Here you’ve got something like dropped database connections or the inability to access a file or service.  This will require someone’s attention probably sooner than later, but the application can limp along.",
    icon: "🚨",
    print_to_console: ["development"],
    save_to_file: ["all"]
  },
  "WARN": {
    level: 70,
    description: "This is where we are getting into unclear terms. WARNINGS are a way of logging an indication that there might be some problems with the application, or that we are detecting a problematic situation but it's not breaking anything. Like trying to send data to some API, and after multiple failed automated attempts we put WARN to indicate it's failing to receive our data...problematic yes, app breaking no...so nothing is broken yet something is wrong. Someone should look into these, deeper investigation might show unexpected things.",
    icon: "😱",
    print_to_console: ["development", "production"],
    save_to_file: ["all"]
  },
  "INFO": {
    level: 55,
    description: "Great, we got to the part where things aren't breaking. We can calm down and release our stress at this point. These messages are exactly what the name says... info. Info telling us we got user registered, hit some targets, casual app running stats. From these get basic info that we usually don't care about...but it's useful to show how it's running and info stats.",
    icon: "🔄",
    print_to_console: ["production"],
    save_to_file: null
  },
  "DEBUG": {
    level: 40,
    description: "DEBUG Log Level is a space where you start to look into details about application diagnostics and behavior. This is also where the log might become harder to read and understand cuz it starts to provide much more information about processes than you would need or want in normal production mode. But also this level is intended to give better insides view into detailed diagnostics reports and information for anyone looking to develop or maintain application.",
    icon: "👨‍💻",
    print_to_console: ["development", "early_production"],
    save_to_file: ["development"]
  },
  "TRACE": {
    level: 25,
    description: "TRACE Level is actually similar to DEBUG but with even more detail information captured. At this point we are interested in getting as much as possible data about the application behavior allowing us to detect underlying problems that may cause problems, errors, warnings, different responses. This kind of log is probably gonna hurt your application performance and as such is not intended to be used in production. Like driving an F1 with mechanic guy and laptop for diagnostics still attached to it.",
    icon: "📡",
    print_to_console: ["development"],
    save_to_file: ["development"]
  },
  "ALL": {
    level: 10,
    description: "Very simple to understand, log it all. All levels, types, places...even custom defined logging that was set.",
    icon: "⚡",
    print_to_console: ["development", "early_production"],
    save_to_file: ["early_production"]
  },
  "OFF": {
    level: 0,
    description: "Yup yup, exactly that. Don't log anything anywhere.",
    icon: "🔘",
    print_to_console: null,
    save_to_file: null
  }
};

module.exports = logLevels;
