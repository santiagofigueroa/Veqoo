// Data to be returned.
var resData = Array(50);
// Set
async function setup(){
    var data = [];
    var result = [];
    var flag = false;
 
    console.log(document.readyState);  
      var xhp  = new XMLHttpRequest();
      xhp.responseText = "text";
      
      // Makes sure connection has being stablish
    xhp.onreadystatechange = await function (){
      flag = true;
        if (xhp.readyState === 4 && xhp.status === 200){
          
            console.log("Success");
           if(xhp.responseText){  
            data = JSON.parse(xhp.responseText);
            // 
            console.log(data); 
            data.forEach(function(element) {
                result.push(element);
            });
            console.log(result);
            var strData = JSON.stringify(result);  
            ShowMessage("q1in",strData);
            //console.log(result);
            // Assigning data to  
            resData = result;
            //console.log(resData);
            // Will only be transfer if there is an array with items. 
            if(resData.length > 0 && flag){
             //var strData =  JSON.stringify(data); 
            ressArr =  max(resData); 
            }    
        
          }
        }
      };
      xhp.open('GET','Data/data.json',true);
      xhp.send();
      return  resData; 
  }