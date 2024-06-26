def Duplicate(nums):
    new_arr = set(nums)
    return len(new_arr) != len(nums)


print(Duplicate([1,2,3,1]))
print(Duplicate([1,2,3,4]))