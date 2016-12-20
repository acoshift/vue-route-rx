# vue-route-rx

Create observable from vue-router to work with vue-rx subscriptions

## Installation

### NPM + ES2015
```
npm install vue vue-router vue-rx rxjs vue-route-rx --save
```

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Observable, Subscription, BehaviorSubject } from 'rxjs'
import VueRx from 'vue-rx'
import VueRouteRx from 'vue-route-rx'

Vue.use(VueRouter)
Vue.use(VueRx, { Observable, Subscription })
Vue.use(VueRouteRx, { BehaviorSubject })

const router = new VueRouter(...)
VueRouterRx.use(router)
```

### Global Script

Includes vue-route-rx after Vue.js and RxJS

## Usage

```js
Vue.component('foo', {
  subscriptions: {
    msg: this.$$route
      .flatMap((route) => Message.get(route.params.id))
  }
})
```


