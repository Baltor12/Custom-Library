function toggle(button) {
    if (button.getAttribute("value") == 'ON') {
        switch (button.getAttribute("id")) {
            case 'scent1':
                $.post('on?comp=blower1', function (data, status) {
                    document.getElementsById('scent1').setAttribute('value', 'OFF');
                    document.getElementsById('scent1').style.opacity = "0.5";
                    document.getElementsById('scent1').style.outline = "thick solid red";
                });
                break;
            case 'scent2':
                $.post('on?comp=blower2', function (data, status) {
                    document.getElementsById('scent2').setAttribute('value', 'OFF');
                    document.getElementsById('scent2').style.opacity = "0.5";
                    document.getElementsById('scent2').style.outline = "thick solid red";
                });
                break;
            case 'scent3':
                $.post('on?comp=blower3', function (data, status) {
                    document.getElementsById('scent3').setAttribute('value', 'OFF');
                    document.getElementsById('scent3').style.opacity = "0.5";
                    document.getElementsById('scent3').style.outline = "thick solid red";
                });
                break;
            case 'scent4':
                $.post('on?comp=blower4', function (data, status) {
                    document.getElementsById('scent4').setAttribute('value', 'OFF');
                    document.getElementsById('scent4').style.opacity = "0.5";
                    document.getElementsById('scent4').style.outline = "thick solid red";
                });
                break;
            case 'scent5':
                $.post('on?comp=blower5', function (data, status) {
                    document.getElementsById('scent5').setAttribute('value', 'OFF');
                    document.getElementsById('scent5').style.opacity = "0.5";
                    document.getElementsById('scent5').style.outline = "thick solid red";
                });
                break;
            case 'scent6':
                $.post('on?comp=blower6', function (data, status) {
                    document.getElementsById('scent6').setAttribute('value', 'OFF');
                    document.getElementsById('scent6').style.opacity = "0.5";
                    document.getElementsById('scent6').style.outline = "thick solid red";
                });
                break;
            case 'scent7':
                $.post('on?comp=blower7', function (data, status) {
                    document.getElementsById('scent7').setAttribute('value', 'OFF');
                    document.getElementsById('scent7').style.opacity = "0.5";
                    document.getElementsById('scent7').style.outline = "thick solid red";
                });
                break;
            case 'scent8':
                $.post('on?comp=blower8', function (data, status) {
                    document.getElementsById('scent8').setAttribute('value', 'OFF');
                    document.getElementsById('scent8').style.opacity = "0.5";
                    document.getElementsById('scent8').style.outline = "thick solid red";
                });
                break;
            case 'temp1':
                $.post('template?temp=template1', function (data, status) {
                    document.getElementsById('temp1').style.opacity = "0.5";
                    document.getElementsById('temp1').style.outline = "thick solid red";
                });
                break;
            case 'temp2':
                $.post('template?temp=template2', function (data, status) {
                    document.getElementsById('temp2').style.opacity = "0.5";
                    document.getElementsById('temp2').style.outline = "thick solid red";
                });
                break;
            case 'temp3':
                $.post('template?temp=template3', function (data, status) {
                    document.getElementsById('temp3').style.opacity = "0.5";
                    document.getElementsById('temp3').style.outline = "thick solid red";
                });
                break;
        }
    } else {
        switch (button.getAttribute("id")) {
            case 'scent1':
                $.post('off?comp=blower1', function (data, status) {
                    document.getElementsById('scent1').setAttribute('value', 'ON');
                    document.getElementsById('scent1').style.opacity = "1";
                    document.getElementsById('scent1').style.outline = "none";
                });
                break;
            case 'scent2':
                $.post('off?comp=blower2', function (data, status) {
                    document.getElementsById('scent2').setAttribute('value', 'ON');
                    document.getElementsById('scent2').style.opacity = "1";
                    document.getElementsById('scent2').style.outline = "none";
                });
                break;
            case 'scent3':
                $.post('off?comp=blower3', function (data, status) {
                    document.getElementsById('scent3').setAttribute('value', 'ON');
                    document.getElementsById('scent3').style.opacity = "1";
                    document.getElementsById('scent3').style.outline = "none";
                });
                break;
            case 'scent4':
                $.post('off?comp=blower4', function (data, status) {
                    document.getElementsById('scent4').setAttribute('value', 'ON');
                    document.getElementsById('scent4').style.opacity = "1";
                    document.getElementsById('scent4').style.outline = "none";
                });
                break;
            case 'scent5':
                $.post('off?comp=blower5', function (data, status) {
                    document.getElementsById('scent5').setAttribute('value', 'ON');
                    document.getElementsById('scent5').style.opacity = "1";
                    document.getElementsById('scent5').style.outline = "none";
                });
                break;
            case 'scent6':
                $.post('off?comp=blower6', function (data, status) {
                    document.getElementsById('scent6').setAttribute('value', 'ON');
                    document.getElementsById('scent6').style.opacity = "1";
                    document.getElementsById('scent6').style.outline = "none";
                });
                break;
            case 'scent7':
                $.post('off?comp=blower7', function (data, status) {
                    document.getElementsById('scent7').setAttribute('value', 'ON');
                    document.getElementsById('scent7').style.opacity = "1";
                    document.getElementsById('scent7').style.outline = "none";
                });
                break;
            case 'scent8':
                $.post('off?comp=blower8', function (data, status) {
                    document.getElementsById('scent8').setAttribute('value', 'ON');
                    document.getElementsById('scent8').style.opacity = "1";
                    document.getElementsById('scent8').style.outline = "none";
                });
                break;
            case 'temp1':
            case 'temp2':
            case 'temp3':
                break;
        }
    }
}
        /*function load(){
            var elems = document.body.getElementsByTagName("*");
            for(i=0; i<elems.length; i++){
                if((elems[i].getAttribute("id") != null ) && (elems[i].getAttribute("id") != '') && (elems[i].tagName == 'DIV')){
                    if(elems[i].getAttribute("value") == 'OFF'){
                        elems[i].style.opacity = "0.5";
                        elems[i].style.outline = "thick solid red";
                    }                    
                }
            }
        }*/