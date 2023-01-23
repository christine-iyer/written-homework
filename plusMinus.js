// round 6 decimals
const arr = [-2,-1,0,3,7]
function calculateFrequency (arr){
     let length = arr.length
     let arrMinus = []
     let arrZero = []
     let arrPlus = []

     for(i=0; i<arr.length;i++){
          if(arr[i]<0){
               arrMinus=arr.shift()
               console.log(arrMinus)
               
          } if(arr[i]==0){
               arrZero=arr.shift()
               console.log(arrZero)
          } else{
               arrPlus=arr.shift()
               console.log(arrPlus)
          }
          console.log(arrMinus)
          console.log(arrZero)
          console.log(arrPlus)
          //console.log(arrZero)
          //console.log(arrPlus)
          

     }
     
          console.log(arrZero)
          console.log(arrPlus)

}




