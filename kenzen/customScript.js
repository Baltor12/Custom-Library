function toggle(button) {
    if (button.getAttribute('value') == 'ON') {
        switch (button.getAttribute('id')) {
            case 'blower1':
                $.post('on?comp=blower1&smell=jasmine', function (data, status) {
                    document.getElementById('blower1').setAttribute('value', 'OFF');
                    document.getElementById('blower1').style.opacity = '0.5';
                    document.getElementById('blower1').style.outline = 'thick solid red';
                });
                break;
            case 'blower2':
                $.post('on?comp=blower2&smell=coffee', function (data, status) {
                    document.getElementById('blower2').setAttribute('value', 'OFF');
                    document.getElementById('blower2').style.opacity = '0.5';
                    document.getElementById('blower2').style.outline = 'thick solid red';
                });
                break;
            case 'blower3':
                $.post('on?comp=blower3&smell=yuzu', function (data, status) {
                    document.getElementById('blower3').setAttribute('value', 'OFF');
                    document.getElementById('blower3').style.opacity = '0.5';
                    document.getElementById('blower3').style.outline = 'thick solid red';
                });
                break;
            case 'blower4':
                $.post('on?comp=blower4&smell=lemon', function (data, status) {
                    document.getElementById('blower4').setAttribute('value', 'OFF');
                    document.getElementById('blower4').style.opacity = '0.5';
                    document.getElementById('blower4').style.outline = 'thick solid red';
                });
                break;
            case 'blower5':
                $.post('on?comp=blower5&smell=eucalyptus', function (data, status) {
                    document.getElementById('blower5').setAttribute('value', 'OFF');
                    document.getElementById('blower5').style.opacity = '0.5';
                    document.getElementById('blower5').style.outline = 'thick solid red';
                });
                break;
            case 'blower6':
                $.post('on?comp=blower6&smell=vanilla', function (data, status) {
                    document.getElementById('blower6').setAttribute('value', 'OFF');
                    document.getElementById('blower6').style.opacity = '0.5';
                    document.getElementById('blower6').style.outline = 'thick solid red';
                });
                break;
            case 'blower7':
                $.post('on?comp=blower7&smell=methol', function (data, status) {
                    document.getElementById('blower7').setAttribute('value', 'OFF');
                    document.getElementById('blower7').style.opacity = '0.5';
                    document.getElementById('blower7').style.outline = 'thick solid red';
                });
                break;
            case 'blower8':
                $.post('on?comp=blower8&smell=lavender', function (data, status) {
                    document.getElementById('blower8').setAttribute('value', 'OFF');
                    document.getElementById('blower8').style.opacity = '0.5';
                    document.getElementById('blower8').style.outline = 'thick solid red';
                });
                break;
            case 'fan':
                $.post('on?comp=fan&smell=fan', function (data, status) {
                    document.getElementById('fan').setAttribute('value', 'OFF');
                    document.getElementById('fan').style.opacity = '0.5';
                    document.getElementById('fan').style.outline = 'thick solid red';
                });
                break;
            case 'template1':
                document.getElementById('template1').setAttribute('value', 'OFF');
                document.getElementById('template1').style.opacity = '0.5';
                document.getElementById('template1').style.outline = 'thick solid red';
                $.post('template?temp=template1', function (data, status) {
                    document.getElementById('template1').style.opacity = '1';
                    document.getElementById('template1').style.outline = 'none';
                    document.getElementById('template1').setAttribute('value', 'ON');
                });
                break;
            case 'template2':
                document.getElementById('template2').setAttribute('value', 'OFF');
                document.getElementById('template2').style.opacity = '0.5';
                document.getElementById('template2').style.outline = 'thick solid red';
                $.post('template?temp=template2', function (data, status) {
                    document.getElementById('template2').style.opacity = '1';
                    document.getElementById('template2').style.outline = 'none';
                    document.getElementById('template2').setAttribute('value', 'ON');
                });
                break;
        }
    } else {
        switch (button.getAttribute('id')) {
            case 'blower1':
                $.post('off?comp=blower1', function (data, status) {
                    document.getElementById('blower1').setAttribute('value', 'ON');
                    document.getElementById('blower1').style.opacity = '1';
                    document.getElementById('blower1').style.outline = 'none';
                });
                break;
            case 'blower2':
                $.post('off?comp=blower2', function (data, status) {
                    document.getElementById('blower2').setAttribute('value', 'ON');
                    document.getElementById('blower2').style.opacity = '1';
                    document.getElementById('blower2').style.outline = 'none';
                });
                break;
            case 'blower3':
                $.post('off?comp=blower3', function (data, status) {
                    document.getElementById('blower3').setAttribute('value', 'ON');
                    document.getElementById('blower3').style.opacity = '1';
                    document.getElementById('blower3').style.outline = 'none';
                });
                break;
            case 'blower4':
                $.post('off?comp=blower4', function (data, status) {
                    document.getElementById('blower4').setAttribute('value', 'ON');
                    document.getElementById('blower4').style.opacity = '1';
                    document.getElementById('blower4').style.outline = 'none';
                });
                break;
            case 'blower5':
                $.post('off?comp=blower5', function (data, status) {
                    document.getElementById('blower5').setAttribute('value', 'ON');
                    document.getElementById('blower5').style.opacity = '1';
                    document.getElementById('blower5').style.outline = 'none';
                });
                break;
            case 'blower6':
                $.post('off?comp=blower6', function (data, status) {
                    document.getElementById('blower6').setAttribute('value', 'ON');
                    document.getElementById('blower6').style.opacity = '1';
                    document.getElementById('blower6').style.outline = 'none';
                });
                break;
            case 'blower7':
                $.post('off?comp=blower7', function (data, status) {
                    document.getElementById('blower7').setAttribute('value', 'ON');
                    document.getElementById('blower7').style.opacity = '1';
                    document.getElementById('blower7').style.outline = 'none';
                });
                break;
            case 'blower8':
                $.post('off?comp=blower8', function (data, status) {
                    document.getElementById('blower8').setAttribute('value', 'ON');
                    document.getElementById('blower8').style.opacity = '1';
                    document.getElementById('blower8').style.outline = 'none';
                });
                break;
            case 'fan':
                $.post('off?comp=fan', function (data, status) {
                    document.getElementById('fan').setAttribute('value', 'ON');
                    document.getElementById('fan').style.opacity = '1';
                    document.getElementById('fan').style.outline = 'none';
                });
                break;
            case 'template1':
            case 'template2':
            case 'temp3':
                break;
        }
    }
    getStatus();
}
function load() {
    getStatus();
}

window.setInterval(function () {
    getStatus();
}, 3000);

function getStatus() {
    //Get the status of all the bloweres from the device and activate the button accordingly
    $.get('status', function (data, status) {
        var json = JSON.parse(data);
        for (var key in json) {
            if (json[key]) {
                document.getElementById(key).setAttribute('value', 'OFF');
                document.getElementById(key).style.opacity = '0.5';
                document.getElementById(key).style.outline = 'thick solid red';
            } else {
                document.getElementById(key).setAttribute('value', 'ON');
                document.getElementById(key).style.opacity = '1';
                document.getElementById(key).style.outline = 'none';
            }
        }
    });
}
