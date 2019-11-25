var wpsafelink = "https://vefiles.icu/post/";
var domain = ["",];
var els = document.getElementsByTagName("a"); 
for(var i = 0, l = els.length; i < l; i++) {	
	var el = els[i]; 
	var li = el.href;
	li = li.replace("https://", "");
	li = li.replace("http://", "");
	li = li.replace("www.", "");
	li = li.split("/")[0];
	for(var d=0; d < domain.length; d++){
		if(li == domain[d]){
			el.href = wpsafelink + btoa(el.href);
		}
	}
}
