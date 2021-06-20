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

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
var size=Object.keys(student).length;
console.log(size);

var lib=
[ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games',
  readingStatus: false }]; 
  for(let i=0;i<lib.length;i++)
  {
    var book=" "+lib[i].title+" "+'by'+" "+lib[i].author+"."
    if(lib[i].readingStatus===true)
    {
      console.log("Already read"+book);
    }
    else{
      console.log("You still need to read"+book);
    }
  }
  






