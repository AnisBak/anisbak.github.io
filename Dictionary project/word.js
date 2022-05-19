var wordModule = function (word) {

    var promise = new Promise(function (resolve, reject) {
        var mysql = require('mysql');
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "password",
            database: "entries"
        });
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            con.query("SELECT wordtype, definition FROM entries WHERE word='" + word + "'", function (err, result, fields) {
                if (err) {
                    reject(err);
                }
                else
                    resolve(result);
            });
        });
    });
    return promise;

};
exports.wordDesciption = wordModule;


