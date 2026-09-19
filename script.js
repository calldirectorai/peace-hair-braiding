let currentPage='home';
function navigateTo(pg){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  var el=document.getElementById('page-'+pg);
  if(el)el.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l=>{l.classList.toggle('ac',l.dataset.page===pg)});
  currentPage=pg;window.scrollTo({top:0,behavior:'smooth'});
  document.getElementById('mt').classList.remove('open');document.getElementById('mm').classList.remove('open');document.body.style.overflow='';
  setTimeout(initReveals,100);
}
const n=document.getElementById('nav');window.addEventListener('scroll',()=>{n.classList.toggle('scrolled',window.scrollY>20)});
const t=document.getElementById('mt'),m=document.getElementById('mm');
t.addEventListener('click',()=>{t.classList.toggle('open');m.classList.toggle('open');document.body.style.overflow=m.classList.contains('open')?'hidden':''});
function initReveals(){const ob=new IntersectionObserver(e=>{e.forEach((x,i)=>{if(x.isIntersecting){setTimeout(()=>x.target.classList.add('v'),i*60);ob.unobserve(x.target)}})},{threshold:.08,rootMargin:'0px 0px -30px 0px'});document.querySelectorAll('.fu:not(.v)').forEach(e=>ob.observe(e));}
initReveals();