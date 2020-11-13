from sklearn.mixture import GaussianMixture
from sklearn.isotonic import IsotonicRegression
import numpy as np
X_train = np.loadtxt("./uploads/RegisterTest-5.txt", delimiter=",")
X_test = np.loadtxt("./uploads/test_F.txt", delimiter=",")
X_train = X_train.reshape(50, 25)
X_test = X_test.reshape(1, 25)

# n_components (True:False)
gmm_clf = GaussianMixture(covariance_type='spherical', n_components=2)  # Obtained via grid search
gmm_clf.fit(X_train)
#log_probs_val = gmm_clf.score_samples(X_train)
#isotonic_regressor = IsotonicRegression(out_of_bounds='clip')
#isotonic_regressor.fit(log_probs_val, X_test)  # y_val is for labels 0 - not food 1 - food (validation set)

# Obtaining results on the test set
log_probs_test = gmm_clf.score_samples(X_test)
log_predict_test = gmm_clf.predict(X_test)

#test_probabilities = isotonic_regressor.predict(log_probs_test)
#test_predictions = [1 if prob >= 0.5 else 0 for prob in test_probabilities]

print(log_probs_test)
print(log_predict_test)
#print(test_probabilities)
#print(test_predictions)




