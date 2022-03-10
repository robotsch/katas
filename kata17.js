const urlDecode = function(text) {
  return text.split('&').reduce((acc, currentElement) => {
    const [property, value] = currentElement.split('%20').join(' ').split('=')
    acc[property] = value;
    return acc;
  }, {});
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
