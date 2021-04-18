function getFlagValue(flag) {
  const indexflag = process.argv.indexOf(flag) + 1;

  return process.argv[indexflag]
};

module.exports = getFlagValue;
