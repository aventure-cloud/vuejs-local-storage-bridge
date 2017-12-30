# Vuejs Local Storage Bridge
local-storage-bridge integration for VueJs applications.

See more details: [local-storage-bridge](https://www.npmjs.com/package/local-storage-bridge)


- **Author:** Valerio Barbera - [valerio@aventuresrl.com](mailto:valerio@aventuresrl.com)
- **Author Website:** [www.aventuresrl.com](target="_blank":https://www.aventuresrl.com)


## Install
`npm install --save vuejs-local-storage-bridge`


## Integrate
```javascript
import ls from 'vuejs-local-storage-bridge';
Vue.use(ls, {prefix: 'myappname_'});
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
