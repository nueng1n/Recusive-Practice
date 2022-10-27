'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let object_data = JSON.parse(rawdata);


let new_value_obj = {
    "set_value": "🛵"
}

function set_value(ori_obj, new_value_obj) {

    if (ori_obj instanceof Array) {
        for (var i = 0; i < ori_obj.length; i++) {
            set_value(ori_obj[i], new_value_obj);
        }
    } else {

        for (let key in ori_obj) {

            for (let key_new in new_value_obj) {

                if (ori_obj[key] == key_new) {
                    ori_obj[key] = new_value_obj[key_new]
                } else {

                    if (typeof (ori_obj[key]) == 'string') {
                        let index = ori_obj[key].indexOf(key_new)

                        if (index != -1) {
                            
                            // let newvalue = ori_obj[key].replace(key_new, new_value_obj[key_new])
                            let cat_key = `<<${key_new}>>`
                            let regx = new RegExp(cat_key,"g")
                            let newvalue = ori_obj[key].replace(regx, new_value_obj[key_new]);
                            ori_obj[key] = newvalue
                        }

                    }
                }

            }


            if (ori_obj[key] instanceof Object || ori_obj[key] instanceof Array){
                set_value(ori_obj[key], new_value_obj);
            }
                


        }

    }
}


set_value(object_data,new_value_obj)
console.log(JSON.stringify(object_data, null, 4));
