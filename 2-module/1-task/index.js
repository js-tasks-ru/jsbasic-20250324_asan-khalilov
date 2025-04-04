function sumSalary(salaries) {
  // ваш код...

  return Object.values(salaries)
    .filter((salary) => typeof (salary) === 'number' && isFinite(salary))
    .reduce((sum, salary) => sum + salary, 0)

  // let result = 0;

  // for (let key in salaries) {
  //   if (typeof salaries[key] === 'number' &&
  //     isFinite(salaries[key])
  //   ) {
  //     result += salaries[key]
  //   }
  // }

  // return result
}
