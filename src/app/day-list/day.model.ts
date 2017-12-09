export class Day {
  dayName: string;
  germanAbr: string;
  workDescription: string;

  constructor(dayName: string, germanAbr: string) {
    this.dayName = dayName;
    this.germanAbr = germanAbr;
    this.workDescription = "";
  }
}
