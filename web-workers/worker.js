// worker.js
self.onmessage = function(event) {
  // Receive data from main script
  const data = event.data;
  // Perform computation or processing
  const result = data * 2; // Example operation
  // Send result back to main script
  self.postMessage(result);
};
