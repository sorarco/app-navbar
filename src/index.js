import * as serviceWorker from './serviceWorker';
import { registerApplication, start } from 'single-spa';

registerApplication(
    'app1',          // Name of this single-spa application
    () => import('./root.app.js'),
    () => true
);

serviceWorker.unregister();
start();

