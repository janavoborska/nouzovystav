const mojeKulatiny = dayjs('2021-12-08');
const dnes = dayjs();

if (dnes.isAfter(mojeKulatiny)) {
  console.log('Nestihl jsi to');
} else {
  console.log('Už brzy velka party!');
}
