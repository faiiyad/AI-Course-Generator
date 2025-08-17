from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os


load_dotenv(dotenv_path='../.env')

mongo_user = os.getenv("mongodb_user")
mongo_pass = os.getenv("mongodb_pass")

uri = f'mongodb+srv://{mongo_user}:{mongo_pass}@w3s.0uerwtd.mongodb.net/?retryWrites=true&w=majority&appName=W3S'

demo_user = {"username": "cruel", "password": "cruel12", "course_data": {}, "total_attempts": 0,
             "total_success": 0}

dummy_course = [[0 for _ in range(10)] for _ in range(5)]


def connect():
    client = MongoClient(uri, server_api=ServerApi('1'))
    mongo_users = client.Users
    return mongo_users

users = connect()
collection = users["users"]


def upload_user(username, password):
    user = {"username": f'{username}', "password": f'{password}', "course_data": {}, "total_attempts": 0,
            "total_success": 0}
    collection.insert_one(user)
    print('successful')

def check_user(username, password):
    hashed = collection.find_one({"username": username}, {"_id": 0, "password": 1})
    if hashed:
        return hashed['password']
    return False

def update_score_correct(user, course, chapter, quiz):

    exist = (collection.find_one({"username": user}, {"_id": 0, "course_data": 1}))
    if course not in exist["course_data"]:
        collection.update_one({"username": user}, {"$set": {f'course_data.{course}': dummy_course}})

    collection.update_one({"username": user},
                          {"$set": {f'course_data.{course}.{chapter}.{quiz}': 1},
                           "$inc": {'total_success': 1, 'total_attempts': 1}})


def update_score_incorrect(user):
    collection.update_one({"username": user}, {"$inc": {"total_attempts": 1}})

