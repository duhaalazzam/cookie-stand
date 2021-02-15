/* eslint-disable no-trailing-spaces */
'use strict';
let timeArr=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let bodyEl=document.getElementById('body');
let table=document.createElement('table');
bodyEl.appendChild(table);
function BranchLocation(location,minCusPerHour,maxCusPerHour,avgCookPercus)
{
  this.location=location;
  this.minCusPerHour=minCusPerHour;
  this.maxCusPerHour=maxCusPerHour;
  this.avgCookPercus=avgCookPercus;
  this.cookPerHour=[];
  this.dayTotal=0;
}
BranchLocation.prototype.randNumOfCus=function()
{
  return Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + this.minCusPerHour);
};
BranchLocation.prototype.calCookPerHour=function()
{
  for(let i=0;i<timeArr.length;i++)
  {
    this.cookPerHour.push(Math.floor(this.randNumOfCus()*this.avgCookPercus));
  }
};
BranchLocation.prototype.render=function()
{
  this.calCookPerHour();
  let tr=document.createElement('tr');
  table.appendChild(tr);
  let th=document.createElement('th');
  tr.appendChild(th);
  th.textContent=this.location;
  let td;
  for(let i=0;i<this.cookPerHour.length;i++)
  {
    td=document.createElement('td');
    tr.appendChild(td);
    td.textContent=this.cookPerHour[i];
    this.dayTotal=this.dayTotal+this.cookPerHour[i];
  }
  td=document.createElement('td');
  tr.appendChild(td);
  td.textContent=this.dayTotal;
};
function headerRow()
{
  let tr=document.createElement('tr');
  table.appendChild(tr);
  let th=document.createElement('th');
  tr.appendChild(th);
  for(let i=0;i<timeArr.length;i++)
  {
    th=document.createElement('th');
    tr.appendChild(th);
    th.textContent=timeArr[i];
  }
  th=document.createElement('th');
  tr.appendChild(th);
  th.textContent='Daily Location total';
}
function footerRow()
{
  let tr=document.createElement('tr');
  table.appendChild(tr);
  let th=document.createElement('th');
  tr.appendChild(th);
  th.textContent='Total';
  let td;
  for(let i=0;i<timeArr.length;i++)
  {
    td=document.createElement('td');
    tr.appendChild(td);
    td.textContent=seattle.cookPerHour[i]+tokyo.cookPerHour[i]+dubai.cookPerHour[i]+paris.cookPerHour[i]+lima.cookPerHour[i];
  }
  td=document.createElement('td');
  tr.appendChild(td);
  td.textContent=seattle.dayTotal+tokyo.dayTotal+dubai.dayTotal+paris.dayTotal+lima.dayTotal;
}
let seattle=new BranchLocation('Seattle',23,65,6.3);
let tokyo=new BranchLocation('Tokyo',3,24,1.2);
let dubai=new BranchLocation('Dubai',11,38,3.7);
let paris=new BranchLocation('Paris',20,38,2.3);
let lima=new BranchLocation('Lima',2,16,4.6);
 
headerRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
footerRow();

