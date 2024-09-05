const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  const lgh = myObj.ads;
  let length =  lgh.length;
  let x = Math.floor((Math.random() * length));
  document.getElementById('myImage').src = myObj.ads[x].picurl;
  document.getElementById('goshop').href = myObj.ads[x].shopurl;
  document.getElementById("yext").innerHTML = myObj.ads[x].text;
}
xmlhttp.open("GET", "https://raw.githubusercontent.com/adikpa/web/main/wejs/ads_server/shopee_ads_list");
xmlhttp.send();
