const instructorWithLongestName = function(instructors) {
  let length = 0;
  let tmp;
  for (let i of instructors) {
    if (i.name.length > length) {
      length = i.name.length;
      tmp = i;
    }
  }
  return tmp;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));