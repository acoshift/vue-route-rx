;(function () {
  var $$route
  var _Vue

  function VueRouteRx (Vue, Rx) {
    _Vue = Vue
    var warn = Vue.util.warn || function () {}

    if (!Rx || !Rx.BehaviorSubject) {
      warn('VueRouteRx requires BehaviorSubject in Rx')
      return
    }

    $$route = new Rx.BehaviorSubject(null)

    Vue.prototype.$$route = $$route.filter(function (next) {
      return !!next
    }).asObservable()
  }

  VueRouteRx.use = function (router) {
    router.afterEach(function (route) {
      $$route.next(null)
      _Vue.nextTick(function () {
        $$route.next(route)
      })
    })
  }

  // auto install
  if (typeof Vue !== 'undefined' && typeof Rx !== 'undefined') {
    Vue.use(VueRouteRx, Rx)
  }
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = VueRouteRx
  } else if (typeof define === 'function' && define.amd) {
    define(function () { return VueRouteRx })
  } else if (typeof window !== 'undefined') {
    window.VueRouteRx = VueRouteRx
  }
})()
