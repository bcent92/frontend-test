const express = require('express');
const path = require('path');
const compression = require('compression');
const angularCore = require('@angular/core');

const app = express();

app.use(compression());
angularCore.enableProdMode();

app.use(express.static('/app/dist/frontend-test'));
app.get('/', function (req, res) {
	res.sendFile(path.join('/app/dist/frontend-test/index.html'));
});

app.listen(process.env.PORT || 8080);