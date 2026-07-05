# Fraud Detection System (My-Paypal)

## Links
- **GitHub:** https://github.com/aditya-singh2005/Fraud-Detection-

## What it is

A machine learning system for detecting fraudulent credit card transactions, built on a real-world PayPal-style dataset of 284,807 transactions with 31 anonymized features (time, amount, and PCA-transformed features).

## Approach

- Data exploration and visualization to understand class imbalance and feature distributions
- **SMOTE** (Synthetic Minority Oversampling Technique) to handle the heavy imbalance between legitimate and fraudulent transactions
- Trained and compared four classifiers: Random Forest, XGBoost, Gradient Boosting, and K-Nearest Neighbors
- Built prediction and decision logic on top of the trained models

## Results

| Model | Accuracy | AUPRC |
|---|---|---|
| **Random Forest** | 99.94% | 87.66% |
| **XGBoost** | 99.94% | 86.70% |

I specifically tracked AUPRC (Area Under the Precision-Recall Curve) rather than relying on accuracy alone, since accuracy is a misleading metric on heavily imbalanced fraud datasets — a model that just predicts "not fraud" every time would already hit ~99.8% accuracy without being useful.

## Tech stack

Python, Scikit-learn, XGBoost, Pandas, NumPy, SMOTE (imbalanced-learn), Jupyter Notebook

## Why this project matters to me

It's a good example of understanding *why* a metric matters, not just chasing the highest number — imbalanced classification problems like fraud detection need precision-recall tradeoffs front and center, not just raw accuracy.
