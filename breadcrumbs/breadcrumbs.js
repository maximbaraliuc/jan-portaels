"use strict";
let linkString =
  "https://www.theguardian.com/technology/measles-cases-surge-nearly-80-in-wake-of-covid-chaos-with-fears-other-diseases-could-follow";

if (linkString.startsWith("https://")) {
  linkString = linkString.slice(8);
  console.log(linkString);
}

let stringList = [];
stringList = linkString.split("/");
stringList.shift();
console.log(stringList);
