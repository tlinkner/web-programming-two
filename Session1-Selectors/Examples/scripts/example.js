(function() {
    var example = document.getElementById("example");    
    var code = document.createElement("code");
    code.innerHTML = document.getElementsByTagName("style")[0].innerHTML;
    example.appendChild(code);
})();