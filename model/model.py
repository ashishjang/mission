import requests
import pickle
from sklearn.feature_extraction.text import CountVectorizer
from google.cloud import storage
import numpy as np 
from nltk.tokenize import RegexpTokenizer
from nltk.stem.porter import PorterStemmer 
from nltk.corpus import stopwords
import nltk
nltk.download('stopwords')

storage_client = storage.Client()
bucket = storage_client.get_bucket('internship-recommender')
blob = bucket.blob('InternshipRecommender.pkl')
blob.download_to_filename('InternshipRecommender.pkl')
model_pk = pickle.load(open('InternshipRecommender.pkl', 'rb'))
tokenizer = RegexpTokenizer(r'\w+')
en_stopwords = set(stopwords.words('english'))
ps = PorterStemmer()
cv = CountVectorizer(ngram_range = (1,2))

def getCleanedText(text):
  text = text.lower()
  #tokenizer
  tokens = tokenizer.tokenize(text)
  new_tokens = [token for token in tokens if token not in en_stopwords]
  stemmed_tokens = [ps.stem(tokens) for tokens in new_tokens]
  clean_text = ' '.join(stemmed_tokens)
  removed_numbers = "".join([i for i in clean_text if not i.isdigit()])
  return removed_numbers

def api_predict(request):
    if request.method == 'GET':
        return "Please send POST request"
    elif request.method == 'POST':
        data = request.get_json()
        details = data['internship']
        data = np.array([[details]])
        text = getCleanedText(data)
        x_vec = cv.transform([text]).toarray()
        prediction = model_pk.predict(x_vec)
        return str(prediction)
   