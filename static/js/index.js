const attrs = [
  "claim"
];

exports.aceRegisterBlockElements = () => attrs;

exports.aceAttribsToClasses = (hook, context) => {
  if (attrs.indexOf(context.key) !== -1) {
    return [context.key];
  }
};

exports.aceAttribClasses = (hookName, attr) => {
  $.each(attrs, (k, v) => {
    attr[v] = `tag:${v}`;
  });

  return attr;
};
