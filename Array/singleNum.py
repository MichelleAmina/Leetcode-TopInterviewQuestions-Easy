def Single(nums):
    nums.sort()
    
    n = len(nums)
    if n == 1:
        return nums[0]
    
    for i in range(0, n, 2):
        if i + 1 == n or nums[i] != nums[i + 1]:
            return nums[i]




print(Single([2,2,1])) # 1
print(Single([4,1,2,1,2])) # 4
print(Single([1])) # 1