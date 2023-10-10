const inputIP = document.querySelector(".input-ip");
const buttonSubmit = document.querySelector(".btn");
const userIP = document.querySelector(".user-ip");
const userLocation = document.querySelector(".user-location");
const userTimezone = document.querySelector(".user-timezone");
const userISP = document.querySelector(".user-isp");
const leafMap = document.querySelector("#map");
const API_KEY = "at_37gVCXjgJy4T2T7PV4dEBrEsQ1YhH";

let ipAddress;
let timeZone;
let loc;
let isp;
let lat;
let lng;

let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    inputIP.value.match(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    )
  ) {
    getData(inputIP.value);
  } else {
    alert("Please enter a valid IP address");
  }
});

const getData = async (ip) => {
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const resData = await response.json();

    ipAddress = resData.ip;
    timeZone = resData.location.timezone;
    isp = resData.isp;
    loc = resData.location.city;
    lat = resData.location.lat;
    lng = resData.location.lng;

    userIP.innerHTML = ipAddress;
    userLocation.innerHTML = `${loc}, ${resData.location.country}`;
    userTimezone.innerHTML = `UTC ${timeZone}`;
    userISP.innerHTML = isp;

    mapLocation(lat, lng);
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

const mapLocation = (lat, lng) => {
  let markerIcon = L.icon({
    iconUrl: "images/icon-location.svg",
    iconSize: [45, 55],
    iconAnchor: [23, 55],
  });

  map.setView([lat, lng], 17);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: false,
  }).addTo(map);

  L.marker([lat, lng], { icon: markerIcon }).addTo(map);
};
