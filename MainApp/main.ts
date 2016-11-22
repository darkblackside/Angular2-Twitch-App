import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainAppModule } from './MainApp.Module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(MainAppModule);
