import * as FileSaver from "file-saver"
import XLSX from "sheetjs-style"

const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;sharset=UTF-8";
const fileExtention = ".xlsx"
export const exportToExel = async (fileName, exelData) => {
    const ws = XLSX.utils.json_to_sheet(exelData);
    const wb = { Sheets: { "data": ws }, SheetNames: ["data"] };
    const exelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([exelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtention)
}