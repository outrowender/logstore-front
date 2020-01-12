import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotesComponent } from "./notes/notes.component";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { NoteService } from "./notes/note.service";
import { LayoutModule } from "../layout.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [NotesComponent, DashboardComponent, UserComponent],
  imports: [CommonModule, HomeRoutingModule, LayoutModule, SharedModule],
  providers: [NoteService]
})
export class HomeModule {}
