import { columns } from "./columns.js";
import { formatJson } from "./formatJson.js";

export function generateXLSX(json) {
    // Load a new blank workbook
    XlsxPopulate.fromBlankAsync()
        .then(workbook => {

            let currentRow = 1;
            const numColumns = 6;
            const sheet = workbook.sheet(0)
                .name(json.Name);

            Object.keys(json)
                .filter(key => key != 'Attributes')
                .forEach((key, i) => {
                    sheet.range(
                        sheet.row(currentRow).cell(1),
                        sheet.row(currentRow).cell(2)
                    ).merged(true)
                        .value(key)
                        .style("fill", "969696")
                        .style("border", true);

                    sheet.range(
                        sheet.row(currentRow).cell(3),
                        sheet.row(currentRow).cell(6)
                    ).merged(true)
                        .value(json[key])
                        .style("border", true);

                    currentRow++;
                });


            columns.forEach((c, i) => {
                sheet.row(currentRow)
                    .cell(i + 1)
                    .value(c)
                    .style("fill", "c1c1c1")
                    .style("border", true);
            });

            currentRow++;

            formatJson(json.Attributes)
                .forEach((attr, i) => {
                    columns.forEach((col, j) => {
                        const cell = sheet.row(currentRow + i)
                            .cell(j + 1)
                            .value(attr[col])
                            .style("border", true);

                        if (attr.bgColor) cell.style("fill", attr.bgColor);

                    });
                });

            workbook.outputAsync()
                .then(function (blob) {
                    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                        // If IE, you must uses a different method.
                        window.navigator.msSaveOrOpenBlob(blob, `${json.Name}.xlsx`);
                    } else {
                        var url = window.URL.createObjectURL(blob);
                        var a = document.createElement("a");
                        document.body.appendChild(a);
                        a.href = url;
                        a.download = `${json.Name}.xlsx`;
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    }
                });
        });
}