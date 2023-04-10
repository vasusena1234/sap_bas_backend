"use strict";
var hana = require("@sap/hana-client");

var connOptions = {
  serverNode: "0b3bfb3a-ab5a-4537-a531-07e78a0f02d5.hana.trial-us10.hanacloud.ondemand.com:443",
  encrypt: "true",
  sslValidateCertificate: "false",
  uid: "DBADMIN",
  pwd: "Vasu@1234",
};

var dbConnection = hana.createConnection();

dbConnection.connect(connOptions, function (err) {
  if (err) throw err;
  dbConnection.exec(
    "SELECT * FROM PROJECT2_HDI_DB_1.REGIONS",
    function (err, result) {
      if (err) throw err;
      console.log(result);
      dbConnection.disconnect();
    }
  );
});