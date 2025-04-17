function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul')

  ul.innerHTML = friends
    .map(friend => `<li>${friend.firstName} ${friend.lastName}</li>`)
    .join('');

  return ul;
  // ___________________________

  // let list = friends
  //   .map(friend => `<li>${friend.firstName} ${friend.lastName}</li>`)
  //   .join('');

  // ul.insertAdjacentHTML('beforeend', list);

  // return ul;
  // ___________________________

  // friends.forEach(friend => {
  //   let li = document.createElement('li');

  //   li.textContent = `${friend.firstName} ${friend.lastName}`;
  //   ul.append(li);
  // });

  // return ul;
}
