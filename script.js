let one  =document.getElementById('one');
let two =document.getElementById('two');
let three =document.getElementById('three');

let random=['😃','😄','😅','😆','😗','🤗','🙄','😑','🤐','😪','😫','🥱','🥠','🥪','🥙','🥙','🥗','🥓','🥚'];

let result=document.getElementById('result');
let retry=document.getElementById('retry');
function getRandomValue()
{
    return random[Math.floor(Math.random() *18)];
}
let x=document.getElementById("start");
var p= setInterval(
function(){
    one.innerText=getRandomValue();
    two.innerText=getRandomValue();
    three.innerText=getRandomValue();
},300)    

     
x.onclick = function() {
     clearInterval(p);

  if(one.innerText === two.innerText)
    {
    result.innerText="💥💥💥CONGRATULATIONS👩‍🦰🍕🍔";
   }
   else if(one.innerText === three.innerText)
    {
    result.innerText = "💥💥💥CONGRATULATIONS🍛🍜💖";
   }
   else if(two.innerText === three.innerText)
   {
    result.innerText = "💕💕💕CONGRATULATIONS💚💙💜";
   }
   else
   {
   result.innerText = "🍕🍕🍕🍕🍕BADD LUCK🍕🍕🍕🍕🍕";
   
   }
}
retry.onclick=function()
{
 location.reload();
}