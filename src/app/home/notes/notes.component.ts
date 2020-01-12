import { Component, OnInit } from "@angular/core";
import { NoteService } from "./note.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  constructor(private _notes: NoteService) {}

  notes: any[] = [];

  ngOnInit() {
    this._notes
      .index()
      .then(data => (this.notes = data))
      .catch(e => console.warn(e));
  }
}
