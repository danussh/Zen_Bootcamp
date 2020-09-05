function display(value, cb){
    setTimeout(
        function(){
            document.getElementById("mainDiv").innerText = cb(value)
        }, 1000)
}

display("10 . .", function(value){
    display("9 . .", function(value){
        display("8 . .", function(value){
            display("7 . .", function(value){
                display("6 . .", function(value){
                    display("5 . .", function(value){
                        display("4 . .", function(value){
                            display("3 . .", function(value){
                                display("2 . .", function(value){
                                    display("1 . .", function(value){
                                        display("Welcome to Callback Hell", function(value){
                                            return value
                                        });
                                        return value
                                    });
                                    return value
                                });
                                return value
                            });
                            return value
                        });
                        return value
                    });
                    return value
                });
                return value
            });
            return value
        });
        return value
    });
    return value
});
