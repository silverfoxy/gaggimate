export default [
  {
    url: '/api/settings',
    method: 'get',
    response: () => {
      return {
          "startupMode": "standby",
          "targetSteamTemp": 150,
          "targetWaterTemp": 85,
          "homekit": true,
          "homeAssistant": false,
          "haUser": "",
          "haPassword": "",
          "haIP": "",
          "haPort": 1883,
          "pid": "58.397,1.027,249.055",
          "wifiSsid": "MyWiFi",
          "wifiPassword": "123456",
          "mdnsName": "gaggimate",
          "temperatureOffset": "0",
          "pressureScaling": "16.00",
          "boilerFillActive": false,
          "startupFillTime": 5,
          "steamFillTime": 5,
          "smartGrindActive": false,
          "smartGrindIp": "",
          "smartGrindMode": 0,
          "momentaryButtons": false,
          "brewDelay": 1000,
          "grindDelay": 1000,
          "delayAdjust": true,
          "timezone": "America/New_York",
          "clock24hFormat": false,
          "standbyTimeout": 3600
      };
    },
  },
  ];
