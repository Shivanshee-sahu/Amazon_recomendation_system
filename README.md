# 🛍️ Amazon Clone with Recommendation System

Welcome to the **Amazon Clone** project!  
This web application replicates the core functionality and UI of Amazon, with added features like user authentication, product listings, and a personalized **product recommendation system** using **machine learning**.

### 🏠 Home Page
![Home Page](![Screenshot 2025-07-06 180321](https://github.com/user-attachments/assets/4bcf1212-4f54-4265-95a7-ee6dec8c6a72)
)
---

## 🚀 Features

- 🔐 **User Authentication**  
  Register and login using **Firebase Authentication** (Email/Password).

- 📦 **Product Listings**  
  Browse a wide range of products styled to mimic Amazon's UI.

- 🔍 **Smart Product Search**  
  A keyword-based **TF-IDF** recommendation system that returns the top 5 similar products.

- 💾 **MongoDB Integration**  
  Stores user-specific data like saved products, browsing history, and more.

- 🧠 **Machine Learning Powered Search**  
  Uses `TfidfVectorizer` and `cosine_similarity` from scikit-learn to suggest relevant products.

---

## 🔧 Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| Languages   | JavaScript, Python                              |
| Frontend    | React.js, Styled Components                     |
| Backend     | Node.js, Express                                |
| Auth        | Firebase Authentication                         |
| Database    | MongoDB (via Mongoose)                          |
| ML Engine   | Python (pandas, scikit-learn, pickle)           |
| Recommendation | TF-IDF + Cosine Similarity                   |

---

## 🧠 Recommendation System

The Recommendation System in this Amazon Clone allows users to enter a **keyword or phrase** and returns the **top 5 most relevant products** based on textual similarity — mimicking personalized e-commerce search.


### 🔍 Search & Recommendations
(![Screenshot 2025-07-06 180741](https://github.com/user-attachments/assets/b0e18fe7-2643-4609-af8b-6a1092e9db7e)

---

### 🔍 How It Works — Under the Hood

#### 🧩 Textual Fusion
For each product, the following fields are combined into one string:
- `product_name`
- `about_product`
- `category`

This creates a rich textual context for matching.

#### ✍️ Text Vectorization with TF-IDF
- TF-IDF (Term Frequency-Inverse Document Frequency) transforms product descriptions into numerical vectors.
- Common words like "the", "and" are down-weighted to highlight meaningful words.

#### 📐 Similarity Computation
- User input is transformed using the **same TF-IDF vectorizer**.
- Cosine Similarity is calculated between the query vector and all product vectors.
- This captures how "close" products are to the search term, independent of text length.

#### 📈 Ranking and Output
Products are ranked based on similarity scores. The **Top 5** results include:
- 🏷️ Product Name  
- 🔢 Similarity Score  
- 🖼️ Image  
- 💰 Price  
- ⭐ Rating

---

## ⚙️ Technologies Used

| Component           | Technology Used                              |
|--------------------|-----------------------------------------------|
| Text Processing     | `pandas`, `scikit-learn`                      |
| Vectorization       | `TfidfVectorizer` from `sklearn.feature_extraction.text` |
| Similarity Metric   | `cosine_similarity` from `sklearn.metrics.pairwise` |
| Model Persistence   | `pickle`                                     |
| Backend Integration | Python script (can be served via Flask or precomputed at server boot) |

---

## 🧠 Why It's Efficient

- ⚡ **Lightweight & Fast**  
  Models are loaded from `.pkl` files, making inference nearly instant.

- 🧪 **No Training Needed**  
  It’s an **unsupervised** model — no labeled data required.

- 🧵 **Scalable**  
  Can handle **thousands of products** efficiently using optimized matrix operations.

- 🧩 **Plug-and-Play**  
  Just update the CSV and retrain — integration stays the same.

---

## 🌟 Key Features

- ✅ **Keyword-Based Recommendation**  
  Users receive smart product suggestions based on what they type.

- ✅ **Multi-field Context Matching**  
  Searches across product name, category, and description.

- ✅ **Score-Based Sorting**  
  Recommendations are ranked using a confidence (similarity) score.

- ✅ **Easy to Extend**  
  Add more features like brand, specs, or reviews to enhance results.

- ✅ **Language Agnostic**  
  Works for any language supported by the tokenizer (default uses English stop words).

---

##✨ Future Improvements

-Use transformers or sentence embeddings for better NLP-based recommendations.

-Add user history-based collaborative filtering.

-Add cart, payment, and order tracking modules. 
