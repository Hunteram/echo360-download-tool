function getScript(url,success){var head=document.getElementsByTagName('head')[0],done=!1,script=document.createElement('script');script.src=url,script.onload=script.onreadystatechange=function(){done||this.readyState&&'loaded'!=this.readyState&&'complete'!=this.readyState||(done=!0,success())},head.appendChild(script)}getScript('https://code.jquery.com/jquery-1.11.2.min.js',function(){getScript('https://raw.githubusercontent.com/mdchia/echo360-download-tool/master/echo360-download-tool.js',function(){})});
