import { formatJson } from "./formatJson.js";
import { columns } from "./columns.js";

export function renderTable(json) {
    document.querySelector("#table").innerHTML = `
        <table id="data-table" style="border-collapse: collapse;">
            ${Object.keys(json).filter(key => key != 'Attributes').map(key => `
            
            <tr>
                <td colspan="2" style="background:#969696;">${key}</td>
                <td colspan="4">${json[key]}</td>
            </tr>

            `).join('')}

            <tr style="background:#c1c1c1;">                
                ${columns.map(column => `
                
                <td>${column}</td>
    
                `).join('')}
            </tr>

            ${formatJson(json.Attributes).map(attr => `
            <tr style="background-color: #${attr.bgColor || "FFFFFF"};">
                ${columns.map(column => `
                    
                <td>${(attr[column] != undefined ? attr[column] : '')
                    .toString()
                    .replace('>', '&gt;')
                    .replace('<', '&lt;')}</td>

                `).join('')}
            </tr>
            `).join('')}
        </table>
    `;
}