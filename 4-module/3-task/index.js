function highlight(table) {
  // ваш код...
  const rows = table.querySelector('tbody').rows;

  for (let row of rows) {
    const [name, ageCell, genderCell, statusCell] = row.cells;

    //availalbe/unavailable
    const available = statusCell.dataset.available;
    if (available === 'true') {
      row.classList.add('available');
    } else if (available === 'false') {
      row.classList.add('unavailable');
    } else {
      // Если атрибута нет
      row.hidden = true;
    }

    // gender
    const gender = genderCell.textContent.trim();
    if (gender === 'm') {
      row.classList.add('male');
    } else if (gender === 'f') {
      row.classList.add('female');
    }

    // age
    const age = parseInt(ageCell.textContent, 10);
    if (age < 18) {
      row.style.textDecoration = 'line-through';
    }
  }

  // const rows = table.querySelector('tbody').rows;

  // for (let i = 0; i < rows.length; i++) {
  //   let tr = rows[i];
  //   let statusTd = tr.cells[3];
  //   let genderText = tr.cells[2].textContent;
  //   let ageText = tr.cells[1].textContent;

  //   if (statusTd.hasAttribute('data-available')) {
  //     //availalbe/unavailable
  //     if (statusTd.dataset.available === 'true') {
  //       tr.classList.add('available')
  //     } else {
  //       tr.classList.add('unavailable')
  //     }
  //   } else {
  //     // Если атрибуа нет
  //     tr.hidden = true;
  //   }

  //   //gender
  //   if (genderText === 'm') {
  //     tr.classList.add('male')
  //   } else if (genderText === 'f') {
  //     tr.classList.add('female')
  //   }

  //   //age
  //   let age = parseInt(ageText, 10)
  //   if (age < 18) {
  //     tr.style.textDecoration = 'line-through';
  //   }
  // }
}
