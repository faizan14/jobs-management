export interface HelperSelectionInterface<T> {
    isAllSelected();
    masterToggle();
    onCheckboxSelect(prop: any, row?: T): string;
    selectRow(row: any, prop: any);
    getFirstRow();
    applyFilter(filterValue: string);
    getRowColor(row: any): string;
}
