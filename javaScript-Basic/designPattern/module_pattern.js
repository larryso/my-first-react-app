/**
 * JavaScript module
 * 
 * var myModule = {
 *  var1: "value1", 
 *  var2: "value2",
 * 
 *   method1: function(){},
 * 
 *   method2: function(){}.
 * }
 */

var CounterModule = (function(){
    var count = 0;
    return{
        increment: function(){
            count ++;
        },
        getCount: function(){
            return count;
        }

    };
})();

CounterModule.increment();
CounterModule.increment();
CounterModule.increment();
console.log(CounterModule.getCount());
console.log(CounterModule.count);

