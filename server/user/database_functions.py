from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
from database.utils import load_course_names
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

def get_course_map():
    course_list = load_course_names()
    course_map = {}
    for course in course_list:
        course_map[course["id"]] = course["courseTitle"]
    return course_map

def get_user_data(user):
    user_data = collection.find_one({"username": f'{user}'}, {"_id": 0, "password": 0})
    course_data = user_data["course_data"]
    course_map = get_course_map()
    course_mapped = [
                        {
                            "courseTitle": course_map[x],
                            "data": [
                                {
                                    "chapter": i + 1,
                                    "correct": sum(course_data[x][i])
                                }
                                for i in range(5)
                            ]
                        }
                        for x in course_data
                    ]
    return {"username": user_data["username"],
            "totalStats": {"attempted": user_data["total_attempts"], "correct": user_data["total_success"]},
            "courseMapped": course_mapped}



