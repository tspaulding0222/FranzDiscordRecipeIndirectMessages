const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    // get unread messages
    var count = document.querySelectorAll('.guilds-wrapper .badge').length;
    var indirectCount = document.querySelectorAll(".guild.unread").length;

    // set Franz badge
    Franz.setBadge(count, indirectCount);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);

  // Hide download message
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};
