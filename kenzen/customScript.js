function toggle(button) { 
            if ( button.getAttribute("value") == 'ON' ){ 
                switch(button.getAttribute("id")){ 
                    case 'scent1': 
                        window.location.href = window.location.origin + '/scent1=ON'; 
                        break; 
                    case 'scent2':                     
                        window.location.href = window.location.origin + '/scent2=ON'; 
                        break; 
                    case 'scent3': 
                        window.location.href = window.location.origin + '/scent3=ON'; 
                        break; 
                    case 'scent4': 
                        window.location.href = window.location.origin + '/scent4=ON'; 
                        break; 
                    case 'scent5': 
                        window.location.href = window.location.origin + '/scent5=ON'; 
                        break; 
                    case 'scent6': 
                        window.location.href = window.location.origin + '/scent6=ON'; 
                        break; 
                    case 'scent7': 
                        window.location.href = window.location.origin + '/scent7=ON'; 
                        break; 
                    case 'scent8': 
                        window.location.href = window.location.origin + '/scent8=ON'; 
                        break;
                    case 'temp1': 
                        window.location.href = window.location.origin + '/temp=1'; 
                        break;
                    case 'temp2': 
                        window.location.href = window.location.origin + '/temp=2'; 
                        break;
                    case 'temp3': 
                        window.location.href = window.location.origin + '/temp=3'; 
                        break;
                }
            } else{
                switch(button.getAttribute("id")){ 
                    case 'scent1': 
                        window.location.href = window.location.origin + '/scent1=OFF';
                        break; 
                    case 'scent2': 
                        window.location.href = window.location.origin + '/scent2=OFF';
                        break; 
                    case 'scent3': 
                        window.location.href = window.location.origin + '/scent3=OFF'; 
                        break; 
                    case 'scent4': 
                        window.location.href = window.location.origin + '/scent4=OFF'; 
                        break; 
                    case 'scent5': 
                        window.location.href = window.location.origin + '/scent5=OFF'; 
                        break; 
                    case 'scent6': 
                        window.location.href = window.location.origin + '/scent6=OFF'; 
                        break; 
                    case 'scent7': 
                        window.location.href = window.location.origin + '/scent7=OFF'; 
                        break; 
                    case 'scent8': 
                        window.location.href = window.location.origin + '/scent8=OFF'; 
                        break;
                    case 'temp1': 
                    case 'temp2':
                    case 'temp3': 
                        window.location.href = window.location.origin + '/temp=0'; 
                        break;
                }
            }
        }
        function load(){
            var elems = document.body.getElementsByTagName("*");
            for(i=0; i<elems.length; i++){
                if((elems[i].getAttribute("id") != null ) && (elems[i].getAttribute("id") != '') && (elems[i].tagName == 'DIV')){
                    if(elems[i].getAttribute("value") == 'OFF'){
                        elems[i].style.opacity = "0.5";
                        elems[i].style.outline = "thick solid red";
                    }                    
                }
            }
        }