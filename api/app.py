import flask
from flask import jsonify, render_template, request, url_for, redirect, session

app = flask.Flask(__name__, template_folder='templates')

@app.route("/prediksi", methods=["GET"])
def prediksi():
    if request.method == "GET":
        return render_template("/pages/prediksi.html")

@app.route("/", methods=["GET"])
def main():
    if request.method == "GET":
        return render_template("main.html", font_url1="https://allfont.net/allfont.css?fonts=agency-fb", font_url2="https://fonts.googleapis.com/icon?family=Material+Icons")

@app.route("/ensiklopadi", methods=["GET"])
def ensiklopadi():
    return(flask.render_template('/pages/ensiklopadi.html'))

@app.route("/ensiklopadi/padi_normal", methods=["GET"])
def normal():
    return(flask.render_template('/pages/normal_paddy.html'))


if __name__ == '__main__':
    app.run(debug=True)