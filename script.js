$(document).ready(function() {
    var todo="";
    var restultado="";
    var valor;
    var todo2;
    
    $(".valores").on("click", function(){
        valor = $(this).attr("value");
        
        if(valor==="+" || valor==="-" || valor==="*" || valor==="/"){
            todo += valor;
            $("input").val(todo);
        }else{
           todo +=valor;
            $("input").val(todo);
        }
        
        
    });
    
    $("#igual").on("click", function(){
        resultado = eval(todo);
        $("input").val(resultado);
        todo = "";
    });
    
    $("#borrar").on("click", function(){
        todo = "";
        $("input").val(todo);
    });
    
    
    
});