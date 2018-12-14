function get_grade(mark){
    var grade;
    if(mark >= 95){
        grade = "S";
    }
    else if(mark >= 90){
        grade = "A+";
    }
    else if(mark >= 85){
        grade = "A";
    }
    else if(mark >= 80){
        grade = "B+";
    }
    else if(mark >= 75){
        grade = "B";
    }
    else if(mark >= 70){
        grade = "C+";
    }
    else if(mark >= 65){
        grade = "C";
    }
    else if(mark >= 60){
        grade = "D+";
    }
    else if(mark >= 55){
        grade = "D";
    }
    else if(mark >= 50){
        grade = "E";
    }
    else{
        grade = "F";
    }
    return grade;
}
function get_status(m1,m2,m3,m4){
    var stat;
    if(get_grade(m1) == "F"){
        stat = "FAILED";
        return stat;
    }
    else if(get_grade(m2) == "F"){
        stat = "FAILED";
        return stat;
    }
    else if(get_grade(m3) == "F"){
        stat = "FAILED";
        return stat;
    }
    else if(get_grade(m4) == "F"){
        stat = "FAILED";
        return stat;
    }
    else {
        stat = "PASSED";
        return stat;
    }
}
function show_report(){
    $("input").removeClass("is-invalid");
    var formValid = true;

    var cand_name = document.getElementById("candname").value;
    var cand_code = document.getElementById("cand_code").value;
    var semester = document.getElementById("semester").value;
    var college_name = document.getElementById("college_name").value;

    var sub1name = document.getElementById("sub1_name").value;
    var sub1mark = document.getElementById("sub1_mark").value;
    var sub1tot_mark = document.getElementById("sub1_tot_mark").value;

    var sub2name = document.getElementById("sub2_name").value;
    var sub2mark = document.getElementById("sub2_mark").value;
    var sub2tot_mark = document.getElementById("sub2_tot_mark").value;

    var sub3name = document.getElementById("sub3_name").value;
    var sub3mark = document.getElementById("sub3_mark").value;
    var sub3tot_mark = document.getElementById("sub3_tot_mark").value;

    var sub4name = document.getElementById("sub4_name").value;
    var sub4mark = document.getElementById("sub4_mark").value;
    var sub4tot_mark = document.getElementById("sub4_tot_mark").value;

    if(cand_name == ""){
        document.getElementById("candname").classList.add("is-invalid");
        formValid = false;
    }
    if(cand_code == ""){
        document.getElementById("cand_code").classList.add("is-invalid");
        formValid = false;
    }
    if(sub1tot_mark == ""){
        document.getElementById("sub1_tot_mark").classList.add("is-invalid");
        formValid = false;
    }
    if(sub2tot_mark == ""){
        document.getElementById("sub2_tot_mark").classList.add("is-invalid");
        formValid = false;
    }
    if(sub3tot_mark == ""){
        document.getElementById("sub3_tot_mark").classList.add("is-invalid");
        formValid = false;
    }
    if(sub4tot_mark == ""){
        document.getElementById("sub4_tot_mark").classList.add("is-invalid");
        formValid = false;
    }

    if(formValid == false){
        return false;
    }
    
    document.getElementById("c_name").innerHTML = cand_name;
    document.getElementById("c_code").innerHTML = cand_code;
    document.getElementById("sem").innerHTML = semester;
    document.getElementById("colg_name").innerHTML = college_name;

    $("#markTable tbody").remove();
    var mTable = document.getElementById("markTable");
    var row1 = mTable.insertRow(1);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);

    cell1.innerHTML = sub1name;
    cell2.innerHTML = sub1mark;
    cell3.innerHTML = sub1tot_mark;
    cell4.innerHTML = get_grade(sub1tot_mark);

    var row2 = mTable.insertRow(2);
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    var cell3 = row2.insertCell(2);
    var cell4 = row2.insertCell(3);

    cell1.innerHTML = sub2name;
    cell2.innerHTML = sub2mark;
    cell3.innerHTML = sub2tot_mark;
    cell4.innerHTML = get_grade(sub2tot_mark);

    var row3 = mTable.insertRow(3);
    var cell1 = row3.insertCell(0);
    var cell2 = row3.insertCell(1);
    var cell3 = row3.insertCell(2);
    var cell4 = row3.insertCell(3);

    cell1.innerHTML = sub3name;
    cell2.innerHTML = sub3mark;
    cell3.innerHTML = sub3tot_mark;
    cell4.innerHTML = get_grade(sub3tot_mark);

    var row4 = mTable.insertRow(4);
    var cell1 = row4.insertCell(0);
    var cell2 = row4.insertCell(1);
    var cell3 = row4.insertCell(2);
    var cell4 = row4.insertCell(3);

    cell1.innerHTML = sub4name;
    cell2.innerHTML = sub4mark;
    cell3.innerHTML = sub4tot_mark;
    cell4.innerHTML = get_grade(sub4tot_mark);

    var grade_status = get_status(sub1tot_mark,sub2tot_mark,sub3tot_mark,sub4tot_mark);

    document.getElementById("status").innerHTML = grade_status;
    document.getElementById("mark-report").style.display = "block";
}