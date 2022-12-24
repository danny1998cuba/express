const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_LOCAL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log('Error ' + err.message);
        } else {
            console.log('DB Connected');
        }
    }
);