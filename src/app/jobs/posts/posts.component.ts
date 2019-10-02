import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { JobsService } from "../jobs.service";
import { PostedJobs } from "../jobs.interface";
import { IdInfoService } from "../id-info.service";
import { listName, company } from "src/app/constants";
import { JobsTemplate } from "src/app/common/jobs";


@Component({
  // tslint:disable-next-line: component-selector
  selector: "job-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["posts.component.scss"]
})

export class PostsComponent extends JobsTemplate<PostedJobs> implements OnInit {
  @Input() searchResult: any;

  constructor(public jobsService: JobsService, public infoService: IdInfoService) {
    super(jobsService);
  }

  ngOnInit() {
    this.helper.setListName(listName.Jobs);
    this.displayedColumns = this.helper.setDisplayColumns(this.helper.getListName());
    this.dataSource = this.helper.setDataSource<PostedJobs>(this.dataSource, this.searchResult);
    this.selectRow(this.helperSelection.getFirstRow());
  }

  selectRow(row: any) {
    const filterObj = this.helperSelection.selectRow(row, company);
    this.infoService.sendInfo({company: filterObj});
  }
}
