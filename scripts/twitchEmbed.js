if (!document.querySelector('script[src="https://player.twitch.tv/js/embed/v1.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://player.twitch.tv/js/embed/v1.js';
            script.async = true;
            document.body.appendChild(script);
};

// Create Twitch player once the Twitch embed script is loaded
window.addEventListener('load', function() {
    if (window.Twitch && window.Twitch.Player) {
        if (!document.querySelector('#twitch-embed iframe')) {
            new window.Twitch.Player("twitch-embed", {
                channel: "hellsjanitortv"
            });
        }
    }
});