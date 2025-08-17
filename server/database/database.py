from bson import ObjectId
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import os

load_dotenv()


mongo_user = os.getenv("mongodb_user")
mongo_pass = os.getenv("mongodb_pass")


uri = f'mongodb+srv://{mongo_user}:{mongo_pass}@w3s.0uerwtd.mongodb.net/?retryWrites=true&w=majority&appName=W3S'

def connect():
    global client
    global courses
    client = MongoClient(uri, server_api=ServerApi('1'))
    courses = client.Courses

    return client, courses

def upload_course(course):
    collection = courses[course["difficulty"]]
    result = collection.insert_one(course)

    course_name_id = {"courseTitle": course["courseTitle"], "difficulty": course["difficulty"], "id": str(result.inserted_id)}
    course_name = courses["coursename"]
    course_name.insert_one(course_name_id)

    print("success")
    return course["difficulty"], str(result.inserted_id)

def load_course_names():
    course_name = courses["coursename"]
    cursor = course_name.find({}, {"_id": 0})
    return list(cursor)

def load_course(id, difficulty):
    collection = courses[f'{difficulty}']
    cursor = collection.find_one({"_id": ObjectId(id)}, {"_id": 0})
    print("course found")
    print(cursor)
    return cursor