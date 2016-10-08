/**
 * Created by Brian on 10/8/16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    var testSchema = mongoose.Schema({
        name: String
    });
    var Test = mongoose.model('test', testSchema);
    var t1 = new Test({name : 'Test 1'});
    t1.save(function(error, t1) {
        if(error)
            return console.error(error);
        console.log('Saved t1');
    });
    Test.find(function(error, testers) {
        if(error)
            return console.error(error);
        console.log(testers);
    })
});