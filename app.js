const JOBS_KEY='jobs';const TYPES_KEY='types';
function load(k,f){try{return JSON.parse(localStorage.getItem(k))||f}catch{return f}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function initTypes(){let t=load(TYPES_KEY,["Oil Change","Brake Job"]);let s=document.getElementById("jobType");s.innerHTML=t.map(x=>`<option>${x}</option>`).join("")}
function addType(){let n=prompt("New job type:");if(n){let t=load(TYPES_KEY,[]);t.push(n);save(TYPES_KEY,t);initTypes()}}
function getForm(){return{year:year.value,make:make.value,model:model.value,vin:vin.value,date:date.value,plate:plate.value,mileage:mileage.value,codes:codes.value,jobType:jobType.value,notes:notes.value,id:Date.now()}}
function saveJob(){let j=getForm();let a=load(JOBS_KEY,[]);a.push(j);save(JOBS_KEY,a);alert("Saved")}
function emailJob(){let j=getForm();location.href=`mailto:?subject=Job Info&body=${encodeURIComponent(JSON.stringify(j,null,2))}`}
function searchJobs(){let kw=keyword.value.toLowerCase();let a=load(JOBS_KEY,[]).filter(j=>JSON.stringify(j).toLowerCase().includes(kw));results.innerHTML=a.map(j=>`<li>${j.make} ${j.model} - ${j.jobType}</li>`).join("")}
addEventListener("DOMContentLoaded",()=>{initTypes();addTypeBtn.onclick=addType;saveBtn.onclick=saveJob;emailBtn.onclick=emailJob;searchBtn.onclick=searchJobs})
