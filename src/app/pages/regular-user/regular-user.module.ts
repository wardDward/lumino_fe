import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { regularUserRoutes } from "./route";


@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(regularUserRoutes)]
})

export class RegularUserModule {}