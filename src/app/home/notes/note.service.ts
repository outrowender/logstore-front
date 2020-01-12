import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class NoteService {
  constructor(private _http: HttpClient) {}

  private server = environment.api;

  index() {
    return this._http.get<any[]>(`${this.server}/notes`).toPromise();
  }

  destroy(id: number) {
    return this._http.delete(`${this.server}/notes/${id}`).toPromise();
  }
}
