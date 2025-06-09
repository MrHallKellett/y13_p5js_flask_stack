
from random import randint

app = Flask(__name__)
#test
############################################################

@app.route("/")
def index():
    return render_template("example.html")

############################################################

@app.route("/api/get_number")
def get_number():
    '''A Python function mapped to a route running on the server,
    that returns data back to the JavaScript file to be drawn
    on screen using p5.js'''
    return make_response({"number":str(randint(11111, 99999))}, 200)

############################################################

if __name__ == "__main__":
    app.run()
    print("Testing!")
    print("Hello")
    print("Hello")
    print("Hello")