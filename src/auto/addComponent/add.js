const fs = require("fs");
const { dirname } = require("path");
const path = require("path");
const configData = require("./data");

function mkdirSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return console.log(`创建目录成功-${dirname}`);
    }
  }
}

mkdirSync(`./src/components`);

configData.data.forEach((item) => {
  if (item.componentsName) {
    mkdirSync(`./src/components/${item.componentsName}`);
  }
});

let componentsPage = require("../page/index");
const { config } = require("process");
let indexPage = componentsPage.indexPage;
let indexCss = componentsPage.indexCss;

configData.data.forEach((item) => {
  if (item.componentsName) {
    //创建index.js文件
    let indexPath = `./src/components/${item.componentsName}/index.js`;
    fs.writeFile(indexPath, indexPage(item.componentsName), function (err) {
      if (err) {
        return new Error(err);
      }
      console.log(`创建 ${item.componentsName} 组件 index.js 文件成功`);
    });
    //创建index.css文件
    let indexCssPath = `./src/components/${item.componentsName}/index.css`;
    fs.writeFile(indexCssPath, indexCss(), function (err) {
      if (err) {
        return new Error(err);
      }
      console.log(`创建 ${item.componentsName} 组件 index.css 文件成功`);
    });
  }
});
