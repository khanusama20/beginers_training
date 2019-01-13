var fs = require('fs');
var path = require('path');

let _mFile = path.dirname(__dirname);

console.log(_mFile);

module.exports = {
    ObjectId() {
        let mixcher = '1234567890abcdef';
        var idLength = 24;
        let _id = '';
        for (var x = 0; x < idLength; x++) {
            var i = Math.floor(Math.random() * mixcher.length);
            _id += mixcher.charAt(i);
        }
        return _id;
    },
    generatePassword() {
        var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
        var pass = "";
        var passLength = 10;
        for (var x = 0; x < passLength; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
    },

    /**
     * @function find
     * @param {*} object it contains query
     * @param {*} from it contains collection name
     */

    find(object = {}, from = "") {
        return new Promise((resolve, reject) => {
            fs.readFile(_mFile+'/schema/collections/'+from+'.json', 'utf8', function(err, content) {
                if (err) {
                    // callback(err, content);
                    reject(err);
                } else {
                    let JSONParsed = JSON.parse(content);
                    // console.log('From Function ', JSONParsed);
                    // callback(JSONParsed);
                    resolve(JSONParsed);
                }
            });
        });
    },

    /**
     * @function save
     * @param {*} docs 
     * @param {*} collection 
     * @param {*} callback 
     */

    save(docs, collection) {
        return new Promise((resolve, reject) => {
            var stringifiData = JSON.stringify(docs); 
            fs.writeFile(_mFile+'/collections/'+collection+'.json', stringifiData, function(err) {
                if (!err) {
                    // callback({write: true});
                    resolve({write: true});
                } else {
                    // callback({write: false}, err);
                    reject(err);
                }
            })
        });

        
    }
}