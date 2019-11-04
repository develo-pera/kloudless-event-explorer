import got from 'got';

import logger from '../logger';
import { eventOptions as options } from './options';

export async function getLatestCursor(accountId) {
  const { body } = await got.get(`${accountId}/events/latest/`, options);
  logger.debug({ body }, '"getLatestCursor" - Cursor Body');
  return body.cursor;
}

export async function getNewEvents(accountId, lastCursor) {
  logger.info({ accountId, source: 'kloudless' }, 'New sync events from Kloudless');

  const { body } = await got.get(`${accountId}/events/`, {
    ...options,
    query: { cursor: lastCursor }
  });

  logger.info({ body }, '"getNewEvents" - Cursor Body');
  body.objects.map(event => {
    event.event_type = event.type;
    return event;
  });

  return body;
}
