module.exports =  {

   "src_folders" : ["tests"],
   "page_objects_path" : ["page-objects"],
   "output_folder" : "reports",
   "custom_commands_path" : "",
   "custom_assertions_path" : "",
   "globals_path" : "",
   "selenium" : {
    "start_process" : false,
    "server_path" : "",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },
  "test_settings" : {
  "default" : {
    "launch_url" : "http://bhargamu05",
    "selenium_port"  : 4444,
    "selenium_host"  : "bhargamu05",
    "silent": true,
    "screenshots" : {
      "enabled" : true,
      "path": ""
    },
    "desiredCapabilities": {
      "browserName": "chrome",
      "resolution": "1920x1080"
    }
  },

  "firefox" : {
    "desiredCapabilities": {
      "browserName": "firefox",
      "marionette": true
    }
  }
}

};