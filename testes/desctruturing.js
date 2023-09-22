const [n1, ,  , n4] = [ 10 , 9 , 8 , 7]
console.log(n1,n4)

const [,[, dia ]] = [[ 4,5],[6,7,8]] //apenas o n° 7 é imprimido
console.log(dia)

const [ded,bis, ,[noite]] = [40 ,50, ,[90,80,70]]
console.log(ded,bis,noite)

const [am,fm, ,jm,cs] = [40.5,80.7, ,[77.8,85.9,84.8]]
console.log(am,fm,jm,cs)