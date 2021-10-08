import os

dirName = "../fwdskullements3/"
ext = ".png"

i = 0
for file in os.listdir(dirName):
	i+=1
	name = str(os.path.splitext(file)[0]) + "#" + str(i) + ext
	# print(name)
	os.rename(dirName + file, name)