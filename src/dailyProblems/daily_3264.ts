export function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    let elementIndex = 0
    while(k>0){
    elementIndex = nums.indexOf(Math.min(...nums))
    nums[elementIndex]= nums[elementIndex]*multiplier
    k--
    }
    return nums
};