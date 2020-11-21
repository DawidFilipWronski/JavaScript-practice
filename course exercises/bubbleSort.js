const arr = [23,15,19,200,1];
const sorted = [1,2,5,7,13,18,22];

let i = 0;

const isSort = (arr) => {
    if(arr[a] < arr[a + 1]){
        console.log(`${a} i ${a+1} jest ok`);        
    }
    else{  
        const swap1 = arr[a];
        const swap2 = arr[a+1];
        arr[a]= swap2;
        arr[a+1] = swap1;  
    }    
} 
for(let i = arr.length - 1; i>-0; i--){
    for(let a = 1; a <= i; a++){
        isSort(arr);    
    }
    
}
