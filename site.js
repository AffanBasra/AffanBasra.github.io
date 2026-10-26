(function(){
  var btn=document.getElementById('menu-btn'), menu=document.getElementById('menu');
  if(!btn||!menu) return;
  function set(open){
    btn.setAttribute('aria-expanded', open?'true':'false');
    btn.setAttribute('aria-label', open?'Close menu':'Open menu');
    menu.hidden=!open;
    document.body.classList.toggle('menu-open', open);
  }
  btn.addEventListener('click', function(){ set(btn.getAttribute('aria-expanded')!=='true'); });
  menu.addEventListener('click', function(e){ if(e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape') set(false); });
  matchMedia('(min-width: 901px)').addEventListener('change', function(m){ if(m.matches) set(false); });
})();
