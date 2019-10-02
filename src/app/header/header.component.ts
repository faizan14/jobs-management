import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IdInfoService } from "../jobs/id-info.service";
import { HttpClient } from "@angular/common/http";
import { JobsService } from "../jobs/jobs.service";
import { Helper } from "../helper/helper";
import { listName } from "../constants";


@Component({
  // tslint:disable-next-line: component-selector
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  disabled = true;
  private title: string;
  private open: boolean;
  private close: boolean;
  private sendInfoObj: any;
  private sendInfo: any;
  private helper: Helper<any> = new Helper<any>(this.jobsService);
  constructor(public infoService: IdInfoService, private http: HttpClient, public jobsService: JobsService) {
  }

  ngOnInit() {
    this.setDefault();
    this.helper.setListName(listName.Jobs);
  }

  search() {
    this.sendInfo = undefined;
    this.sendInfoObj = {
      open: this.open ? "open" : undefined,
      close: this.close ? "closed" : undefined,
      title: this.title.length ? this.title : undefined
    };
    this.helper.constructQueryParam(this.sendInfoObj);
    this.helper.jobsService
      .getObjects(`${this.helper.getListName()}?${this.helper.getQueryParam()}`)
      .subscribe(data => {
        this.sendInfo = data;
      });
    // this.setDefault();
    this.disabled = true;
  }

  clear() {
    this.setDefault();
    this.disabled = false;
    this.sendInfo = undefined;
  }

  private setDefault() {
    this.open = false;
    this.close = false;
    this.title = "";
  }

}
