from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity


with open('tfidf_vectorizer.pkl', 'rb') as f:
    tfidf = pickle.load(f)

with open('tfidf_matrix.pkl', 'rb') as f:
    tfidf_matrix = pickle.load(f)

with open('products_df.pkl', 'rb') as f:
    df = pickle.load(f)


app = Flask(__name__)
CORS(app)  


def get_recommendations(query, top_n=5):
    query_vec = tfidf.transform([query])
    sim_scores = cosine_similarity(query_vec, tfidf_matrix).flatten()
    top_indices = sim_scores.argsort()[-top_n:][::-1]

    recommendations = []
    for idx in top_indices:
        recommendations.append({
            'title': df.iloc[idx]['product_name'],
            'image_url': df.iloc[idx]['img_link'],
            'similarity': round(sim_scores[idx], 3),
            'price': df.iloc[idx]['discounted_price'],
            'rating': df.iloc[idx]['rating']
        })
    return recommendations

# Route to get recommendations based on keyword query
@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    query = data.get('query')
    
    if not query:
        return jsonify({'error': 'Query is required'}), 400

    recommendations = get_recommendations(query)
    return jsonify(recommendations)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
