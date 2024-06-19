def TwoSum(nums, target):

    num_map = {}

    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i

    return []


print(TwoSum([2,7,11,15], 9)) # [0,1]