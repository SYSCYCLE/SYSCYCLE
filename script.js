document.getElementById('mode-btn').addEventListener('click', () => {
	document.body.classList.toggle('dark');
	localStorage.setItem('mode', document.body.classList)
});

if (localStorage.getItem('mode') != ''){
	document.body.classList.add(localStorage.getItem('mode'));
	document.getElementById('mode-btn').checked = true;
}

document.onmousedown=disableclick;
    status="Right Click Disabled";
    Function disableclick(event)
    {
      if(event.button==2)
       {
         alert(status);
         return false;    
       }
    }
