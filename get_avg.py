from sklearn.svm import OneClassSVM
import json
import sys,os
f = open("./uploads/RegisterTest.txt", 'r')
data = f.read()
f.close()
lines = data.split('\n')
# X=lines[0]
# X=X.split(',')
result = []

for j in range(20):
    list = []
    X = lines[j]
    X = X.split(',')
    for i in range(len(X)):
        list.append(float(X[i]))
    result.append(list)
#print(result)
f1 = open("./uploads/test.txt", 'r')
test=[]
while True:
    line=f1.readline()
    if not line: break
    list1 = []
    X1=line
    X1=X1.split(',')
    for i in range(len(X1)):
        list1.append(float(X1[i]))
    test.append(list1)    
        

clf = OneClassSVM(gamma=0.015)
clf.fit(result)
pred_test=clf.predict(test)
print(pred_test)
sys.stdout.flush()
#print("predict:",pred_test)
#pred_test = json.loads(sys.argv[1])['pred_test']
#print(json.dumps(pred_test))

