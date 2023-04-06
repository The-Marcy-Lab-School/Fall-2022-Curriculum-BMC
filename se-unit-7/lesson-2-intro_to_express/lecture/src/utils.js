/** create an ever incrementing id, starting from 1 the first time it's called */
const generateId = ((id = 3) => () => id += 1)(); // eslint-disable-line

module.exports = {
  generateId,
};
