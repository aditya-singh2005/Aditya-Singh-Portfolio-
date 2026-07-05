# Bengaluru Traffic AI Prediction (Flipkart Gridlock Hackathon 2.0)

## Links
- **GitHub:** https://github.com/aditya-singh2005/Flipkart-Gridlock-2.0-Bengaluru-Traffic-AI-Prediction

## What it is

Built for Flipkart Gridlock Hackathon 2.0, organized in collaboration with the Bengaluru Traffic Police (ASTraM) and MapMyIndia, with a ₹5,00,000 prize pool and a finale at Flipkart HQ, Bengaluru. The theme was AI for smart urban mobility.

## What I built

A LightGBM regression pipeline trained on real Bengaluru traffic data (77,299 training samples, 13 features) to help tackle one of Bengaluru's biggest urban challenges: traffic congestion.

### Approach
- Data cleaning and preprocessing on real traffic data from the Bengaluru Traffic Police and MapMyIndia
- 5-Fold Group K-Fold cross-validation (to avoid data leakage across groups)
- Early stopping, with optimal boosting iterations landing between ~117–302 rounds
- Out-of-fold (OOF) evaluation for robust generalization

## Results

- **Final / Verified OOF R²:** 0.916
- **Public leaderboard score:** 89.66
- Fold-wise R² ranged from ~0.910 to ~0.921 — strong consistency across folds and a close match between CV and leaderboard performance, meaning the model generalized well rather than overfitting to validation folds.

## Tech stack

Python, LightGBM, Pandas, NumPy, Scikit-learn, Jupyter Notebook

## Why I'm proud of this one

It's a clean example of doing the unglamorous stuff right — proper cross-validation strategy, early stopping, and OOF evaluation — rather than just throwing a model at the data. The fact that CV performance matched the leaderboard score closely tells me the validation setup was trustworthy, not just lucky.
