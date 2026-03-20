// Unique session (better)
const session = Date.now() + "_" + Math.floor(Math.random()*100000);

// Safe track (error-proof)
function track(event, page){
  try{
    fetch("/api/track", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({event,page,session})
    });
  }catch(e){}
}

// Step 1
function goStep1(page){
  track("click", page);

  setTimeout(()=>{
    window.location.href = "next1.html";
  }, 150); // small delay for tracking
}

// Step 2
function goStep2(){
  track("step2","next1");

  setTimeout(()=>{
    window.location.href = "next2.html";
  }, 150);
}

// Step 3
function goFinal(){
  track("step3","next2");

  setTimeout(()=>{
    window.location.href = "final.html";
  }, 150);
}

// 🔥 MULTI OFFER ROTATION + SMART LOGIC
function convert(){

  track("conversion","final");

  const offers = [
    "https://thermometeranalogyincomprehensible.com/km16bcuu?key=edf886fae5238a026e0ea7d6cd328279",
    "https://thermometeranalogyincomprehensible.com/km16bcuu?key=edf886fae5238a026e0ea7d6cd328279",
    "https://thermometeranalogyincomprehensible.com/km16bcuu?key=edf886fae5238a026e0ea7d6cd328279"
  ];

  // Random pick
  const pick = offers[Math.floor(Math.random()*offers.length)];

  // Save last offer (for retry logic)
  localStorage.setItem("last_offer", pick);

  setTimeout(()=>{
    window.location.href = pick;
  }, 200);
}

// 🔄 BACK BUTTON REDIRECT (extra earning chance)
window.onpopstate = function(){
  const last = localStorage.getItem("last_offer");

  if(last){
    window.location.href = last;
  } else {
    window.location.href = "final.html";
  }
};

// ⏳ AUTO PUSH (if user inactive)
setTimeout(()=>{
  if(window.location.pathname.includes("lp")){
    window.location.href = "next1.html";
  }
}, 15000);
