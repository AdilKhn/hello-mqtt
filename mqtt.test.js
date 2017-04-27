var mqtt = require('mqtt')

var client  = mqtt.connect('mqtt://192.168.1.14');
beforeAll(() => {
  client.on('connect', ()=> {
    console.log('CONNECT');
    client.publish('presence', 'Hello mqtt')
  });
});

afterAll(() => {
  console.log('tearing down');
  client.end();
});

test('mqtt connect', done => {
  client.subscribe('presence')
  client.on('message', (topic, message) => {
    // message is Buffer 
    console.log(message.toString());
    expect(message.toString()).toBe('Hello mqtt');
    client.end();
    done();
  });
});

