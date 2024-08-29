

define(['./square/square', './square/cube/cube'], function(square, cube1, cube2) { 
    return { 
        add: function(a, b){ return square.sq(a) + cube.cu(b); } 
    };
    
})