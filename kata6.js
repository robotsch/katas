// Recommendation against filter, not a rule, right?
const checkAir = function(samples, threshold) {
  let cleans = samples.filter((sample) => {
    return sample === 'clean';
  }).length;
  let dirties = samples.filter((sample) => {
    return sample === 'dirty';
  }).length;
  
  return (dirties / cleans) > threshold ? 'dirty' : 'clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));
