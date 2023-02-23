import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar[currentFound][objective]',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {

  @Input("currentFound")
  set currentFound(value: number) {
    this.currentPercentage = this.getAsPercentage(value, this.objective);
    this.currentStage = this.stages.find(e =>
      e.range[0] <= this.currentPercentage && e.range[1] >= this.currentPercentage
    )?.state ?? "error";
  }
  @Input("objective") objective: number = 0;
  @Input('progressBarWidth') progressBarWidth: string = "100px"
  currentPercentage : number = 0;
  currentStage: string = "low";
  stages = [
    {
      range: [0, 30],
      state: "low"
    },
    {
      range: [31, 60],
      state: "medium"
    },
    {
      range: [61, 100],
      state: "found"
    }
  ]

  constructor() { }

  private getAsPercentage(currentFound: number, objective: number): number {
    if (objective < 0 || currentFound > objective) return -1;
    if (objective === 0) return 0;

    return Math.floor((currentFound / objective) * 100);
  }
}
