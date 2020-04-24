/**
*
* Fibonacci using TypeScript
*
*/

class Fibonacci{

    getFib (n:number):any
    {
      if (n===1) 
      {
        return [0, 1];
      } 
      else 
      {
        var s = this.getFib(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
      }
    };
    
}
let Fi = new Fibonacci()


  console.log(Fi.getFib(8));
