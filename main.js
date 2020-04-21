var browser = document.querySelector('body');

var volume = navigator.volumeManager;
//Taken from Mozilla docs :)
function canMoveBwd() {

      if(window.confirm('exit Browser?')) {
        window.close();
      }
      else {

      }
    }
	
	function zoomInWidth()
   {
   var body = document.querySelector("body");
                var currWidth = body.clientWidth;
                if(currWidth == 1000000){
                    alert("Maximum zoom-in level of 1 Million reached.");
                } else{
                    body.style.width = (currWidth + 50) + "px";
                } 
  }

function zoomOutWidth()
 {
  var body = document.querySelector("body");
                var currWidth = body.clientWidth;
                if(currWidth == 500000){
                    alert("Maximum zoom-out level reached.");
                } else{
                    body.style.width = (currWidth - 50) + "px";
                }
 }
	
	function zoomInHeight()
   {
   var body = document.querySelector("body");
                var currWidth = body.clientHeight;
                if(currWidth == 1000000){
                    alert("Maximum zoom-in level of 1 Million reached.");
                } else{
                    body.style.height = (currWidth + 50) + "px";
                } 
  }

function zoomOutHeight()
 {
  var body = document.querySelector("body");
                var currWidth = body.clientHeight;
                if(currWidth == 500000){
                    alert("Maximum zoom-out level reached.");
                } else{
                    body.style.height = (currWidth - 50) + "px";
                }
 }

//Taken from KaiOS Tech docs and Stackoverflow :)
function handleKeyDown(evt) {
    switch (evt.key) {
         case 'SoftLeft':
         volume.requestDown()
         break;
		 
        case 'SoftRight':
                volume.requestUp()
        break;
		
		case '7':
	     zoomInHeight();
	     break;
		 
		 case '9':
	     zoomOutHeight();
	      break;
		  
		  case '4':
	     zoomInWidth();
	     break;
		 
		 case '6':
	     zoomOutWidth();
	      break;
	    
        case 'Backspace':
            evt.preventDefault();

            canMoveBwd();
        break;
        case '1':
            evt.preventDefault();
Views.MainView();
        break;
        case '2':
        models.CurrentUser.init();
        
       
        break;

    };
};

document.addEventListener('keydown', handleKeyDown);