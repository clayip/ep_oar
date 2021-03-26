const attrs = [
  "claim"
];

exports.collectContentPre = (hook, context) => {
  const tname = context.tname;
  const state = context.state;

  if (attrs.indexOf(tname) !== -1) {
    context.cc.doAttrib(state, tname);
  }
};
