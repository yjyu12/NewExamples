console.log("main.js!!");

const ATTRIBUTION = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const ACCESS_TOKEN = "pk.eyJ1IjoidC1yZXhjb20iLCJhIjoiY2xhdWZjbHN5MDVzejNwbnlwbzcxaDgyeCJ9.JXMfMiaQfBIckg5yE-Y8dQQ";

// 緯度経度データ
const ogaki = [35.366978775556916, 136.61782096901123];


window.onload = (event)=>{
	console.log("onload!!");

	let map = L.map("mapid").setView(ogaki, 16);

// マップの設定
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
	attribution:ATTRIBUTION, //著作権表記,
	accessToken:ACCESS_TOKEN, //アクセストークン,
	id:"mapbox/streets-v11", //マップの種類
}).addTo(map);
L.marker(ogaki).addTo(map);

}