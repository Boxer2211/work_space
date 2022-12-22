const conversionRules = {
                        "params":{
                            "m":[
                                {"m":1},
                                {"cm":100},
                                {"in":39.37},
                                {"ft":3.281}
                            ],
                            "cm":[
                                {"m":0.01},
                                {"cm":1},
                                {"in":0.394},
                                {"ft":0.033}],
                            "in":[
                                {"m":0.025},
                                {"cm":2.54},
                                {"in":1},
                                {"ft":0.083}
                            ],
                            "ft":[
                                {"m":0.305},
                                {"cm":30.48},
                                {"in":12},
                                {"ft":1}
                            ]    
                        }
                    }

const select = document.querySelector('#main__select');
const convertTo = document.querySelector('#convert__select');
const input = document.querySelector('#main__input'); 


function getValue() {
    const value = select.value;
    const valueTo = convertTo.value;
    const valueInput = input.value;
    let objIn = {"distance": {"unit": "", "value": 0}, "convert_to": ""}
    let result = 0;
    let objResult = {"unit": "", "value":0}

    function todo(){
        objIn.distance.unit = value;
        objIn.distance.value = valueInput;
        objIn.convert_to = valueTo;
        console.log(objIn); // вхідні параметри

        objResult.unit = valueTo;
        objResult.value = result;
        console.log(objResult); // вихідні дані

        document.getElementById('resultP').innerHTML = 'Result = ' + result;
    }

    if (value == "m" && valueTo == "m") {
        
        result = (valueInput * conversionRules.params.m[0].m).toFixed(2);
        todo()
        
    } else if (value == "m" && valueTo == "cm"){
      
        result = (valueInput * conversionRules.params.m[1].cm).toFixed(2);
        todo()
    
    } else if (value == "m" && valueTo == "in"){
     
        result = (valueInput * conversionRules.params.m[2].in).toFixed(2);
        todo()
   
    } else if (value == "m" && valueTo == "ft"){
        
        result = (valueInput * conversionRules.params.m[3].ft).toFixed(2);
        todo()
    
    } else if (value == "cm" && valueTo == "m"){
                
        result = (valueInput * conversionRules.params.cm[0].m).toFixed(2);
        todo()
    
    }else if (value == "cm" && valueTo == "cm"){
       
        result = (valueInput * conversionRules.params.cm[1].cm).toFixed(2);
        todo()

    }else if (value == "cm" && valueTo == "in"){
        
        result = (valueInput * conversionRules.params.cm[2].in).toFixed(2);
        todo()

    }else if (value == "cm" && valueTo == "ft"){
        
        
        result = (valueInput * conversionRules.params.cm[3].ft).toFixed(2);
        todo()

    }else if (value == "in" && valueTo == "m"){
       
        result = (valueInput * conversionRules.params.in[0].m).toFixed(2);
        todo()

    }else if (value == "in" && valueTo == "cm"){
        
        result = (valueInput * conversionRules.params.in[1].cm).toFixed(2);
        todo()

    }else if (value == "in" && valueTo == "in"){
        
        result = (valueInput * conversionRules.params.in[2].in).toFixed(2);
        todo()
    }else if (value == "in" && valueTo == "ft"){
       
        result = (valueInput * conversionRules.params.in[3].ft).toFixed(2);
        todo()
    }else if (value == "ft" && valueTo == "m"){
        
        result = (valueInput * conversionRules.params.ft[0].m).toFixed(2);
        todo()
    }else if (value == "ft" && valueTo == "cm"){
        
        result = (valueInput * conversionRules.params.ft[1].cm).toFixed(2);
        todo()
    }else if (value == "ft" && valueTo == "in"){
       
        result = (valueInput * conversionRules.params.ft[2].in).toFixed(2);
        todo()
    }else if (value == "ft" && valueTo == "ft"){
       
        result = (valueInput * conversionRules.params.ft[3].ft).toFixed(2);
        todo()
    }
}

//________________________________________________________________



// select.addEventListener("change", function() {
//     const selectChange = document.querySelector('#main__select');
//     console.log(selectChange.value)
//   });

