/*question-1*/


/*question-4*/
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(` ${item} ( ${mf} times ) `) ;

/*question-2*/
q1=[1,2,4,0];
console.log(q1.map(x=>x));
q2=[1,2,[4,0]];
p=q2.slice(0,5);
console.log(p);
