from datetime import datetime
from flask import Flask

app = Flask(__name__)

@app.route("/current_time")
def current_time():
    return datetime.now().isoformat()
