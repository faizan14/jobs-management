import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { PostsComponent } from "../jobs/posts/posts.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule, MatInput, MatInputModule } from "@angular/material";
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { ShortlistedComponent } from "./shortlisted/shortlisted.component";
import { JobsService } from "./jobs.service";
import { InterviewComponent } from "./interview/interview.component";


@NgModule({
    declarations: [
        PostsComponent,
        ShortlistedComponent,
        InterviewComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatTableDataSource,
        MatFormFieldModule,
        MatInput,
        MatInputModule
    ],
    providers: [JobsService],
    bootstrap: [PostsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
