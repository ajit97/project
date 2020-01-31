module.exports.average = (array) =>{
  sum = 0;

  array.forEach(element => {
    sum += element;
  });
  return sum/array.length;
};
module.exports.grades = {
  first : "Ajit ",
  age : 22
}
