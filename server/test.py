from google import  genai
import os
from dotenv import load_dotenv
load_dotenv()
client = genai.Client()


user_prompt = "yo hook me up with an intermediate course on SQL"

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
        "outputOnlyJson": "Output must be valid JSON only. DO NOT INCLUDE MARKDOWN TAGS IN YOUR RESPONSE"
    }}
}},
"userPrompt": "{user_prompt}"
}}"""
)

print(response.text)
cd = response.text