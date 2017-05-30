import { BaseConfig } from './base.config';

const ProdConfig = Object.assign({}, BaseConfig, {
    api: {
        url: ''
    }
});

export { ProdConfig };
