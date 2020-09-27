
const { WebClient } = require('@slack/web-api');
// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = "xoxb-1395439541876-1401890040321-88Ono3WZffEQklpvBFwo5kcv"

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const conversationId = 'C01B8F71UR4';

(async () => {
  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage({ channel: conversationId, text: 'Hello there' });

  // `res` contains information about the posted message
  console.log('Message sent: ', res.ts);
})();
