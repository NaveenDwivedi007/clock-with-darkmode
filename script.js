const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".sec")
const date = document.querySelector(".date")
const toggle = document.querySelector(".toggle")
const time = document.querySelector(".time")
const day = document.querySelector(".day")



toggle.addEventListener("click",(e)=>{
  const html=document.querySelector("html")
  if (html.classList.contains("dark")) {
    html.classList.remove("dark")
    e.target.innerText="Dark Mode"
  }else{
    html.classList.add("dark")
    e.target.innerText="Light Mode"
  }
})




var DateTime = Date(Date.now()).split(" ")


function clackHand() {
  date.innerText = DateTime[0]+" , "+DateTime[1] +" "+ DateTime[2]   
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds= currentTime.getSeconds()

  DateTime = Date(Date.now()).split(" ")
   time.innerText=DateTime[4].split(":").splice(0,2).join(":")+" "+ ` ${hours<12 ? `AM` : `PM` }`
 

  sec.style.transform = `translate(-50%, -100%) rotate(${numberMapping(seconds,0,59,0,360)}deg)`;
  min.style.transform = `translate(-50%, -100%) rotate(${numberMapping(minutes,0,59,0,360)}deg)`;
  hour.style.transform = `translate(-50%, -100%) rotate(${numberMapping(hours-12,0,11,0,360)}deg)`;
}

function numberMapping(inputNum,inMin,inMax,outMin,outMax) {
  return (inputNum-inMin)*(outMax-outMin)/(inMax-inMin)+outMin
}

setInterval(clackHand,1000)
