module.exports = function toReadable (number) {
  let arr = String(number).split('');
  let sNumbers = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  let tNumbers = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let thNumbers = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let str = '';
  if(arr.length == 1)
    return sNumbers[arr[0]];
  else if (arr.length == 2) {
    if(arr[0] == 1)
      return tNumbers[arr[1]];
    else {
        if(arr[1] == 0)
          return thNumbers[arr[0]-2];
        else
          return `${thNumbers[arr[0]-2]} ${sNumbers[arr[1]]}`;
    }
  } else {
    if(arr[1] == 0 && arr[2] == 0)
      return `${sNumbers[arr[0]]} hundred`
    if(arr[1] == 1)
  	  return `${sNumbers[arr[0]]} hundred ${tNumbers[arr[2]]}`
    if(arr[1] == 0)
      return `${sNumbers[arr[0]]} hundred ${sNumbers[arr[2]]}`
    if(arr[2] == 0)
      return `${sNumbers[arr[0]]} hundred ${thNumbers[arr[1]-2]}`
    return `${sNumbers[arr[0]]} hundred ${thNumbers[arr[1]-2]} ${sNumbers[arr[2]]}`
  }
}
