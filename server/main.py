from flask import Flask, jsonify, request
from flask_cors import CORS
from database import connect, upload_course, load_course_names, load_course
from llm import generate_course


connect()
print("connected to db")

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/')
def index():
    return 'Hello World'

@app.route('/api/data')
def data():
    id = request.args["id"]
    print(id)
    difficulty = request.args["difficulty"]
    course = load_course(id, difficulty)
    course_data =  jsonify(course)
    return course_data

response_final = ""

@app.route('/api/getcourse', methods=['POST'])
def get_course():
    user_prompt = request.get_json()
    print(user_prompt["prompt"])
    course = generate_course(user_prompt)
    diff, id = upload_course(course)

    load_data = jsonify({"diff": diff, "id": id})

    return load_data


@app.route('/api/loadcoursenames')
def load_course_list():
    arr = jsonify(load_course_names())
    return arr


if __name__ == "__main__":
    app.run(port=8080, debug=True)