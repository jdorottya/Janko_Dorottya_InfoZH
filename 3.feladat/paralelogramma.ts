function paralelogramma_T_magassag(magassag: number, oldal: number): number
{
    return(magassag * oldal);
}
console.log(paralelogramma_T_magassag(2,3))

function paralelogramma_T_szog(szog: number, a_oldal: number, b_oldal: number): number
{
    return(Math.sin(szog*Math.PI/180) * a_oldal * b_oldal);
}
console.log(paralelogramma_T_szog(22,3,5))