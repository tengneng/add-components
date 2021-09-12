exports.indexPage = function (componentsName) {
  return `import React from 'react';
import './index.css';
const ${componentsName} = () => {
    return <div></div>
}
export default ${componentsName};
    `;
};

exports.indexCss = function () {
  return `.body{}`;
};
