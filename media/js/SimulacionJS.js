class parametro{
    constructor(value){
        this.value = value;
    }

    //number ó string
    getType(){
        return typeof(this.value)
    }

    getValue(){
        return this.value
    }

}

class resolver{
    constructor(lst_oper, lst_variable){
        //alert("Iniciando calculo")
        var ret = 0
        var pila = []
        var index = 0
        for(var tipo in lst_oper[0]){
            if(typeof(lst_oper[0][tipo]) == "object")
                if(lst_oper[0][tipo].getType() == 'number'){
                    var value = lst_oper[0][tipo].getValue()
                    pila.push(value)
                    index+=1
                }
                else if (lst_oper[0][tipo].getType() == 'string') {
                    var variable = lst_oper[0][tipo].getValue()
                    var value = parseFloat(this.getValue(variable, lst_variable));
                    pila.push(value)
                    index+=1
                }
            if(typeof(lst_oper[0][tipo]) == "number"){
                var value = lst_oper[0][tipo]
                pila.push(value)
                index+=1
            }
            //Operar
            if(typeof(lst_oper[0][tipo]) == "string"){
                if(index == 2){
                    var v2 = pila.pop()
                    var v1 = pila.pop()
                    switch (lst_oper[0][tipo]){
                        case "+": ret += parseFloat(v1 + v2); break;
                        case "-": ret += parseFloat(v1 - v2); break;
                        case "*": ret += parseFloat(v1 * v2); break;
                        case "/": ret += parseFloat(v1 / v2); break;
                    }
                }
                else if(index == 1){
                    switch (lst_oper[0][tipo]){
                        case "+": ret += parseFloat(pila.pop()); break;
                        case "-": ret -= parseFloat(pila.pop()); break;
                        case "*": ret *= parseFloat(pila.pop()); break;
                        case "/": ret /= parseFloat(pila.pop()); break;
                    }
                }
                index = 0
            }
        }
        this.respuesta = ret;
    }

    getResultado(){
        return this.respuesta;
    }

    getValue(variable, lst_variable){
        for(var nombrevar in lst_variable[0]){
            if(nombrevar == variable){
                return lst_variable[0][variable]
            }
        }
        return null
    }
}




//COMBINATORIA

class combinatoria{
    constructor(){
        this.comb = []
    }

    addCombinatoria(tipo, unidad, probabilidad){
        var comb = this.comb
        var min = 0
        var max = probabilidad/100
        if(comb.length != 0){
            min = comb[comb.length-1].max
            max = max + min
        }
        //alert("min " + min + "  max " + max)

        this.comb.push({
            "tipo": tipo,
            "unidad": unidad,
            "min": min,
            "max": max
        })
    }

    getTipo(value){
        for(var v in this.comb){
            if(value > this.comb[v]["min"] && value <= this.comb[v]["max"] ){
                return this.comb[v]["tipo"]
            }
        }
    }
}