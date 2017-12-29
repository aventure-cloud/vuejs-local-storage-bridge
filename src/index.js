"use strict";

import LocalStorage from 'local-storage-bridge';

export default {
    install: function(Vue, config) {
        Object.defineProperty(Vue.prototype, '$localStorage', {
            value: new LocalStorage(config)
        });
    }
}