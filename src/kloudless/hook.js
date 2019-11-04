import { createHmac } from 'crypto';

import config from '../config';

export async function hook(req, res) {
  const retrievedSignature = req.headers['x-kloudless-signature'];
  const computedSignature = createHmac('sha256', config.kloudless.apiKey)
    .update(JSON.stringify(req.body) || '')
    .digest('base64');
  if (computedSignature === retrievedSignature) {
    res.status(200).send(config.kloudless.applicationId);
  } else {
    res.status(403);
  }
}
