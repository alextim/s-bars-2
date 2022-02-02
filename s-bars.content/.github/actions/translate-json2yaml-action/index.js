const fs = require('fs');
const path = require('path');

const FILE_NAME = 'translations';

const dstFolder = path.join(__dirname, '..', '..', '..', 'data', 'locales', 'translations');
const srcFolder = path.join(dstFolder, 'src');

const sanitize = (key, value) => {
  if (!value) {
    return value;
  }
  if (!value.startsWith('{') && !value.includes(':')) {
    return value;
  }
  if (!value.includes("'")) {
    return `'${value}'`;
  }
  if (!value.includes('"')) {
    return `"${value}"`;
  }
  throw new Error(`Could't sanitize value="${value}" on key="${key}"`);
};


const createYaml = (locale) => {
  const srcFileName = path.join(srcFolder, `${FILE_NAME}.${locale}.json`);
  console.log(`Reading file ${srcFileName}`);
  fs.readFile(srcFileName, 'utf8', (errRead, data) => {
    if (errRead) {
      throw errRead;
    }
    console.log('Transforming...');
    const oTranslation = JSON.parse(data);

    const aTranslation = [];

    const object2Array = (o, parentKey) => {
      const keys = Object.keys(o);
      keys.forEach((key) => {
        if (typeof o[key] === 'object') {
          object2Array(o[key], parentKey ? `${parentKey}.${key}` : key);
        } else {
          aTranslation.push({
            key: parentKey ? `${parentKey}.${key}` : key,
            value: o[key],
          });
        }
      });
    };

    object2Array(oTranslation, '');

    const yaml = aTranslation.reduce(
      (acc, item) => `${acc}- key: ${item.key}\n  value: ${sanitize(item.key, item.value)}\n`,
      '',
    );

    const dstFileName = path.join(dstFolder, `${FILE_NAME}.${locale}.yaml`);
    fs.writeFile(dstFileName, yaml, (errWrite) => {
      if (errWrite) {
        throw errWrite;
      }
      console.log(`The file ${dstFileName} has been saved!`);
    });
  });
};



console.log('Translation started...')

fs.readdir(srcFolder, (err, files) => {
  if (err) {
    return console.error(err);
  }
  files.forEach((file) => {
    const [fileName, locale, ext] = file.split('.');
    if (ext === 'json' && fileName === FILE_NAME) {
      createYaml(locale);
    }
  });  
});
