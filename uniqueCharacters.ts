/**
*
* UniqueCharacters using TypeScript
*
*/
class UniqueCharacters{
    findUC(str:string):any {
        {
            var uniql="";
            for (var x=0;x < str.length;x++)
            {
           
            if(uniql.indexOf(str.charAt(x))==-1)
             {
             uniql += str[x];  
             
              }
             }
             return uniql;  
           } 
      }
    
}
let Uc = new UniqueCharacters()
  console.log(Uc.findUC("thequickbrownfoxjumpsoverthelazydog111"));
