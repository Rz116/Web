from flask import Flask, render_template, request

app = Flask(__name__)
@app.route('/', methods = ["GET","POST"])

def main():
    if(request.method == "GET"):
        return render_template("index1.html")
    else:
        mainscreen()
        return render_template("index2.html")
    
@app.route('/info', methods = ["GET","POST"])
def mainscreen():    
    global headings, data
    period = request.form.get("periodsinput")
    
    return render_template('index2.html', periodnumber = int(period))
    
if __name__ == "__main__":
    app.run()
