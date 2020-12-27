# twitch-velatoget
snippet for stream

# how to

1. `git clone https://github.com/Null-altV/twitch-velatoget.git`
2. `git submodule init`
3. `git submodule update`

# config and usage

1. Edit and fill the variable `const TWITCH_USER = 'YOUR-CHANNEL-NAME-HERE';` located in `assets/js/main.js`
2. Open `index.html` and wait for submodule init. Open your console to determine if it is ready. There should be a message indicating if the connection is successful or not. => `Connected:irc-ws.chat.twitch.tv:443`

At this point you are ready to go. Every message that is sent on the desired channel, will pop up on your localhost index page with fade-in and fade-out animation.
