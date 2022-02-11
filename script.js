const ws = new WebSocket('wss://ws.blockchain.info/inv');
const testDiv = document.getElementById('testDiv');




ws.addEventListener('open', (event) => {
    console.log(event);

    const data = {
        op: "unconfirmed_sub"
    }
    ws.send(JSON.stringify(data));
});

ws.addEventListener('message', (event) => {

    var msgData = JSON.parse(event.data);
    testDiv.innerText = msgData.x.hash;
    console.log(msgData);

});
