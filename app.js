module.exports = {
    sayHello: function () {
        return 'hello';
    },
    addNumbers: function(value1, value2) {
        return value1 + value2;
    },
    add: function(input) {
       
          if(input==='')
            return 0;
        
        if(input.length===1)
            return parseInt(input);
        
        const numbers = input.split(/[\n,]+/);        
        let result = 0;

        numbers.forEach(element => {
            result += parseInt(element)
        });

        return result;
    }

}