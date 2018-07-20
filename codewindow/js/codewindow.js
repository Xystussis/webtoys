php = {
    reserved: [
        ";(\\s|\\n)",
        "function\\s",
        "foreach\\s",
        "for\\s",
        "else\\s",
        "if\\s",
        "elseif\\s",
        ",",
        "print\\s",
        "public\\s",
        "private\\s",
        "protected\\s",
        "return\\s",
        "new\\s",
        "\\sas\\s",
        "try\\s",
        "catch\\s",
        "finally\\s"
    ],
    variable: [

        "\\$[^-\\s,;\\+\\)\\(]*"
    ],
    string: [
        '\"([^\"]*)?\"',
        "\'([^\']*)?\'",
        "\\/\\*([^\']*)?\\*\\/",

    ],
    number: [

        "([^$a-zA-Z][0-9]+)"
    ],
    func: [
        "[a-zA-Z0-9_\s]*(?=\\()"
    ],
    fin: [
        
    ],
};

document.querySelectorAll(".codewindow").forEach(function(element) {
    // console.log(element.innerHTML.replace(/function\s*.*\(.*\)/g,"<sadsad>$&<sadsd>"));
    php.string.forEach(function(item) {
        console.log(item);
        element.innerHTML = element.innerHTML.replace(new RegExp(item,"g"),"<span class=\"string\">$&</span>");    
     });
     php.number.forEach(function(item) {
        console.log(item);
        element.innerHTML = element.innerHTML.replace(new RegExp(item,"g"),"<span class=\"number\">$&</span>");    
     });
     
    php.variable.forEach(function(item) {
        console.log(item);
        element.innerHTML = element.innerHTML.replace(new RegExp(item,"g"),"<span class=\"variable\">$&</span>");    
     });
     php.reserved.forEach(function(item) {
        element.innerHTML = element.innerHTML.replace(new RegExp(item,"g"),"<span class=\"reserved\">$&</span>");    
    });


    php.func.forEach(function(item) {
        element.innerHTML = element.innerHTML.replace(new RegExp(item,"g"),"<span class=\"function\">$&</span>");    
    });
    php.fin.forEach(function(item) {
        element.innerHTML = element.innerHTML.replace(new RegExp(item,"g"),"<span class=\"reserved\">$&</span>");    
    }); 

},this); 
