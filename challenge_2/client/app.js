// var jsonFileToCSV = function (obj) {
  // var result = '';
  // console.log(obj)
  // var objKeys = Object.keys(obj);
  // objKeys.pop();
  // var keyStr = objKeys.join(',')
  // KeyStr += '\n';
  // result += objKeyStr;

  // var str1 = '';
  // var childFunc = function (obj) {
  //   for (var key in obj) {
  //     if (key !== 'children') {
  //       str1 += `${obj[key]},`
  //     } else {
  //       str1 = str1.substring(0, str1.length - 1);
  //       str1 += '\n';
  //       obj[key].forEach(child => childFunc(child));
  //     }
  //   }
  // }
  // childFunc(obj);
  // result += str1;
  // return result;
// }

var json = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
    {
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": []
    }
    ]
};
// console.log(json)

var jsonToCsv = function (obj) {
  console.log(obj)
  var resultKey = [];
  var result = []
  for (var key in obj) {
    resultKey.push(key)
    result.push(obj[key])
    // console.log("children =>",obj.children.length)
  }
  //iterate children array
  if (obj.children.length > 1) {
    var child = obj.children
    for ( var i = 0; i < child.length;i++) {
      for (var key in child[i]){
        result.push(child[i][key])
      }
    }
  }
return resultKey.join(',');
}

console.log(jsonToCsv(json))

