import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(success => console.log('CDP Courses App bootstrapped successfully'))
    .catch(err => console.error(err));
