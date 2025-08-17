from .utils import load_course, upload_course, load_course_names
from .llm import generate_course
from flask import Blueprint, request, jsonify


database = Blueprint("database", __name__)




@database.route('/load_course')
def route_load_course():
    course_id = request.args["id"]
    difficulty = request.args["difficulty"]
    course = load_course(course_id, difficulty)
    course_data = jsonify(course)
    return course_data

@database.route('/upload_course', methods=['POST'])
def route_upload_course():
    user_prompt = request.get_json()
    course = generate_course(user_prompt)
    diff, course_id = upload_course(course)

    load_data = jsonify({"diff": diff, "id": course_id})

    return load_data

@database.route('/load_course_list')
def route_load_course_list():
    arr = jsonify(load_course_names())
    return arr

