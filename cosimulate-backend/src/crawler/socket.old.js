const WebSocketClient = require('websocket').client;

const client = new WebSocketClient();

function connect () {
    // client.connect('wss://api2.poloniex.com', 'echo-protocol');
    client.connect('wss://api2.poloniex.com');
}

client.on('connectFaild', (error) => {
    console.log('Failed to connect to server : ' + error.toString());
});

client.on('connect', (connection) => {
    connection.on('error', (error) => {
        console.log('Oops, there was  an error : ' + error.toString());
    });
    connection.on('close', () => {
        console.log('connection closed');
        // TODO REconnect
    });
    connection.on('message', (message) => {
        console.log(message);
    });
});

connect();