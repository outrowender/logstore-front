import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotesComponent } from "./notes/notes.component";
import { SharedModule } from "../shared/shared.module";
import { LayoutModule } from "@angular/cdk/layout";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [NotesComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, LayoutModule]
})
export class HomeModule {}
