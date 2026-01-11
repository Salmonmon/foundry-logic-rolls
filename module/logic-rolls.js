
Math.eq = (a, b) => (a === b ? 1 : 0);
Math.ne = (a, b) => (a !== b ? 1 : 0);
Math.not = (a) => (a ? 0 : 1);
Math.gt = (a, b) => (a > b ? 1 : 0);
Math.gte = (a, b) => (a >= b ? 1 : 0);
Math.lt = (a, b) => (a < b ? 1 : 0);
Math.lte = (a, b) => (a <= b ? 1 : 0);
Math.and = (...args) => (args.every(a => a) ? 1 : 0);
Math.or = (...args) => (args.some(a => a) ? 1 : 0);
Math.pick = (cond, then, otherwise) => (cond ? (then === undefined ? 1 : then) : (otherwise === undefined ? 0 : otherwise));
Math.unless = (cond, then, otherwise) => (!cond ? (then === undefined ? 1 : then) : (otherwise === undefined ? 0 : otherwise));
Math.ranges = function() {
  roll = arguments[0]
  for (let i = 1; i < arguments.length; i += 3) {
    if (roll >= arguments[i] && roll <= arguments[i+1])
      {return(arguments[i+2])};
  }
}
