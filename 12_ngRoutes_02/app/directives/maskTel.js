module.exports = function(){
    return{
        require: "ngModel",
        link: function(scope, element,attributes,ctrl){
            //console.log(scope);
            //console.log(element);
            //console.log(attributes);
            element.bind("keyup",function(){
                var _formatTel = function(value){
                    value = value.replace(/[^0-9]+/g,"");
                    if(value.length > 4 && value.length <= 8){
                        value = value.substring(0,4) + "-" + value.substring(4,8);
                    }else if(value.length > 4){
                        value = value.substring(0,5) + "-" + value.substring(5,9);
                    }
                    return value;
                };
                //console.log(ctrl.$viewValue);
                ctrl.$setViewValue(_formatTel(ctrl.$viewValue));
                ctrl.$render();
            });
            ctrl.$parsers.push(function(value){
                if(value.length > 8){
                    //value = value.replace(/[^0-9]+/g,"");
                    return value;
                }

            });

        }
    };
};