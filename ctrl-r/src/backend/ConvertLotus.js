

const ConvertLotus = (file, targetFiletype) => {
    const XLSX = require('xlsx');
    const fs = require('fs');

    const workbook = XLSX.read(data, { type: 'buffer' });
    XLSX.writeFileXLSX(workbook, "LotusXLSX");
    const file = fs.readFileSync("LotusXLSX");
    fs.unlink("LotusXLSX");
    return ConvertFile(file, "xlsx", targetFiletype);
}

export default ConvertLotus;