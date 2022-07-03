/**
 * Self-adjusting interval to account for drifting
 * 
 * @param {function} workFunc  Callback containing the work to be done
 *                             for each interval
 * @param {int}      interval  Interval speed (in milliseconds)
 * @param {function} errorFunc (Optional) Callback to run if the drift
 *                             exceeds interval
 */
export class AdjustingInterval {
  expected: number = 0;
  timeout: any;
  isCounting = false;

  constructor(private workFunc: () => void, private interval: number, private errorFunc?: () => void) { }

  start() {
    this.expected = Date.now() + this.interval;
    this.isCounting = true;
    this.timeout = setTimeout(this.step.bind(this), this.interval);
  }

  stop() {
    this.isCounting = false;
    clearTimeout(this.timeout);

  }

  step() {
    var drift = Date.now() - this.expected;
    if (drift > this.interval) {
      if (this.errorFunc) this.errorFunc();
    }
    this.workFunc();
    this.expected += this.interval;
    if (this.isCounting) {
      this.timeout = setTimeout(this.step.bind(this), Math.max(0, this.interval - drift));
    }
  }
}