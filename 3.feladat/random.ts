var nev_lista: string[] = ["A","B","C","D","E","F","G","H","I","J"]

function Random(lista: string[]): string[]
{
    var  output: string[] = [];     
    for (let i = 0, n = 3; i < n ; ++i){
        var idx: number = Math.floor(Math.random()*10);
        output = output.concat(lista[idx]);
    }
    return output
}
console.log(Random(nev_lista))