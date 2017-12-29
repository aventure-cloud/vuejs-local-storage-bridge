"use strict";

import LocalStorage from 'LocalStorage';

export default {
    install: function(Vue, config) {
        Object.defineProperty(Vue.prototype, '$localStorage', {
            value: new LocalStorage(config)
        });
    }
}