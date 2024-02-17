const leftPart = (height) => {
  let max = 0;
  let maxPos = 0;
  let leftPartArr = [];

  for (let i = 0; i < height.length; i++) {
    if (height[i] > max) {
      max = height[i];
      maxPos = i;
    }
    leftPartArr.push([height[i], i]);
  }
  leftPartArr = leftPartArr.slice(0, maxPos + 1);
  return leftPartArr;
};
const rightPart = (height) => {
  let max = 0;
  let maxPos = 0;
  let rightPartArr = [];
  for (let i = height.length - 1; i >= 0; i--) {
    if (height[i] > max) {
      max = height[i];
      maxPos = height.length - i;
    }
    rightPartArr.push([height[i], i]);
  }
  rightPartArr = rightPartArr.slice(0, maxPos);
  return rightPartArr;
};
var maxArea = function (height) {
  let rightPartArr = rightPart(height);
  let leftPartArr = leftPart(height);
  //   let topElmFirst,topElmSecond,childElmFirst,childElmSecond;
  let biggestSum = 0;
  let sum = 0;
  leftPartArr.forEach((leftEl) => {
    rightPartArr.forEach((rightEl) => {
      //    topElmFirst = topEl[0]
      //    topElmSecond = topEl[1]
      //    childElmFirst = childEl[0]
      //    childElmSecond = childEl[1]
      if (leftEl[0] > rightEl[0]) {
        sum = (leftEl[0] - (leftEl[0] - rightEl[0])) * (rightEl[1] - leftEl[1]);
      } else {
        sum = (rightEl[0] - (rightEl[0] - leftEl[0])) * (rightEl[1] - leftEl[1]);
      }
      if (biggestSum < sum) {
        biggestSum = sum;
      }
    });
  });

  return biggestSum;
};
