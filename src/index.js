import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css'
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>,
  document.getElementById('root')
);
const closeMenu=document.querySelector('.closeMenu');
const openMenu=document.querySelector('.openMenu');
const navBar=document.querySelector('nav');
const about=document.querySelector('.aboutus');
const accessory=document.querySelector('.accessory');
const accessories=document.querySelector('.accessories'); 
const nav1=document.querySelector('.nav1');
const acc=document.querySelector('.acc');
const acc1=document.querySelector('.acc1');
const acc2=document.querySelector('.acc2');
const shirts=document.querySelector('.mshirts');
const shoes=document.querySelector('.mshoes');
const addToCart=document.querySelector('.primary');
const icons=document.querySelector('.icons');  

openMenu.addEventListener('click',open);
closeMenu.addEventListener('click',close);
about.addEventListener('click',scrollBottom);
accessory.addEventListener('mouseover',accDisp);
accessory.addEventListener('mouseout',accHide);
accessory.addEventListener('click',accDisp); 
acc.addEventListener('click', alerT);
acc1.addEventListener('click',dispShirts);
acc2.addEventListener('click',dispShoes);
icons.addEventListener('click',socialMedia);  
if(addToCart){
    addToCart.addEventListener('click',addedToCart);
}
function open(){
    openMenu.style.display="none";
    navBar.style.animation="nav-display 0.4s linear 0s 1 forwards";
    closeMenu.style.display="inline";
    navBar.style.display="flex";
}
function close(){
    navBar.style.animation="nav-hide 0.37s linear 0s 1 forwards";
    openMenu.style.display="inline";
    closeMenu.style.display="none";
    setTimeout(navDis,380);
}
function navDis(){ 
    navBar.style.display="none";
}
function scrollBottom(){
    window.scrollTo(0,document.body.scrollHeight);
}
function accDisp(){
    accessories.style.display="flex";
    nav1.style.alignItems="flex-start";  
    navBar.style.animation="nav-display2 0.4s linear 0s 1 forwards";
}
function alerT(){
    alert('Will add soon after learning Mongodb😂');
}
function accHide(){
    accessories.style.display="none";
    nav1.style.alignItems="center"
}
function dispShirts(){
    if(shirts){
        shirts.scrollIntoView();
    }
    else alert('Please return back to Home page first!');
}
function dispShoes(){
    if(shoes){
        shoes.scrollIntoView();
    }
    else alert('Please return back to Home page first!');
}
function addedToCart(){ 
    alert('Item added successfully to the Cart!');
}
function socialMedia(){
    alert('At present we are not on any Social Media😂');
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
