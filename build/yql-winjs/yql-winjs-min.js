YUI.add("yql-winjs",function(e,t){e.YQLRequest.prototype._send=function(e,t){var n=new XMLHttpRequest,r;n.open("GET",e,!0),n.onreadystatechange=function(){n.readyState===4&&(clearTimeout(r),t.on.success(JSON.parse(n.responseText)))},n.send(),r=setTimeout(function(){n.abort(),t.on.timeout("script timeout")},t.timeout||5e3)}},"@VERSION@");
