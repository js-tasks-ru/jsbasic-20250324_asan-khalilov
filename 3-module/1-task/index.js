function namify(users) {
  // ваш код...
  // let arr = [];
  // for (let key of users) {
  //   arr.push(key.name)
  // }
  // return arr

  return users.map(user => user.name)
}
