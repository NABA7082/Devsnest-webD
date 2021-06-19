var student={name:"David Rayy",sclass:"VI",rollno:12};
console.log(Object.keys(student));
/*var get_keys=function(student)
{
  let keys=[];
  for(key in student)
  {
    keys.push(key);
  }
  return keys;
}
console.log(get_keys(student));*/
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(student);
delete student.rollno;
console.log(student);

