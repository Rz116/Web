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
    global period, osis, grade, name
    if (request.method == "POST"):           
        period = request.form.get("periodsinput")
        osis = request.form.get('osisinput')
        grade = request.form.get('gradelevel')
        name = request.form.get('fullname')
        if (period == "" or osis == "" or len(osis) > 9 or len(osis) < 9 or grade == "" or name == ""):            
            return render_template("index1.html", periodsinput = "", message = "You must type something in the input box and the osis must be 9 digits")
        else:
            check = list(period)
            checkgrade = list(grade)
            checkosis = list(osis)
            length = len(check)
            for i in range(0,int(length)):
                check2 = ord(check[i])
                checkgrade2 = ord(checkgrade[i])
                checkosis2 = ord(checkosis[i])
                print(checkgrade2,checkosis2)
                if(int(check2) < 48 or int(check2) > 57 or int(checkgrade2) < 48 or int(checkgrade2) > 57 or int(checkosis2) < 48 or int(checkosis2) > 57):
                    return render_template("index1.html", periodsinput = "", message = "You must type in a correct input(Period, Grade and Osis must all be numbers!)")
            if(int(period) > 9):
                return render_template("index1.html",periodsinput  = "", message = "You must type in a correct input(Period cannot be Greater than 9)")
            else:               
                return render_template('index2.html', periodnumber = int(period))
    else:
        outputscreen()
        return render_template("index3.html")
    
@app.route('/output',methods = ["GET","POST"])
def outputscreeen():
    headings = ["Period","Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]
    classes = []
    teachers = []
    rooms = []
    for i in range(0,int(period)):
        course = request.form.get("course" + str(i + 1))
        teacher = request.form.get("teacher" + str(i+1))
        if (course == "" or teacher == ""):
            return render_template('index2.html', periodnumber = int(period), check = "You must type something in the input box")
        classes.append(course)
        teachers.append(teacher)
    for i in range(0,int(period)):
        room = request.form.get("room" + str(i+1))
        if(len(room) < 3 or len(room) > 3):
            return render_template('index2.html',periodnumber = int(period),check = "You must type in a room number that is 3 digits long")
        else:
            char = list(room)
            length = len(char)
            for i in range(0,length):
                check = ord(char[i])
                if(check < 48 or check > 57):
                    return render_template('index2.html',periodnumber = int(period), check = "You must type in a number that is 3 digits long")
            rooms.append(room)
    
    length = len(rooms)
    return render_template('index3.html', course = classes, teachers = teachers, rooms = rooms,length = length,headings = headings, osis = osis, grade = grade, name = name)
        
if __name__ == "__main__":
    app.run()
