var counter=0;

function setNumber(card){
    var number=card.value
    var current_number=document.getElementById('panel').innerHTML;
    document.getElementById('panel').innerHTML=number;
    
    if(counter>0){
        document.getElementById('panel').innerHTML=current_number+`${number}`
    }
    counter++;
}

var operation_counter=0;
var first_number=0;
var res=0;
var next_number;
var last_number;

function doOperation(card){
    var operation=card.value;
    if(operation_counter==0){
        first_number=document.getElementById('panel').innerHTML;
    }

    operation_counter++;
    if(operation=='-'){

        current_operation=operation;
        if(operation_counter>1){
            next_number=document.getElementById('panel').innerHTML;
            res=parseInt(first_number)-parseInt(next_number);
            document.getElementById('panel').innerHTML=res;
            first_number=res;
            last_number=next_number
        }
        counter=0;

    }else if(operation=='+'){

        current_operation=operation;
        if(operation_counter>1){
            var next_number=document.getElementById('panel').innerHTML;
            res=parseInt(first_number)+parseInt(next_number);
            document.getElementById('panel').innerHTML=res;
            first_number=res;
            last_number=next_number
        }
        counter=0;
       
    }else if(operation=='*'){
        current_operation=operation;
        if(operation_counter>1){
            next_number=document.getElementById('panel').innerHTML;
            res=parseInt(first_number)*parseInt(next_number);
            document.getElementById('panel').innerHTML=res;
            first_number=res;
            last_number=next_number
        }
        counter=0;

    }else if(operation=='/'){
        current_operation=operation;
        if(operation_counter>1){
            next_number=document.getElementById('panel').innerHTML;
            res=parseInt(first_number)/parseInt(next_number);
            document.getElementById('panel').innerHTML=res;
            first_number=res;
            last_number=next_number
        }
        counter=0;

    }else{
        if(operation_counter<3){
            last_number=document.getElementById('panel').innerHTML;
            console.log(last_number)
        }


        if(current_operation=='+'){
            res=parseInt(first_number)+parseInt(last_number);
            document.getElementById('panel').innerHTML=res
            counter=0;

        }else if(current_operation=='*'){
            console.log('-')
            next_number=document.getElementById('panel').innerHTML;
            res=parseInt(first_number)*parseInt(last_number);
            document.getElementById('panel').innerHTML=res
            counter=0;

        }else if(current_operation=='/'){
            console.log('-')
            next_number=document.getElementById('panel').innerHTML;
            res=parseInt(first_number)/parseInt(last_number);
            document.getElementById('panel').innerHTML=res
            counter=0;

        }else if(current_operation=='-'){
            console.log('-')
            next_number=document.getElementById('panel').innerHTML;
            res=parseInt(first_number)-parseInt(last_number);
            document.getElementById('panel').innerHTML=res
            counter=0;
        }
    }
}

function clearPanel(){
    document.getElementById('panel').innerHTML=0;
    counter=0;
    operation_counter=0;
}