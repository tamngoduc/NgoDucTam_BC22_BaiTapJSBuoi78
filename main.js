function getEle(id) {
  return document.getElementById(id);
}

var numberList = [];

getEle("btnAddnumber").onclick = function () {
  numberList.push(getEle("txtNumber").value * 1);
  getEle("txtNumber").value = "";
  getEle("footerArray").innerHTML = numberList.join(" ");
};

function sumPositiveNumber(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

getEle("btnSum").onclick = function () {
  var sum = sumPositiveNumber(numberList);
  getEle("footerArray").innerHTML = sum;
};

function countPositiveNumbers(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }
  return count;
}

getEle("btnCount").onclick = function () {
  var count = countPositiveNumbers(numberList);
  getEle("footerArray").innerHTML = count;
};

function findSmallestNumber(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

getEle("btnMin").onclick = function () {
  var min = findSmallestNumber(numberList);
  getEle("footerArray").innerHTML = min;
};

function findSmallestPositiveNumber(arr) {
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > 0 && min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

getEle("btnPositiveMin").onclick = function () {
  var min = findSmallestPositiveNumber(numberList);
  getEle("footerArray").innerHTML = min;
};

getEle("btnChange").onclick = function () {
  var index1 = getEle("txtIndex1").value;
  var index2 = getEle("txtIndex2").value;
  var num1 = numberList[index1];
  var num2 = numberList[index2];
  var tmp = numberList[index1];
  numberList[index1] = numberList[index2];
  numberList[index2] = tmp;
  getEle("footerArray").innerHTML =
    "Giá trị 2 vị trí trước khi thay đổi: " +
    num1 +
    " " +
    num2 +
    "<br>" +
    "Giá trị 2 vị trí sau khi thay đổi: " +
    numberList[index1] +
    " " +
    numberList[index2];
};

function findLastEvenNumber(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
      return arr[i];
    }
  }
  return -1;
}

getEle("btnEven").onclick = function () {
  var num = findLastEvenNumber(numberList);
  var result;
  if (num == -1) {
    result = "Mảng không có số chăn nào";
  } else {
    result = num;
  }
  getEle("footerArray").innerHTML = result;
};

function sortArray(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

getEle("btnSort").onclick = function () {
  var copiedArr = [];
  for (var i = 0; i < numberList.length; i++) {
    arrcopy.push(numberList[i]);
  }
  sortArray(copiedArr);
  getEle("footerArray").innerHTML = copiedArr.join(" ");
};

function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }
  for (var j = 2; j < Math.sqrt(num); j++) {
    if (num % j == 0) {
      return false;
    }
  }
  return true;
}

function findFirstPrimeNumber(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (isPrimeNumber(arr[i]) == true) {
      return arr[i];
    }
  }
  return -1;
}

getEle("btnPrime").onclick = function () {
  var primeNumber = findFirstPrimeNumber(numberList);
  var result;
  if (primeNumber == -1) {
    result = "Mảng không có số nguyên tố";
  } else {
    result = primeNumber;
  }
  getEle("footerArray").innerHTML = result;
};

getEle("btnAddnumber2").onclick = function () {
  numberList.push(getEle("txtNumber2").value * 1);
  getEle("txtNumber2").value = "";
  getEle("footerArray").innerHTML = numberList.join(" ");
};

function checkInt(n) {
  var flag = 1;
  if (Math.ceil(n) != Math.floor(n)) {
    flag = 0;
  }
  return flag;
}

getEle("btnCountInt").onclick = function () {
  var count = 0;
  for (var i = 0; i < numberList.length; i++) {
    if (checkInt(numberList[i]) == 1) {
      count++;
    }
  }
  getEle("footerArray").innerHTML = "Mảng có " + count + " số nguyên";
};

function countNegativeNumbers(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

getEle("btnCompare").onclick = function () {
  var positiveNumber = countPositiveNumbers(numberList);
  var negativeNumber = countNegativeNumbers(numberList);
  var result;
  if (negativeNumber === 0) {
    result = "Mảng không có số âm";
  } else if (positiveNumber === 0) {
    result = "Mảng không có số dương";
  } else if (positiveNumber > negativeNumber) {
    result = "Lượng số dương nhiều hơn lượng số âm";
  } else if (positiveNumber < negativeNumber) {
    result = "Lượng số âm nhiều hơn lượng số dương";
  } else if ((positiveNumber = negativeNumber)) {
    result = "Lượng số dương bằng lượng số âm";
  }
  getEle("footerArray").innerHTML = result;
};
