# Plastic Classification using UV-IR-Visible Spectroscopy

## Links
- **GitHub:** https://github.com/aditya-singh2005/Plastic-Classification---Machine-Learning-

## What it is

A machine learning system for automated plastic polymer classification using spectroscopic data — identifying six different plastic types (HDPE, LDPE, PET, PP, PS, PVC) from their spectral "fingerprints."

## Why it matters

Proper plastic sorting is crucial for effective recycling and reducing environmental pollution. Manual sorting is slow, expensive, and error-prone — this project explores how ML can automate that at scale.

## Approach

1. **Data preprocessing** — loaded FTIR (Fourier Transform Infrared Spectroscopy) data spanning a wavelength range of 399–4001 wavenumbers, split 80/20 train-test, and standardized features with StandardScaler.
2. **Modeling** — trained two models to compare approaches:
   - **Support Vector Machine (RBF kernel)** — effective in high-dimensional spectral space, robust to outliers
   - **Random Forest Classifier** — ensemble of decision trees, better feature-importance interpretability

## Results

| Model | Accuracy | Avg Precision | Avg Recall |
|---|---|---|---|
| SVM | 92.44% | 0.92 | 0.92 |
| **Random Forest** | **93.89%** ⭐ | 0.94 | 0.94 |

Random Forest won overall, with standout precision on PET (98%) and PP (97%). SVM trained faster but had slightly lower accuracy.

## Tech stack

Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn

## Applications

Automated sorting in recycling facilities, quality control in plastic manufacturing, environmental pollution monitoring, and supply chain material authentication.
