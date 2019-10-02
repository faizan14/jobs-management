import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { JobsService } from "../jobs.service";
import { Interviews } from "../jobs.interface";
import { IdInfoService } from "../id-info.service";
import { listName } from "src/app/constants";
import { JobsTemplate } from "src/app/common/jobs";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "interview",
  templateUrl: "./interview.component.html",
  styleUrls: ["./interview.component.scss"]
})
export class InterviewComponent extends JobsTemplate<Interviews> implements OnInit, OnDestroy {
  showMessage = true;

  constructor(public jobsService: JobsService, private infoService: IdInfoService) {
    super(jobsService);
    this.helper.setListName(listName.Interview);
    this.displayedColumns = this.helper.setDisplayColumns(this.helper.getListName());
  }

  ngOnInit() {
    this.subscription = this.infoService.getInfo()
      .subscribe(id => {
        this.helper.constructQueryParam({
          candidateId: id
        });
        if (Number.isInteger(id)) {
          this.dataSource = this.helper.getData(this.dataSource);
          this.showMessage = true;
        } else {
          this.showMessage = false;
          this.dataSource.data = [];
        }

      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dataSource.disconnect();
  }
}
