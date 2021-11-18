"use strict";
function logMessage(name, msg) {
  if (typeof name == "string" && typeof msg == "string") {
    console.log(name + ":" + msg);
  } else if (typeof name != "string" && typeof msg != "string") {
    console.log("Neither name nor msg is a string.");
  } else if (typeof name == "string") {
    console.log("msg is not a string.");
  } else if (typeof msg == "string") {
    console.log("name is not a string.");
  }
}

// TESTS (unhide the function calls by removing the comments preceding them)

logMessage("Amanda", "Goodbye");
logMessage(4, "Hello");
logMessage("Amanda", 4);
logMessage(4, 4);