import "../../src/apps/radioreceiver/main.js";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("offline.js");
}
