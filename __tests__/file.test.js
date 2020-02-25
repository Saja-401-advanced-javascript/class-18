'use strict ';

jest.mock('fs');
const event = require('../src/events.js');

require('../src/logger.js');
require('../src/error.js');
const mocks = require('../__mocks__/fs.js');

let readFile = mocks.readFile;
let writeFile = mocks.writeFile;

describe('error event', () => {
  it('it should giv an error event when an error has happend', () => {
    expect(event.emit('error', 'you are wrong', 'booom')).toBeTruthy();
  });



  it('it should log a message when a save has happend', () => {
    expect(event.emit('log', 'saved!!!', 'don not wory')).toBeTruthy();
  });


  it('Read a file', () => {
    let fileToRead = 'anyFile.txt';
    return readFile(fileToRead, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(fileToRead));
    });
  });


  it('Update a file', () => {
    let fileToWrite = 'testFile.txt';
    return writeFile(fileToWrite, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(fileToWrite));
    });
  });
});