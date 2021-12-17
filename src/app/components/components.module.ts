import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SidebarComponent } from "src/app/components/sidebar/sidebar.component";
import { ButtonsRowComponent } from "src/app/components/buttons-row/buttons-row.component";
import { RouterModule } from "@angular/router";

const COMPONENTS = [
  SidebarComponent,
  ButtonsRowComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [ ...COMPONENTS ]
})
export class ComponentsModule { }
