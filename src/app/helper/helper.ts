import { JobsService } from "../jobs/jobs.service";
import { keysObject, displayedColumn } from "../constants";
import { MatTableDataSource } from "@angular/material";

export class Helper<T> {

    private properties: any = {
        listName: "",
        queryParam: "",
        displayedColumns: []
    };

    constructor(public jobsService: JobsService) { }

    public constructQueryParam(obj: any) {
        this.properties.queryParam = Object
            .keys(obj)
            .filter(key => obj[key] !== undefined)
            .map(key => key === "title" ? `${keysObject[key]}_like=${obj[key]}` : `${keysObject[key] ? keysObject[key] : key}=${obj[key]}`)
            .join("&");
    }

    public setDataSource<T>(dataSource: MatTableDataSource<T>, data: Array<any>): MatTableDataSource<T> {
        dataSource.data = data.map(innerData => innerData);
        return dataSource;
    }

    public setListName(listName: string) {
        this.properties.listName = listName;
    }
    public getListName() {
        return this.properties.listName;
    }
    public setQueryParam(listName: string) {
        this.properties.listName = listName;
    }
    public getQueryParam() {
        return this.properties.queryParam;
    }
    public setDisplayColumns(listName: string): Array<string> {
        this.properties.displayedColumns = displayedColumn[listName];
        return this.getDisplayColumns();
    }
    public getDisplayColumns() {
        return this.properties.displayedColumns;
    }

    public getData(dataSource: MatTableDataSource<T>) {
        this.jobsService
            .getObjects(`${this.getListName()}?${this.getQueryParam()}`)
            .subscribe(data => {
                dataSource = this.setDataSource<T>(dataSource, data);
                return dataSource;
            });
        return dataSource;
    }
}
