from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from .utils import sign_up, login, score
from .database_functions import get_user_data


user = Blueprint("user", __name__)


@user.route("/sign_up", methods=['POST'])
def route_sign_up():
    data = request.get_json()
    response = jsonify(sign_up(data['username'], data['pass']))

    return response

@user.route('/login', methods=['POST'])
def route_login():
    data = request.get_json()
    response = jsonify(login(data['username'], data['pass']))

    return response

@user.route('/score', methods=['POST'])
@jwt_required()
def route_score():
    data = request.get_json()
    user = get_jwt_identity()
    response = score(data, user)
    return response


@user.route('/get_user_data', methods=['POST'])
@jwt_required()
def route_get_user_data():
    username = get_jwt_identity()
    print(username)
    data = jsonify(get_user_data(username))

    return data