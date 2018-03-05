# Vuejs Local Storage Bridge
local-storage-bridge integration for VueJs applications.

See more details: [@aventure-cloud/local-storage](https://www.npmjs.com/package/@aventure-cloud/local-storage)


- **Author:** Valerio Barbera - [valerio@aventuresrl.com](mailto:valerio@aventuresrl.com)
- **Author Website:** [www.aventuresrl.com](target="_blank":https://www.aventuresrl.com)


## Install
`npm install --save @aventure-cloud/vuejs-local-storage-bridge`


## Integrate
```javascript
import ls from '@aventure-cloud/vuejs-local-storage-bridge';
Vue.use(ls, {
    resetOnLoad: true|false,
    prefix: 'myappname_'
});
```


## Use
Inside your vuejs components:
```javascript
export default {
    
    mounted() {
        this.$localStorage.set('users', [
            {
                first_name: 'Valerio',
                last_name: 'Barbera'
            },
            {
                first_name: 'Sebastiano',
                last_name: 'Sicignano'
            }
        ]);
        
        console.log(this.$localStorage.get('users'));
    }
    
}
```
