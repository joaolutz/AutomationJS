const url = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${document.URL}type`;
document.querySelector("#qrcode").src = url;
document.querySelector("h4").innerHTML = document.URL + 'type';