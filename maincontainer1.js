window.addEventListener('scroll', function() {
  var fundraiser = document.getElementById('fundraiser');
  var news=document.getElementById('news');
  var current_event=document.getElementById('current_event');
  var purchase=document.getElementById('purchase');
  var goal=document.getElementById('goal');
  var scroll_down=document.getElementById('scroll_down');



  var scrollPosition = window.scrollY;
  if (scrollPosition > 64) {
      scroll_down.classList.add('fade');
      scroll_down.classList.remove('animate');
  } else{
    scroll_down.classList.remove('fade');
      scroll_down.classList.add('animate');
  }

  if (scrollPosition > 124) { // Change '100' to the scroll position you want
      fundraiser.style.opacity = '1'; // This will make the content inside the div invisible
  } else {
      fundraiser.style.opacity = '0'; // This will make the content inside the div visible
  }

  if (scrollPosition>839){
      news.style.opacity = '1';
  } else{
      news.style.opacity='0';
  }

  if (scrollPosition>1164){
      current_event.style.opacity = '1';
  } else{
      current_event.style.opacity='0';
  }
    
  if (scrollPosition>1759){
    purchase.style.opacity = '1';
  } else{
    purchase.style.opacity='0';
  }

  if (scrollPosition>2168){
    goal.style.opacity = '1';
  } else{
    goal.style.opacity='0';
  }
});
