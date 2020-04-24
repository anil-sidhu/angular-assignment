/**
*
* AbsoluteDiff using TypeScript
*
*/

class AbsoluteDiff {
    diff(x:number):number {
        if (x <= 21) {
          return (21 - x);
          }
        else
          {
           return (x - 21) * 3;
          }
      } 
}
let Ad = new AbsoluteDiff()
  console.log(Ad.diff(10));
  console.log(Ad.diff(2));
  console.log(Ad.diff(30));