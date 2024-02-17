let sumbBetweenBiggest = 0;

const leftPart = (height) => {
  let max = 0;
  let maxPos = 0;
  let leftPartArr = [];

  for (let i = 0; i < Math.floor(height.length / 2); i++) {
    if (height[i] > max) {
      max = height[i];
      maxPos = i;
    }
    leftPartArr.push(`${height[i]}-${i}`);
  }
  leftPartArr = leftPartArr.slice(0, maxPos + 1);
  console.log("height", leftPartArr);
  return leftPartArr;
};
const rightPart = (height) => {
  let max = 0;
  let maxPos = 0;
  let rightPartArr = [];
  for (let i = height.length - 1; i >= Math.floor(height.length / 2); i--) {
    if (height[i] > max) {
      max = height[i];
      maxPos = height.length - i;
    }
    rightPartArr.push(`${height[i]}-${i}`);
    console.log("height---->", height[i], i, rightPartArr);
  }
  rightPartArr = rightPartArr.slice(0, maxPos);
  console.log("height before return", rightPartArr);
  return rightPartArr;
};
var maxArea = function (height) {
  console.log("leftPart", leftPart(height), "rightPart", rightPart(height));
  const containerSizes = leftPart(height).concat(rightPart(height));
  console.log("containerSizes", containerSizes);
  let biggestSum = 0;
  let sum = 0;
  let sums = [];
  leftPart(height).forEach((topEl) => {
    rightPart(height).forEach((childEl) => {
      const topElm = topEl.split("-");
      const childElm = childEl.split("-");
      if (topElm[0] > childElm[0]) {
        console.log(
          "top ||||||",
          topElm[0] - (topElm[0] - childElm[0]),
          "bot",
          childElm[1] - topElm[0]
        );
        const sum = (topElm[0] - (topElm[0] - childElm[0])) * (childElm[1] - topElm[1]);
        if (biggestSum < sum) {
          biggestSum = sum;
        }
        // sums.push(sum)
      } else {
        console.log("top-----", topElm[0], "bot", childElm[0]);

        const sum = (childElm[0] - (childElm[0] - topElm[0])) * (childElm[1] - topElm[1]);
        sums.push(sum);
        if (biggestSum < sum) {
          biggestSum = sum;
        }
      }
      console.log("sum-->", sum);
    });
  });
  console.log("sums----->", sums);
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = 0; j < height.length; ++j) {
  //     if (height[i] > height[j]) {
  //       sum = (height[i] - (height[i] - height[j])) * (j - i);
  //       console.log("first if", height[i] - (height[i] - height[j]), j - i);
  //     } else {
  //       sum = (height[j] - (height[j] - height[i])) * (j - i);
  //       console.log("second if", height[j] - (height[j] - height[i]), j - i);
  //     }
  //     console.log("sum==", sum);
  //     if (biggestSum <= sum) {
  //       biggestSum = sum;
  //     }
  //   }
  return biggestSum;
};
// maxArea(height)
//  console.log("sums", biggestSum);
//  return biggestSum;
