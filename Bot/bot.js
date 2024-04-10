window.onload = function () {
    window.botpressWebChat.init({
        "composerPlaceholder": "",
        "botConversationDescription": "",
        "botId": "6b9dfe66-2383-46db-813d-6c968d21cc8f",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "6b9dfe66-2383-46db-813d-6c968d21cc8f",
        "webhookId": "dfd5f858-e371-4973-8ffa-4180486533b4",
        "lazySocket": true,
        "themeName": "prism",
        "frontendVersion": "v1",
        "showPoweredBy": true,
        "theme": "prism",
        "themeColor": "#2563eb",
        "hideWidget": true,
        "disableAnimations": true,
        "closeOnEscape": false,
        "showConversationsButton": false,
        "enableTranscriptDownload": false,
        "className": "webchatIframe",
        "containerWidth": "100%25",
        "layoutWidth": "100%25",
        "showCloseButton": false
    });

    window.onbeforeunload = function () {
        localStorage.clear(); // Clear any local storage data
        return 'Are you sure you want to refresh?';
    };

    window.botpressWebChat.onEvent(function () {
        window.botpressWebChat.sendEvent({ type: 'show' });
    }, ['LIFECYCLE.LOADED']);
};