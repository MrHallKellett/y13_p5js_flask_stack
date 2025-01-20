from flask import Flask, render_template, make_response
from random import randint

app = Flask(__name__)




@app.route("/")
def index():
    return render_template("example.html")




@app.route("/api/get_number")
def get_number():
    return make_response({"number":str(randint(11111, 99999))}, 200)









if __name__ == "__main__":


    app.run()