import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MatSliderModule } from "@angular/material/slider";
import { PostsComponent } from "../app/jobs/posts/posts.component";
import { MatTableModule } from "@angular/material/table";
import { ShortlistedComponent } from "../app/jobs/shortlisted/shortlisted.component";
import { InterviewComponent } from "../app/jobs/interview/interview.component";
import { IdInfoService } from "./jobs/id-info.service";

import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatCardModule } from "@angular/material";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ShortlistedComponent,
    InterviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [IdInfoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
