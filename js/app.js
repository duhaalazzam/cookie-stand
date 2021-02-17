/* eslint-disable no-trailing-spaces */
'use strict';
let timeArr=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let bodyEl=document.getElementById('body');
let table=document.createElement('table');
let locationArr=[];
bodyEl.appendChild(table);
function BranchLocation(location,minCusPerHour,maxCusPerHour,avgCookPercus)
{
  this.location=location;
  this.minCusPerHour=minCusPerHour;
  this.maxCusPerHour=maxCusPerHour;
  this.avgCookPercus=avgCookPercus;
  this.cookPerHour=[];
  this.dayTotal=0;
  locationArr.push(this);
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
    let total=0;
    for(let j=0;j<locationArr.length;j++)
    {
      total=total+locationArr[j].cookPerHour[i];
    }
    td.textContent=total;
    
  }
  td=document.createElement('td');
  tr.appendChild(td);
  let total=0;
  for(let j=0;j<locationArr.length;j++)
  {
    total=total+locationArr[j].dayTotal;
  }
  td.textContent=total;
}

const form = document.getElementById('LocationForm');

form.addEventListener('submit', locationCreator);


function locationCreator(event) {
  // to prevent default behavior from the webpages
  event.preventDefault();
  let location = event.target.locationField.value;
  let min = event.target.minField.value;
  min=parseInt(min);
  let max = event.target.maxField.value;
  max=parseInt(max);
  let avg = event.target.avgField.value;
  avg=parseFloat(avg);
  let newLocation=new BranchLocation(location,min,max,avg);
  table.deleteRow(table.rows.length-1);
  newLocation.render();
  footerRow();
}
new BranchLocation('Seattle',23,65,6.3);
new BranchLocation('Tokyo',3,24,1.2);
new BranchLocation('Dubai',11,38,3.7);
new BranchLocation('Paris',20,38,2.3);
new BranchLocation('Lima',2,16,4.6);
headerRow();
for(let i=0;i<locationArr.length;i++)
{
  locationArr[i].render();
}
footerRow();
