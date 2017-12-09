import { Component, OnInit } from "@angular/core";
import { Day } from "app/day-list/day.model";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-day-list",
  templateUrl: "./day-list.component.html",
  styleUrls: ["./day-list.component.css"]
})
export class DayListComponent implements OnInit {
  days: Day[];

  constructor(public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.days = [];
    this.days.push(new Day("Poniedziałek", "Mo"));
    this.days.push(new Day("Wtorek", "Di"));
    this.days.push(new Day("Środa", "Mi"));
    this.days.push(new Day("Czwartek", "Do"));
    this.days.push(new Day("Piątek", "Fr"));
  }

  get comment(): string {
    if (this.days.some(d => d.workDescription.length > 0)) {
      let comment = "";
      this.days.forEach(d => {
        if (d.workDescription) {
          comment += "[" + d.germanAbr + "]" + " " + d.workDescription + " ";
        }
      });
      return comment.trim();
    } else {
      return "";
    }
  }

  copyToClipboard(elem) {
    elem.select();
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "Skopiowano" : "Ooops... Wystąpił błąd.";
      this.openSnackBar(msg);
    } catch (err) {
      this.openSnackBar("Oops, poważny błąd");
    }
  }

  openSnackBar(message) {
    this.snackBar.open(message, "Ok", {
      duration: 2000
    });
  }
}
