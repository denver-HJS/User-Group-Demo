'use strict'

import Rx from 'rxjs/Rx'

export var name = "homeController"

export class homeController {
  constructor($log) {
    $log.info("Made it to the Home controller!")
    this.greetingMessage = "HELLO WORLD!"
  }

  alertMsg(message) {
    alert(message)
  }

  printFive() {
    let logNum = (n) => { this.$log.debug(n) }

    Rx.Observable.range(1,5)
      .subscribe(logNum)
  }

}
