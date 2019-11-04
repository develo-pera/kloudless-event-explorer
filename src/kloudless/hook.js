import { createHmac } from 'crypto';

import config from '../config';
import { getNewEvents } from './events';
import logger from '../logger';

export async function hook(req, res) {
  logger.info(req, 'Hook fired');

  const retrievedSignature = req.headers['x-kloudless-signature'];
  const computedSignature = createHmac('sha256', config.kloudless.apiKey)
    .update(req.rawBody || '')
    .digest('base64');

  logger.debug(computedSignature, 'computedSignature');
  logger.debug(retrievedSignature, 'retrievedSignature');

  if (computedSignature === retrievedSignature) {
    res.status(200).send(config.kloudless.applicationId);

    getNewEvents(req.body.account);
  } else {
    res.status(403);
  }
}
