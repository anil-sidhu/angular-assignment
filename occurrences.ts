/**
*
* Occurrences using TypeScript
*
*/
class Occurrences {
    getOcc(str1: string):any {
        {var uchars = {};
        str1.replace(/\S/g, function(l):any{uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
        return uchars;
        }
    }
}
let occ = new Occurrences()
console.log(occ.getOcc("thequickbrownfoxjumpsoverthelazydog111111"));
