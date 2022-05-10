function techList(names, name) {
    if (names.length === 0) {
      return 'Vazio!';
    } else {
      let temp = [];
      let sort = names.sort();
      for (let index = 0; index < sort.length; index += 1) {
        temp.push({
          tech: sort[index],
          name: name
        })
      }
      return temp;
    }
  }

  module.exports = techList;