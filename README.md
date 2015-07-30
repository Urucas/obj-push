# obj-push [![Build Status](https://travis-ci.org/Urucas/obj-push.svg)](https://travis-ci.org/Urucas/obj-push)

# Usage
Merge an object with other object keys

```bash
npm install --save obj-push
```

```javascript
import push from 'obj-push';
Object.prototype.push = function(obj){
  return push(this, obj);
};

let foo = {'foo':'bar'};
let bar = {'bar':'foo'};

foo.push(bar);
console.log(foo)
//  { foo: 'bar', bar: 'foo' }
```
