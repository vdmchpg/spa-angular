import { BaseConfig } from './base.config';

const DevConfig = Object.assign({}, BaseConfig, {
    api: {
        url: ''
    }
});

export { DevConfig };
