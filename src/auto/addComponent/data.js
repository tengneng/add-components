exports.data = process.argv.slice(2).map((item) => {
  return {
    componentsName: item,
  };
});
