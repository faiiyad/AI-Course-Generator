import requests
import json
from flask import Flask, jsonify, request
from flask_cors import CORS
from google import genai
from database import connect, upload_course, load_course_names, load_course


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


# @app.route('/api/getcourse/<prompt>', methods=["POST"])
# def get_course(prompt):
#     return f'You have prompted {prompt}'

response_final = ""

@app.route('/api/getcourse', methods=['POST'])
def get_course():
    user_prompt = request.get_json()
    print(user_prompt["prompt"])

    client = genai.Client()

    response = client.models.generate_content(
        model="gemini-2.5-flash-lite",
        contents=f"""{{
    "instruction": "You are an AI model tasked with creating a comprehensive course based on user input. The output must be a single JSON object strictly following the specified schema without any extra commentary or explanation.",

    "requirements": {{
        "chapters": 5,
        "subtopicsPerChapter": 3,
        "explanationLength": "Each subtopic explanation must be between 100 and 150 words.",
        "examples": "Provide clear and relevant examples (code snippets or conceptual examples) for each subtopic as appropriate.",
        "quiz": {{
            "questionsPerChapter": 10,
            "typeDistribution": "50% multiple-choice questions (MCQs) and 50% one-word answer questions.",
            "answerFormat": "For MCQs, provide an 'options' array and ensure the 'answer' exactly matches one of the options. For one-word questions, omit 'options'."
        }},
        "format": {{
            "jsonSchema": {{
                "courseTitle": "string",
                "difficulty": "string (beginner, intermediate, advanced)",
                "description": "string",
                "chapters": [
                    {{
                        "chapterNumber": "integer (1-5)",
                        "chapterTitle": "string",
                        "subtopics": [
                            {{
                                "subtopicTitle": "string",
                                "explanation": "string",
                                "examples": ["string", "..."]
                            }}
                        ],
                        "chapterSummary": "string",
                        "quiz": [
                            {{
                                "question": "string",
                                "type": "\\"one-word\\" or \\"mcq\\"",
                                "answer": "string",
                                "options": ["string", "..."]  // only for mcq
                            }}
                        ]
                    }}
                ]
            }},
            "keyOrdering": "Maintain the exact key ordering as shown in the schema above for consistency."
        }},
        "constraints": {{
            "noAssumptions": "Do not make up information or infer unstated facts.",
            "noIntroductoryText": "Do not include any introductory, concluding, or explanatory text in the output.",
            "outputOnlyJson": "Output must be valid JSON only."
        }}
    }},
    "userPrompt": "{user_prompt}"
}}"""
    )
    text = response.text.strip()
    if text.startswith("```json"):
        # Remove the markdown wrapping
        text = text[len("```json"):].strip()
        if text.endswith("```"):
            text = text[:-3].strip()
    course = json.loads(text)
    diff, id = upload_course(course)

    load_data = jsonify({"diff": diff, "id": id})

    return load_data


@app.route('/api/loadcoursenames')
def load_course_list():
    arr = jsonify(load_course_names())
    return arr


if __name__ == "__main__":
    app.run(port=8080, debug=True)