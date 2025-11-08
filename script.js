document.addEventListener('DOMContentLoaded',()=>{
  const pre=document.querySelector('.term-lines');
  const txt=pre.textContent.trim();
  pre.textContent='';
  let i=0;
  function type(){
    pre.textContent=txt.slice(0,i);
    i++;
    if(i<=txt.length)setTimeout(type,15);
  }
  type();
});