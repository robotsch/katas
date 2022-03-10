const organizeInstructors = function(instructors) {
  let output = {};
  
  for (let currentCourse of instructors) {
    if (!output.hasOwnProperty(currentCourse.course)) {
      output = {...output, ...{[currentCourse.course]: [currentCourse.name]}};
    } else {
      output[currentCourse.course].push(currentCourse.name);
    }
  }
  return output;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));