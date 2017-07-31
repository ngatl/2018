import 'reflect-metadata';
import 'zone.js/dist/zone-node';

import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const fs = require('fs');
const path = require('path');

const serverPath = '../dist-server/';
const clientPath = '../dist/';
const serverFiles = fs.readdirSync(path.resolve(__dirname, serverPath));
const clientFiles = fs.readdirSync(path.resolve(__dirname, clientPath));

let bundle = '';

for (const i in serverFiles) {
  if (path.extname(serverFiles[i]) === '.js' && path.basename(serverFiles[i]).indexOf('main') !== -1) {
    bundle = serverPath + serverFiles[i];
  }
}

for (const i in clientFiles) {
  if (path.extname(clientFiles[i]) === '.js') {
    fs.createReadStream(path.resolve(__dirname, clientPath, path.basename(clientFiles[i])))
      .pipe(fs.createWriteStream(path.resolve(__dirname, serverPath, path.basename(clientFiles[i]))));
  }
}

const AppServerModuleNgFactory = require(bundle).AppServerModuleNgFactory;

const PORT = 4000;

enableProdMode();

const app = express();

const template = readFileSync(join(__dirname, '..', 'dist', 'index.html'), 'utf8');

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
