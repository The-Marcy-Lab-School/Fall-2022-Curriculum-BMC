const { generateId } = require('./utils');

class Fellow {
  static #all = [
    {
      id: 1,
      name: 'ben',
    },
    {
      id: 2,
      name: 'motun',
    },
    {
      id: 3,
      name: 'carmen',
    },
  ];

  constructor(name) {
    this.id = generateId();
    this.name = name;

    Fellow.#all.push(this);
  }

  static list() {
    return Fellow.#all;
  }

  static find(fellowId) {
    return Fellow.#all.find(({ id }) => id === fellowId);
  }

  static editName(id, newName) {
    const fellow = Fellow.find(id);
    if (!fellow) return null;
    fellow.name = newName;
    return fellow;
  }

  static delete(fellowId) {
    const fellowIdx = Fellow.#all.findIndex(({ id }) => id === fellowId);
    if (fellowIdx < 0) return null;

    Fellow.#all.splice(fellowIdx, 1);
    return true;
  }

  static deleteAll() {
    if (!Fellow.#all.length) return null;

    Fellow.#all.length = 0;
    return Fellow.#all;
  }
}

module.exports = Fellow;