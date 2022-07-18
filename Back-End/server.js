const app = require('./index');

app.listen(8000,() => {
 
    console.log(`Listening to requests on http://localhost:${8000}`);
});