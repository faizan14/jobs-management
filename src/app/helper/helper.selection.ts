import { SelectionModel } from "@angular/cdk/collections";
import { HelperSelectionInterface } from "./helper.selection.interface";
import { MatTableDataSource } from "@angular/material";

export class HelperSelection<T> implements HelperSelectionInterface<T> {
    constructor(public dataSource: MatTableDataSource<T>, public selectionModel: SelectionModel<T>) { }

    isAllSelected() {
        const numSelected = this.selectionModel.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selectionModel.clear() :
            this.dataSource.data.forEach(row => this.selectionModel.select(row));
    }
    onCheckboxSelect(prop: any, row?: T): string {
        if (!row) {
            return `${this.isAllSelected() ? "select" : "deselect"} all`;
        }
        return `${this.selectionModel.isSelected(row) ? "deselect" : "select"} row ${prop + 1}`;
    }

    selectRow(row: any, prop: any) {
        if (this.selectionModel.isSelected(row)) {
            this.selectionModel.toggle(row);
        } else {
            this.selectionModel.clear();
            this.selectionModel.select(row);
        }
        const [obj] = this.selectionModel.selected;
        return this.selectionModel.isSelected(row) ? obj[prop] : {};
    }

    getFirstRow() {
        const [firstRow] = this.dataSource.data.filter((value, index) => index === 0);
        return firstRow;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    getRowColor(row: any): string {
        return this.selectionModel.isSelected(row) ? "bg-grey" : "";
    }
}