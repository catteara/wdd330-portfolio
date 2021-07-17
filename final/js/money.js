function money() {
    event.preventDefault();
    var options = ["copper", "silver", "gold", "platinium"];
    var numbers = ["1001", "501", "101", "11"];
    let i = 0;
    while ( i <= options.length) {
        if (document.getElementById(options[i]).checked ) {
            document.getElementById(options[i]+'Result').innerHTML = options[i] + ' ' + Math.floor(Math.random() * numbers[i]);
            i++;
        } else {
            document.getElementById(options[i]+'Result').innerHTML = '';
            i++;
        }
  }
};

