import { makeAutoObservable } from 'mobx';

const high_boundary = 21
const low_boundary = 1

class LevelCounter {
  count = 9;
  variation = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.variation = this.count < high_boundary ? 1 : 0;
    this.count += this.variation;
  }

  decrease() {
    this.variation = this.count > low_boundary ? -1 : 0;
    this.count += this.variation;
  }

  set(n) {
    this.count = n
  }
}

export default LevelCounter;