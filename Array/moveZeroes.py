def move_zeroes(nums):
    # Pointer to the position of the last non-zero found
    last_non_zero = 0

    # Move all non-zero elements to the front of the array
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[last_non_zero] = nums[i]
            last_non_zero += 1

    # Fill the remaining positions with zeros
    for i in range(last_non_zero, len(nums)):
        nums[i] = 0

# Example usage
nums1 = [0, 1, 0, 3, 12]
move_zeroes(nums1)
print(nums1)  # Output: [1, 3, 12, 0, 0]

nums2 = [0]
move_zeroes(nums2)
print(nums2)  # Output: [0]