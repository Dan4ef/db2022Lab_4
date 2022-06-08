const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@clusterlab4.wmm1q.mongodb.net/?retryWrites=true&w=majority', err => {
    if (!err)
        console.log('Conn succed');
    else
        console.log('Error in dbconnn: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;