import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarkSheetAngular';
 /* sName = "";
  candCode = "";
  sem = "";
  colgName = "";
  sub1name = "";
  sub1markob = "";
  sub1totmark = "";

  sub2name = "";
  sub2markob = "";
  sub2totmark = "";

  sub3name = "";
  sub3markob = "";
  sub3totmark = "";

  sub4name = "";
  sub4markob = "";
  sub4totmark = "";

  get_grade = (mark) => {
    let grade = "";
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

  get_status = (m1,m2,m3,m4) => {
    let stat = "";
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

  onSubmit = (form:NgForm) =>{
    this.sName = form.value.candname;
    this.candCode = form.value.cand_code;
    this.sem = form.value.semester;
    this.colgName = form.value.college_name;

    this.sub1name = form.value.sub1_name;
    this.sub1markob = form.value.sub1_mark;
    this.sub1totmark = form.value.sub1_tot_mark;

    this.sub2name = form.value.sub2_name;
    this.sub2markob = form.value.sub2_mark;
    this.sub2totmark = form.value.sub2_tot_mark;

    this.sub3name = form.value.sub3_name;
    this.sub3markob = form.value.sub3_mark;
    this.sub3totmark = form.value.sub3_tot_mark;

    this.sub4name = form.value.sub4_name;
    this.sub4markob = form.value.sub4_mark;
    this.sub4totmark = form.value.sub4_tot_mark;

  }*/
}
