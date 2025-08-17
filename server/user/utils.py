from argon2 import PasswordHasher
from flask_jwt_extended import create_access_token
from .database_functions import (upload_user, check_user,
                                 update_score_correct,
                                 update_score_incorrect)

phash = PasswordHasher()







def sign_up(username, password):
    password = phash.hash(password)
    upload_user(username, password)

    access_token = create_access_token(username)
    return  {"response": "ALL GOOD", "token": access_token}


def login(username, password):
    hashed = check_user(username, password)
    verify = phash.verify(hashed, password)

    if verify:
        access_token = create_access_token(username)
        return {"access_token": access_token}
    else:
        return {"result": False}


def score(data, user):
    if not data["correct"]:
        update_score_incorrect(user)
        return "done scoring - incorrect"
    course = data["course"]
    chapter = data["chapter"]
    quiz = data ["quiz"]
    update_score_correct(user, course, chapter, quiz)
    return "done scoring - correct"
