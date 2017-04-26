const sane = require('./sane');
test('jest works with sane', ()=>{
  expect(sane()).toBe('sanity');
});
