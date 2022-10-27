'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let array_json_data = JSON.parse(rawdata);
let ori_array_json_data = JSON.parse(JSON.stringify(array_json_data));

// console.log(ori_array_json_data);

let complete_found = []
function findDistributions(ori_array_obj, array_obj, new_) {

    if (Object.keys(new_).length != 0) {
        
        new_['detail']['distributions'] = []
        for (let obj of ori_array_obj) {
            if (new_['detail']['distribution_key'] == obj['detail']['fork_form']) {
                
                let obj_ = JSON.parse(JSON.stringify(obj));
                let result = findDistributions(ori_array_obj, array_obj, obj_)
                new_['detail']['distributions'].push(result)
               

            }

        }
        
        return new_
        

    } else {
        for (let obj of array_obj) {
            let obj_ = JSON.parse(JSON.stringify(obj));
            let result = findDistributions(ori_array_obj, array_obj, obj_)
            

            complete_found.push(result)
        }

        
    }

}

findDistributions(ori_array_json_data, array_json_data, {})
console.log(JSON.stringify(complete_found, null, 4));