# Vuejs localstorage
local-storage-bridge integration with VueJs framework

## Install
`npm install --save vuejs-local-storage-bridge`

## Integrate
```javascript
Vue.use(require('vuejs-local-storage-bridge'), {prefix: 'myappname_'});
```

## Use
Inside your vuejs components:
```javascript
export default {
    
    mounted() {
        this.$localStorage.set('user', {
            first_name: 'Valerio',
            last_name: 'Barbera'
        });
        
        console.log(this.$localStorage.get('user'));
    }
    
}
```
