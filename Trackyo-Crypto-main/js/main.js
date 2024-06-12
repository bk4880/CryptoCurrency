"use strict";
const chartCxt = document.querySelector("#chart-context").getContext("2d");
new Chart(chartCxt, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          22094, 29294, 32122, 45874, 39504, 27668, 46941, 49214, 62804, 55103,
          50156, 48122,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "ETH",
        data: [
          10500, 19294, 32102, 35874, 39001, 11668, 48941, 20211, 26100, 29103,
          37133, 30122,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
      {
        label: "DOGE",
        data: [
          1500, 9394, 2102, 5874, 6001, 1668, 8941, 4211, 6100, 9103,
          7133, 2122,
        ],
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
  localStorage.setItem("theme", document.body.className);
});


let crypto = {
  "apikey" : "d23f29aa777d4f6b8f79d7c697d41dea" ,
  fetchcrypto: function(){
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Cbnb&vs_currencies=inr").then((response) => response.json())
    .then((data) => this.displayBtc(data));
  },
  displayBtc: function(data){
    const { inr } = data.bitcoin;
    document.querySelector(".api-data").innerHTML = "&#8377;" + inr;
  },
}
let cryptoEth = {
  "apikey" : "d23f29aa777d4f6b8f79d7c697d41dea" ,
  fetchcryptoEth: function(){
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Ccardano&vs_currencies=inr").then((response) => response.json())
    .then((data) => this.displayEth(data));
  },
  displayEth: function(data){
    const { inr } = data.ethereum;
    document.querySelector(".data-eth").innerHTML = "&#8377;" + inr;
  },
}
let cryptoDoge = {
  "apikey" : "d23f29aa777d4f6b8f79d7c697d41dea" ,
  fetchcryptoDoge: function(){
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Ccardano&vs_currencies=inr")
    .then((response) => response.json())
    .then((data) => this.displayDoge(data));
  },
  displayDoge: function(data){
    const { inr } = data.dogecoin;
    document.querySelector(".data-doge").innerHTML = "&#8377;" + inr;
  },
}
let cryptoSolana = {
  "apikey" : "d23f29aa777d4f6b8f79d7c697d41dea" ,
  fetchcryptoSolana: function(){
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Ccardano&vs_currencies=inr")
    .then((response) => response.json())
    .then((data) => this.displaySolana(data));
  },
  displaySolana: function(data){
    const { inr } = data.solana;
    document.querySelector(".data-solana").innerHTML = "&#8377;" + inr;
  },
}
let cryptoTether = {
  "apikey" : "d23f29aa777d4f6b8f79d7c697d41dea" ,
  fetchcryptoTether: function(){
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Ccardano&vs_currencies=inr")
    .then((response) => response.json())
    .then((data) => this.displayTether(data));
  },
  displayTether: function(data){
    const { inr } = data.tether;
    document.querySelector(".data-tether").innerHTML = "&#8377;" + inr;
  },
}
let cryptoCardano = {
  "apikey" : "d23f29aa777d4f6b8f79d7c697d41dea" ,
  fetchcryptoCardano: function(){
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana%2Ccardano&vs_currencies=inr")
    .then((response) => response.json())
    .then((data) => this.displayCardano(data));
  },
  displayCardano: function(data){
    const { inr } = data.cardano;
    document.querySelector(".data-cardano").innerHTML = "&#8377;" + inr;
  },
}


crypto.fetchcrypto();
cryptoEth.fetchcryptoEth();
cryptoDoge.fetchcryptoDoge();
cryptoSolana.fetchcryptoSolana();
cryptoTether.fetchcryptoTether();
cryptoCardano.fetchcryptoCardano();
window.onload = function () {
  if (Object.hasOwnProperty.call(localStorage, "theme")) {
    localStorage.getItem("theme") != ""
      ? (document.body.className = localStorage.getItem("theme"))
      : "";
  }
  document.body.classList.add("show");
};
