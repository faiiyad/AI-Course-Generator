from bson import ObjectId
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os


load_dotenv(dotenv_path='../.env')

mongo_user = os.getenv("mongodb_user")
mongo_pass = os.getenv("mongodb_pass")

uri = f'mongodb+srv://{mongo_user}:{mongo_pass}@w3s.0uerwtd.mongodb.net/?retryWrites=true&w=majority&appName=W3S'


def connect():
    client = MongoClient(uri, server_api=ServerApi('1'))
    mongo_courses = client.Courses
    return mongo_courses

courses = connect()

def load_course(object_id, difficulty):
    collection = courses[f'{difficulty}']
    cursor = collection.find_one({"_id": ObjectId(object_id)}, {"_id": 0})
    return cursor


def upload_course(course):
    collection = courses[course["difficulty"]]
    result = collection.insert_one(course)

    course_name_id = {"courseTitle": course["courseTitle"],
                      "difficulty": course["difficulty"],
                      "id": str(result.inserted_id)}
    course_name = courses["coursename"]
    course_name.insert_one(course_name_id)

    print("success")
    return course["difficulty"], str(result.inserted_id)

def load_course_names():
    course_name = courses["coursename"]
    cursor = course_name.find({}, {"_id": 0})
    return list(cursor)