//once frontend sends file
import ConvertApi from 'convertapi-js'
var file;//
var conversion;// type to convert into 
var final;// final product to send back

//for 
//intial function is to convert wpd to pdf
//and documents

//additional add ons are :
// add function for converting lotus to pdf
function process_wpd_to_pdf(){
    let convertApi=ConvertApi.auth('api_token');//put in api token
    let params = convertApi.createParams();
    params.add('File',)


}

function process_wpd_to_doc(){

}