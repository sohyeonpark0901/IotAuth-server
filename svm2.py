from sklearn.svm import OneClassSVM
from sklearn import svm
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import RobustScaler
import numpy as np
import pandas as pd
X_train = np.loadtxt("./uploads/RegisterTest-15.txt", delimiter=",")
labels = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

# labels = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
#          1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
#          1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
#          1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
#          1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
#          1]
X_test = np.loadtxt("./uploads/test_T.txt", delimiter=",")


# def reject_outliers(data, m=200.):
#    d = np.abs(data - np.median(data))
#    mdev = np.median(d)
#    s = d/mdev if mdev else 0.
#    return data[s < m]


#X_train = reject_outliers(X_train)
#X_test = reject_outliers(X_test)
# print(np.mean(X_train))
# print(np.mean(X_test))
#X_train = X_train.reshape(20, 43)
#X_test = X_test.reshape(1, 41)

# print(X_test)


#X_train = np.where(X_train > -5000, X_train, 0)
X_train = X_train.reshape(51, 25)
# print(X_train)
#X_test = np.where(X_test > -5000, X_test, 0)
X_test = X_test.reshape(1, 25)
print(X_test)

#sc = StandardScaler()
#X_train = sc.fit_transform(X_train)
#X_test = sc.transform(X_test)
# print(X_train)
# print(X_test)

print(np.mean(X_train))
print(np.mean(X_test))
# print(X_train)
# print(X_test)

clf = OneClassSVM(kernel='rbf', coef0=0.15, gamma=0.015)
clf.fit(X_train, labels)
y_pred_test = clf.predict(X_test)
print(y_pred_test)
