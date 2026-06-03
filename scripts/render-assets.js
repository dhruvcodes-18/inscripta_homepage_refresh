'use strict';
const fs = require('fs');
const upath = require('upath');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = upath.resolve(upath.dirname(__filename), '../src/assets');
    const destPath = upath.resolve(upath.dirname(__filename), '../docs/.');
    sh.cp('-R', sourcePath, destPath);

    // Copy hand-crafted CSS files that have no SCSS source
    const cssSourcePath = upath.resolve(upath.dirname(__filename), '../src/css');
    const cssDestPath = upath.resolve(upath.dirname(__filename), '../docs/css');
    sh.mkdir('-p', cssDestPath);
    sh.cp(`${cssSourcePath}/*.css`, cssDestPath);
};
