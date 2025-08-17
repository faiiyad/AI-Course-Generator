from flask import Flask
from flask_cors import CORS
from database.database import database
from user.user import user
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os

load_dotenv()
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")


app = Flask(__name__)
app.register_blueprint(database, url_prefix='/database')
app.register_blueprint(user, url_prefix='/user')
cors = CORS(app, origins='*')
jwt = JWTManager(app)

app.config["JWT_SECRET_KEY"] = JWT_SECRET_KEY

@app.route('/')
def index():
    return 'Hello World'


if __name__ == "__main__":
    app.run(port=8080, debug=True)