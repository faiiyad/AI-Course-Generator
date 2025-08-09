from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os

load_dotenv()


mongo_user = os.getenv("mongodb_user")
mongo_pass = os.getenv("mongodb_pass")


mongourl = f'mongodb+srv://{mongo_user}:{mongo_pass}@w3s.0uerwtd.mongodb.net/?retryWrites=true&w=majority&appName=W3S'


client = MongoClient(mongourl, server_api=ServerApi('1'))


courses = client.Courses