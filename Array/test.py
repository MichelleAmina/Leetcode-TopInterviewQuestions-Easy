# def to_alternating_case(string):
#     # new_word = [letter.upper() for letter in string if letter.lower()]
#     new_word = ([letter.upper() if letter.islower() else letter.lower() for letter in string])
#     return ''.join(new_word)

#     # return string.swapcase()

#     # strn = ""
#     # for i in string:
#     #     if i.isupper():
#     #         strn += i.lower()
#     #     else:
#     #         strn += i.upper()
#     # return strn

#     # Initialize an empty list to store the result
#     # new_string = []
    
#     # # Iterate over each character in the string
#     # for letter in string:
#     #     # If the letter is lowercase, convert it to uppercase
#     #     if letter.islower():
#     #         new_string.append(letter.upper())
#     #     # If the letter is uppercase, convert it to lowercase
#     #     elif letter.isupper():
#     #         new_string.append(letter.lower())
#     #     # If the letter is neither (e.g., a digit or punctuation), keep it as it is
#     #     else:
#     #         new_string.append(letter)
    
#     # # Join the list into a string and return it
#     # return ''.join(new_string)


# print(to_alternating_case("hello world"))
# print(to_alternating_case("HELLO WORLD"))
# print(to_alternating_case("hello WORLD"))
# # print(to_alternating_case("HeLLo WoRLD"))
# # print(to_alternating_case("1a2b3c4d5e"))


def stray(arr):
    # obj = {}

    # for num in arr:
    #     if num in obj:
    #         obj[num] += 1
    #     else:
    #         obj[num] = 1

    # for key, value in obj.items():
    #     if value ==  1:
    #         return key


    # for num in arr:
    #     if arr.count(num) == 1:
    #         return num

    print(set(arr))
    for x in set(arr):
        print("count",arr.count(x))
        if arr.count(x) == 1: return x


print(stray([1,1,2])) #2
print(stray([17, 17, 3, 17, 17, 17, 17] )) #3