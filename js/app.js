'use strict';
let timeArr=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let seattle={
  minCusPerHour:23,
  maxCusPerHour:65,
  avgCookPercus:6.3,
  cookPerHour:[],
  randNumOfCus:function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  calCookPerHour:function()
  {
    for(let i=0;i<timeArr.length;i++)
    {
      this.cookPerHour.push(Math.floor(this.randNumOfCus(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPercus));
    }
  },
  render:function(){
    this.calCookPerHour();
    let bodyEl=document.getElementById('body');
    let headEl=document.createElement('h2');
    bodyEl.appendChild(headEl);
    headEl.textContent='Seattle';
    let ulEl=document.createElement('ul');
    bodyEl.appendChild(ulEl);
    let liEl;
    let total=0;
    for(let i=0;i<timeArr.length;i++)
    {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=timeArr[i]+':'+this.cookPerHour[i]+'cookies';
      total=total+this.cookPerHour[i];
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total:'+total+'cookies';
  }
};
seattle.render();

let tokyo={
  minCusPerHour:3,
  maxCusPerHour:24,
  avgCookPercus:1.2,
  cookPerHour:[],
  randNumOfCus:function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  calCookPerHour:function()
  {
    for(let i=0;i<timeArr.length;i++)
    {
      this.cookPerHour.push(Math.floor(this.randNumOfCus(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPercus));

    }
  },
  render:function(){
    this.calCookPerHour();
    let bodyEl=document.getElementById('body');
    let headEl=document.createElement('h2');
    bodyEl.appendChild(headEl);
    headEl.textContent='Tokyo';
    let ulEl=document.createElement('ul');
    bodyEl.appendChild(ulEl);
    let liEl;
    let total=0;
    for(let i=0;i<timeArr.length;i++)
    {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=timeArr[i]+':'+this.cookPerHour[i]+'cookies';
      total=total+this.cookPerHour[i];
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total:'+total+'cookies';
  }
};
tokyo.render();

let dubai={
  minCusPerHour:11,
  maxCusPerHour:38,
  avgCookPercus:3.7,
  cookPerHour:[],
  randNumOfCus:function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  calCookPerHour:function()
  {
    for(let i=0;i<timeArr.length;i++)
    {
      this.cookPerHour.push(Math.floor(this.randNumOfCus(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPercus));

    }
  },
  render:function(){
    this.calCookPerHour();
    let bodyEl=document.getElementById('body');
    let headEl=document.createElement('h2');
    bodyEl.appendChild(headEl);
    headEl.textContent='Dubai';
    let ulEl=document.createElement('ul');
    bodyEl.appendChild(ulEl);
    let liEl;
    let total=0;
    for(let i=0;i<timeArr.length;i++)
    {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=timeArr[i]+':'+this.cookPerHour[i]+'cookies';
      total=total+this.cookPerHour[i];
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total:'+total+'cookies';
  }
};
dubai.render();
let paris={
  minCusPerHour:20,
  maxCusPerHour:38,
  avgCookPercus:2.3,
  cookPerHour:[],
  randNumOfCus:function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  calCookPerHour:function()
  {
    for(let i=0;i<timeArr.length;i++)
    {
      this.cookPerHour.push(Math.floor(this.randNumOfCus(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPercus));

    }
  },
  render:function(){
    this.calCookPerHour();
    let bodyEl=document.getElementById('body');
    let headEl=document.createElement('h2');
    bodyEl.appendChild(headEl);
    headEl.textContent='Paris';
    let ulEl=document.createElement('ul');
    bodyEl.appendChild(ulEl);
    let liEl;
    let total=0;
    for(let i=0;i<timeArr.length;i++)
    {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=timeArr[i]+':'+this.cookPerHour[i]+'cookies';
      total=total+this.cookPerHour[i];
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total:'+total+'cookies';
  }
};
paris.render();
let lima={
  minCusPerHour:2,
  maxCusPerHour:16,
  avgCookPercus:4.6,
  cookPerHour:[],
  randNumOfCus:function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  calCookPerHour:function()
  {
    for(let i=0;i<timeArr.length;i++)
    {
      this.cookPerHour.push(Math.floor(this.randNumOfCus(this.minCusPerHour,this.maxCusPerHour)*this.avgCookPercus));

    }
  },
  render:function(){
    this.calCookPerHour();
    let bodyEl=document.getElementById('body');
    let headEl=document.createElement('h2');
    bodyEl.appendChild(headEl);
    headEl.textContent='Lima';
    let ulEl=document.createElement('ul');
    bodyEl.appendChild(ulEl);
    let liEl;
    let total=0;
    for(let i=0;i<timeArr.length;i++)
    {
      liEl=document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=timeArr[i]+':'+this.cookPerHour[i]+'cookies';
      total=total+this.cookPerHour[i];
    }
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent='Total:'+total+'cookies';
  }
};
lima.render();





