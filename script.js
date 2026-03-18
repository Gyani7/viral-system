const session = Date.now() + "_" + Math.random();

function track(event, page){
  fetch("/api/track", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({event,page,session})
  });
}

function goStep1(page){
  track("click", page);
  window.location.href = "next1.html";
}

function goStep2(){
  track("step2","next1");
  window.location.href = "next2.html";
}

function goFinal(){
  track("step3","next2");
  window.location.href = "final.html";
}

// 🔥 MULTI OFFER ROTATION
function convert(){
  track("conversion","final");

  const offers = [
    "https://YOUR_LINK_1",
    "https://YOUR_LINK_2",
    "https://YOUR_LINK_3"
  ];

  const pick = offers[Math.floor(Math.random()*offers.length)];

  window.location.href = pick;
}
