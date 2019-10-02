import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { JobsService } from "../jobs.service";
import { ShortListed } from "../jobs.interface";
import { IdInfoService } from "../id-info.service";
import { listName, id } from "src/app/constants";
import { JobsTemplate } from "src/app/common/jobs";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "shortlisted",
  templateUrl: "./shortlisted.component.html",
  styleUrls: ["./shortlisted.component.scss"]
})
export class ShortlistedComponent extends JobsTemplate<ShortListed> implements OnInit, OnDestroy {

  constructor(public jobsService: JobsService, private infoService: IdInfoService) {
    super(jobsService);
    this.helper.setListName(listName.ShortListed);
    this.displayedColumns = this.helper.setDisplayColumns(this.helper.getListName());
    this.subscription = this.infoService.getInfo()
      .subscribe(data => {
        this.helper.constructQueryParam({
          appliedCompany: data.company
        });
        if (data && data.company) {
          this.dataSource = this.helper.getData(this.dataSource);
        }
      });
  }

  ngOnInit() {
    // this.dataSource = this.helper.getData(this.dataSource);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  selectRow(row: any) {
    const filterObj = this.helperSelection.selectRow(row, id);
    this.infoService.sendInfo(filterObj);
  }
}
