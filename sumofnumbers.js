/**
 * Solving Experience E26
 * Created by Xla on 2/5/17.
 */

const testNums = [1, 2, 3, 4];

function sumFor(nums){
  let total = 0;
  for (const num of nums)
    total += num;

  return total;
}
console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNums));
function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  else {
    return nums[0] = sumRecurcion(nums.slice(i, nums.length));
  }
}

console.log(sumRecursion(testNums));

function sumThesimpleWay(nums) {
  _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}

console.log(sumThesimpleWay(testNums));