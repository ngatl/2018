import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const fs = require('fs');
const path = require('path');
const distPath = '../dist-server/';
const files = fs.readdirSync(path.resolve(__dirname, distPath));

let bundle = '';
for (const i in files) {
  if (path.extname(files[i]) === '.js') {
    bundle = distPath + files[i];
  }
}

const AppServerModuleNgFactory = require(bundle).AppServerModuleNgFactory;

const PORT = 4000;

enableProdMode();

const app = express();

const template = readFileSync(join(__dirname, '..', 'src', 'index.html'), 'utf8');

app.engine('html', (_, options, callback) => {
  const opts = {document: template, url: options.req.url};

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, '..', 'dist-server')));

app.get('*', (req, res) => {
  res.render('index', {req});
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
