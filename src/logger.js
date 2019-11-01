import Logger from 'pino';

const logger = Logger({
  name: 'kloudless-event-explorer',
  redact: {
    paths: ['pid', 'hostname'],
    remove: true
  }
});

export default logger;
