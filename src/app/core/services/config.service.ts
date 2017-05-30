import { Injectable, Inject } from '@angular/core';

@Injectable()
export class ConfigService {

    protected config: Object;

    constructor(
        @Inject('APP_CONFIG') private applicationConfigs: Object,
        @Inject('APP_ENV') private applicationEnvironment: string) {

        this.config = this.loadConfig(applicationConfigs, applicationEnvironment);
    }

    private createConfigEnvName(env: string): string {
        return `${env.charAt(0).toUpperCase()}${env.slice(1)}Config`;
    }

    private loadConfig(applicationConfigs: Object, applicationEnvironment: string) {
        const configEnvName = this.createConfigEnvName(applicationEnvironment);
        return applicationConfigs[configEnvName] || {};
    }

    get(param: string): any {
        return this.config[param] || null;
    }
}
