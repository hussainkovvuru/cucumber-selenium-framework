$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/home/hussain/eclipse-workspace/Cucumberprojects/CucumberBddTest/src/main/java/com/gyanweiser/cucumber/starter/features/LoginFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "Verify the login page of the application",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login as authenticated user",
  "description": "",
  "id": "login-feature;login-as-authenticated-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\" credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "successful message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-feature;login-as-authenticated-user;",
  "rows": [
    {
      "cells": [
        "usename",
        "password"
      ],
      "line": 12,
      "id": "login-feature;login-as-authenticated-user;;1"
    },
    {
      "cells": [
        "hussain",
        "abc45679"
      ],
      "line": 13,
      "id": "login-feature;login-as-authenticated-user;;2"
    },
    {
      "cells": [
        "user1",
        "husemfje896"
      ],
      "line": 14,
      "id": "login-feature;login-as-authenticated-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Login as authenticated user",
  "description": "",
  "id": "login-feature;login-as-authenticated-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the username \"\u003cusername\u003e\" and password \"abc45679\" credentials",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "successful message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "Login as authenticated user",
  "description": "",
  "id": "login-feature;login-as-authenticated-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the username \"\u003cusername\u003e\" and password \"husemfje896\" credentials",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "successful message is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});