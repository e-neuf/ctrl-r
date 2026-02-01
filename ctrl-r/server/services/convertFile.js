const convertapi = require("./convertApiClient");
const LotusFiletypes = require('./LotusFiletypes.js');
const XLSX = require('xlsx');
const fs = require('fs').promises;

async function convertFile(file, currentFiletype, targetFiletype) {

//const currentFiletype = file.filename.split(".").pop();
if (currentFiletype in LotusFiletypes) {
    const workbook = XLSX.read(lotusFile, { type: 'buffer' });
    XLSX.writeFileXLSX(workbook, "LotusXLSX");
    const xlsxFile = fs.readFileSync("LotusXLSX");
    fs.unlink("LotusXLSX");
    file = xlsxFile;
    currentFiletype = "xlsx";
}

//let convertApi = ConvertApi.auth('sLWxDSAaL4XCSIN6Nb4NTVfOQkodGAb4');//put in api token
let params = convertapi.createParams();
params.add('File',file);
let result=await convertapi.convert(currentFiletype,targetFiletype,params);
let url = result.files[0].Url;
console.log(url);

  return {
    url,
  };
}

module.exports = {
  convertFile,
};