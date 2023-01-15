# Sanjeet
import random
print("Game depends on You! So choose the difficulty Level (1,2,3)  \n")
x = int(input("Enter Level (1,2,3) : "))
if (x == 1):
    a = 10
elif x == 2:
    a = 50
elif x == 3:
    a = 100
else:
    print("you selected something else. so its easy level \n")
    a = 10

count = 1
num = random.randint(1, a)
print(num)
inp = int(input("guess the number : "))
while (num != inp):

    count = count + 1

    if (inp > num):
        print("Low value plz! \n")

    else:
        print("high value plz! \n")

    inp = int(input("guess the number : "))

print("Right ! \n")
print("u guessed answer in : ", count)
