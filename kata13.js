const talkingCalendar = function(date) {
  let d = new Date(Date.parse(date)).toLocaleString("en", {month: "long", day: 'numeric', year: 'numeric'}).split(',');
  
  let num = Number(d[0].charAt(d[0].length - 1));
  switch (num) {
  case 1: d[0] += 'st';
    break;
  case 2: d[0] += 'nd';
    break;
  case 3: d[0] += 'rd';
    break;
  default: d[0] += 'th';
  }
  return d.join();
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
