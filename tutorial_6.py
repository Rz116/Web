from flask import Flask, render_template, request

app = Flask(__name__)
@app.route('/', methods = ["GET","POST"])

def main():
    if(request.method == "GET"):
        mainscreen()
        return render_template("index1.html")
    else:
        mainscreen()
        return render_template("index2.html")
    
@app.route('/info', methods = ["GET","POST"])
def mainscreen():   
    global headings, data
    headings = ("Course","Teacher")
    
    course1 = request.form.get('nameinput')
    teacher1 = request.form.get('teacherinput')
    course2 = request.form.get('nameinput2')
    teacher2 = request.form.get('teacherinput2')

    data = (
        (course1, teacher1),
        (course2, teacher2)
        )
    return displayinfo()
def displayinfo():
    return render_template('index2.html', headings = headings, data = data)
    
if __name__ == "__main__":
    app.run()
