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
    global headings, data, period
    if (request.method == "POST"):           
        period = request.form.get("periodsinput")
        if (period == ""):            
            return render_template("index1.html", periodsinput = "" )
        else:
            check = list(period)
            length = len(check)
            for i in range(0,int(length)):
                check2 = ord(check[i])
                if(check2 < 48 or check2 > 57):
                    return render_template("index1.html", periodsinput = "")
            return render_template('index2.html', periodnumber = int(period))
    else:
        outputscreen()
        return render_template("index3.html")
    
@app.route('/output',methods = ["GET","POST"])
def outputscreeen():
    classes = []
    teachers = []
    rooms = []
    for i in range(0,int(period)):
        course = request.form.get("course" + str(i + 1))
        teacher = request.form.get("teacher" + str(i+1))
        if (len(course) < 1 or len(teacher) < 1):
            return render_template('index2.html', periodnumber = int(period))
        classes.append(course)
        teachers.append(teacher)
    for i in range(0,int(period)):
        room = request.form.get("room" + str(i+1))
        if(len(room) < 3):
            return render_template('index2.html',periodnumber = int(period))
        else:
            char = list(room)
            length = len(char)
            for i in range(0,length):
                check = ord(char[i])
                if(check < 48 or check > 57):
                    return render_template('index2.html',periodnumber = int(period))
            rooms.append(room)
    return render_template('index3.html', course = classes, teachers = teachers, rooms = rooms)

        
if __name__ == "__main__":
    app.run()
