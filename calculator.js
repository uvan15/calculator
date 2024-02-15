let input=document.querySelector('#userInput')
let value=document.querySelector('#valueBox')
let equal=document.querySelector('.equal')
let clear=document.querySelector('.clear')

// function operations(inputValue){
//     let sum=0
//     let sumString=''
//     for(let i=0;i<inputValue.length;i++){
//         if(i==(inputValue.length-1)){
//             sumString+=inputValue[i]
//             sum+=parseInt(sumString)
//         }
//         if(inputValue[i]=='+'||inputValue[i]=='-'||inputValue[i]=='*'||inputValue[i]=='/'){
            
            
//             sum+=parseInt(sumString)
//             //console.log(sum)
//             sumString=""
//         }
//         else{
//             sumString+=inputValue[i]
//             console.log("sunString="+sumString)
//         }
//     }
//     //console.log(sum)
//     return sum
// }

let inputValue=''

function getValue(inputValue){
    //console.log(inputValue)
    input.value=inputValue
    // if(input.value==undefined){
    //     value.value=""
    // }
    // else
    value.value=eval(inputValue)
}
let buttons=document.querySelectorAll('button')

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(e){
        if(buttons[i].value=='='){
            getValue(inputValue)
        }
        else{
            inputValue+=buttons[i].value
            input.value+=buttons[i].value
        }
        if(buttons[i].value==='C'){
            input.value=""
            value.value=""
            inputValue=""
        }
    })
}
value.addEventListener('keydown',function(e){
    // if(e.key=='='){
    //     eval(inputValue)
    //     value.value=inputValue
    // }
    // else if(e.key.charCodeAt()>=42&&e.key.charCodeAt()<=57){
        
    //     inputValue+=e.key
    //     input.value=inputValue
    // }
    // else{
    //     alert('enter only numbers')
    // }
    
    // console.log(e.key.charCodeAt())
    //console.log(e.key.charCodeAt())
    // inputValue+=value.value

    // input.value=value.value
    // inputValue=value.value
    // console.log(inputValue)
    
    //console.log(value.value)

    // if(e.key=='Enter'&&e.key=='='){
    //     // input.value=inputValue
    //     value.value=eval(value.value)
    // }

    // if(value.value==undefined){
    //     value.value=''
    // }


    // if(e.key.charCodeAt()>=65&&e.key.charCodeAt()<=127){
    //     // inputValue=eval(value.value)
    //     if(e.key.charCodeAt()==83){
    //         input.value=value.value
    //     }
    //     else if(e.key.charCodeAt()==69||e.key.charCodeAt()==61){
    //         value.value=eval(value.value)
    //     }
    //     else{
    //         alert('Enter only numbers and operations')
    //         input.value=""
    //         value.value=""
    //     }
    //     //console.log(e.key.charCodeAt())
        
    // }
    if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" ){
        input.value += e.key
        inputValue=input.value
    }else if(e.key==="Enter"){
        value.value=eval(input.value)
    }

})