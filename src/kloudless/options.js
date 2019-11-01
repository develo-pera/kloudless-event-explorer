import config from '../config'

export const eventOptions = {
    baseUrl: 'https://api.kloudless.com/v1/accounts',
    json: true,
    headers: {
        authorization: `APIKey ${config.kloudless.apiKey}`
    }
};
