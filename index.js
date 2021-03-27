const mojeKulatiny = dayjs('2021-12-08');
const dnes = dayjs();

if (dnes.isAfter(mojeKulatiny)) {
  console.log('Nestihl jsi to');
} else {
  console.log('Už brzy velka party!');
}

if (dnes.isAfter(mojeKulatiny)) {
  let pEl = document.querySelector('p');
  pEl.innerHTML = 'Nestihl jsi to';
} else {
  let pEl = document.querySelector('p');
  pEl.innerHTML = 'Už brzy velka party!';
}
