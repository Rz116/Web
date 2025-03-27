from flask import Flask, render_template, request
import os.path
from os import path
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
                if(int(check2) < 48 or int(check2) > 57 or int(checkgrade2) < 48 or int(checkgrade2) > 57 or int(checkosis2) < 48 or int(checkosis2) > 57):
                    return render_template("index1.html", periodsinput = "", message = "You must type in a correct input(Period, Grade and Osis must all be numbers!)")
            if(int(period) > 9):
                return render_template("index1.html",periodsinput  = "", message = "You must type in a correct input(Period cannot be Greater than 9)")
            else:
                return render_template('index2.html', periodnumber = int(period))
    else:
        output()
        return render_template('index3.html')
    
@app.route('/output',methods = ["GET","POST"])
def output():
    global filename,fileclasses, fileteachers, filerooms, teachers, classes, rooms,headings
    headings = ["Period","Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]
    classes = []
    teachers = []
    rooms = []
    
    fileDir = os.path.dirname(os.path.realpath("__file__"))
    filename = name + ".doc"
    fileclasses = name + "Classes" + ".doc"
    fileteachers = name + "Teachers" + ".doc"
    filerooms = name + "Rooms" + ".doc"
    
    fileexist = bool(path.exists(filename))
    if fileexist == False:
        adminfile = open(filename, "x")
        adminfile.write(osis + "\n" + grade + "\n" + name)
        adminfile.close()
    else:
        adminfile = open(filename,"w")
        adminfile.write(osis + "\n" + grade + "\n" + name)
        adminfile.close()

    classexist = bool(path.exists(fileclasses))
    if classexist == False:
        classadmin = open(fileclasses, "x")
    else:
        classadmin = open(fileclasses, "w")

    teacherexists = bool(path.exists(fileteachers))
    if teacherexists == False:
        teacheradmin = open(fileteachers, "x")
    else:
        teacheradmin = open(fileteachers, "w")

    roomexists = bool(path.exists(filerooms))
    if roomexists == False:
        roomadmin = open(filerooms, "x")
    else:
        roomadmin = open(filerooms,"w")

    for i in range(0,int(period)):
        course = request.form.get("course" + str(i + 1))
        teacher = request.form.get("teacher" + str(i+1))
        if (course == "" or teacher == ""):
            return render_template('index2.html', periodnumber = int(period), check = "You must type something in the input box")
        classadmin.write(course + "\n")
        teacheradmin.write(teacher + "\n")
        
    classadmin.close()
    teacheradmin.close()
    
    for i in range(0,int(period)):
        room = request.form.get("room" + str(i+1))
        if(len(room) < 3 or len(room) > 3):
            return render_template('index2.html',periodnumber = int(period),check = "You must type in a room number that is 3 digits long")
        else:
            char = list(room)
            lengthcheck = len(char)
            for i in range(0,lengthcheck):
                check = ord(char[i])
                if(check < 48 or check > 57):
                    return render_template('index2.html',periodnumber = int(period), check = "You must type in a number that is 3 digits long")
            roomadmin.write(room + "\n")
    roomadmin.close()
    output()
    length = len(rooms)
    return render_template('index3.html', course = classes, teachers = teachers, rooms = rooms, length = length ,headings = headings, osis = osis, grade = grade, name = name)
    
def output():
    adminclass = open(fileclasses, "r")
    adminclassvalue = adminclass.read().splitlines()
    for i in range(0,len(adminclassvalue)):
        classes.append(adminclassvalue[i].strip())
    adminclass.close()

    adminteacher = open(fileteachers, "r")
    adminteachervalue = adminteacher.read().splitlines()
    for i in range(0,len(adminteachervalue)):
        teachers.append(adminteachervalue[i].strip())
    adminteacher.close()

    adminroom = open(filerooms, "r")
    adminroomvalue = adminroom.read().splitlines()
    for i in range(0,len(adminroomvalue)):
        rooms.append(adminroomvalue[i].strip())
    adminroom.close()
    
if __name__ == "__main__":
    app.run()
