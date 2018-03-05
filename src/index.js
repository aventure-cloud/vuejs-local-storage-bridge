"use strict";

import LocalStorage from '@aventure-cloud/local-storage';

export default {
    install: function(Vue, options) {
        Object.defineProperty(Vue.prototype, '$localStorage', {
            value: new LocalStorage(options)
        });
    }
}