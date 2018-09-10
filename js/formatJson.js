export function formatJson(array, level) {

    let returnValue = [];

    array.forEach((element, i) => {
        const e = JSON.parse(JSON.stringify(element));
        const localLevel = (i + 1).toString();
        returnValue.push(e);

        if (e.ValidValues) {
            e.ValidValues = e.ValidValues.map(value => `${value.code}:${value.name}`).join(' \n');
        }

        e['#'] = level ? level + '.' + localLevel : localLevel;

        if (e.Attributes) {
            e.bgColor = "d8d864"
            returnValue = returnValue.concat(formatJson(e.Attributes, localLevel))
        }
    });

    return returnValue;
}