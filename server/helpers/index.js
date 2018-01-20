const handleProcessError = () => {
  /**
  * Handle shutdown gracefully
  * @param  {Object} signal - OS system event
  * @return {Function} exit - logs the message and ends the process
  */
  function shutdown(signal) {
    return function exit() {
      console.log("Caught " + signal + ", shutting down.");
      process.exit(0);
    };
  }

  /**
   * Gracefully shutdown the app in response to
   * system events for process interuption and process termination.
   */
  process.once("SIGTERM", shutdown("SIGTERM"));
  process.once("SIGINT", shutdown("SIGINT"));
}

module.exports = {
  handleProcessError
};