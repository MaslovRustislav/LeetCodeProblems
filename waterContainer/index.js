/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * @param {number[]} height
 * @return {number}
 */

let sumbBetweenBiggest = 0;

const leftPart = (height) =>{
    let max = 0;
    let maxPos = 0
      for (let i = 0; i < Math.floor(height.length / 2); i++) {
          if(height[i] > max){
              max = height[i]
              maxPos = i 
          }
      }
      return height.slice(0,maxPos+1)
}
 const rightPart = (height) =>{
    let max = 0;
         let maxPos = 0

      for (let i = height.length ; i > Math.round(height.length / 2); i--) {

          if(height[i] > max){
              max = height[i]
              maxPos =  height.length - i
          }
                     console.log('height',height[i],maxPos,max,i)
      }
      return height.slice(-maxPos )
}
var maxArea = function (height) {
console.log("leftPart", leftPart(height), "rightPart", rightPart(height));
let biggestSum = 0;
let sum = 0;
for (let i = 0; i < height.length; i++) {
  for (let j = 0; j < height.length; ++j) {
    if (height[i] > height[j]) {
      sum = (height[i] - (height[i] - height[j])) * (j - i);
      console.log("first if", height[i] - (height[i] - height[j]), j - i);
    } else {
      sum = (height[j] - (height[j] - height[i])) * (j - i);
      console.log("second if", height[j] - (height[j] - height[i]), j - i);
    }
    console.log("sum==", sum);
    if (biggestSum <= sum) {
      biggestSum = sum;
    }
  }
}

 console.log("sums", biggestSum);
 return biggestSum;
};
