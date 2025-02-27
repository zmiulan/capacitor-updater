/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
import { registerPlugin } from '@capacitor/core';
const CapacitorUpdater = registerPlugin('CapacitorUpdater', {
    web: () => import('./web').then((m) => new m.CapacitorUpdaterWeb()),
});
export * from './definitions';
export { CapacitorUpdater };
//# sourceMappingURL=index.js.map