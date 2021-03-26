const attrs = [
  "claim"
];

exports.aceAttribClasses = (hookName, attr, cb) => {
  for (const i of attrs) {
    attr[i] = `tag:${i}`;
  }

  cb(attr);
};
