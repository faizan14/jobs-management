import { MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";
import { Subscription } from "rxjs";
import { Helper } from "../helper/helper";
import { JobsService } from "../jobs/jobs.service";
import { HelperSelection } from "../helper/helper.selection";

export abstract class JobsTemplate<T> {
    displayedColumns: Array<string> = [];
    dataSource = new MatTableDataSource<T>();
    selectionModel = new SelectionModel<T>(true, []);
    subscription: Subscription;
    helper: Helper<T> = new Helper<T>(this.jobsService);
    helperSelection: HelperSelection<T> = new HelperSelection<T>(this.dataSource, this.selectionModel);
    constructor(public jobsService: JobsService) {
    }
}
