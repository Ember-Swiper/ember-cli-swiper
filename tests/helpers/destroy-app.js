import { run } from '@ember/runloop';

export default function destroyApp(application) {
  // jscs:disable disallowDirectPropertyAccess
  run(application, 'destroy');
}
