var mqtt = require('mqtt')

var client  = mqtt.connect('mqtt://192.168.1.14');
let client2  = mqtt.connect('mqtt://192.168.1.14');
beforeAll(() => {


  client.on('connect', function () {
    console.log('CONNECT');
    client.publish('presence', 'Hello mqtt')
    client.end();
  });

});
afterAll(() => {
  client2.end();
});

test('mqtt connect', () => {

  client2.subscribe('presence')
  client2.on('message', function (topic, message) {
     // message is Buffer 
    console.log(message.toString());
   expect(message.toString()).toBe('foo');
  });
});

