import { json } from "./json.js";
import { renderTable } from "./renderTable.js";
import { generateXLSX } from "./generateXLSX.js";

document.querySelector("#generate-xlsx")
    .addEventListener("click", () => generateXLSX(json));

renderTable(json);