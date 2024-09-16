let reciever=document.querySelector('.reciever');
let sender=document.querySelector('.sender');
reciever.innerText = new URLSearchParams(location.search).get("reciever");
sender.innerText = new URLSearchParams(location.search).get("sender") || 'Vivek';
