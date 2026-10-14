import{a as m,S as g,i as o}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="58027873-0f60407f98d7447dcb5a9b541",h="https://pixabay.com/api/";function b(a){return m.get(h,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),d=document.querySelector(".loading"),f=new g(".gallery a",{captionsData:"alt",captionDelay:250}),c=a=>String(a).replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[r]),L=({webformatURL:a,largeImageURL:r,tags:s,likes:n,views:e,comments:t,downloads:i})=>`
  <li class="gallery-card">
    <a class="gallery-link" href="${c(r)}">
      <img class="gallery-image" src="${c(a)}"
        alt="${c(s)}" width="360" height="200" />
    </a>
    <ul class="additional-info">
      <li><p>Likes</p><span>${Number(n)}</span></li>
      <li><p>Views</p><span>${Number(e)}</span></li>
      <li><p>Comments</p><span>${Number(t)}</span></li>
      <li><p>Downloads</p><span>${Number(i)}</span></li>
    </ul>
  </li>
`;function q(a){l.insertAdjacentHTML("beforeend",a.map(L).join("")),f.refresh()}function S(){l.innerHTML="",f.refresh()}function w(){d.hidden=!1,l.setAttribute("aria-busy","true")}function N(){d.hidden=!0,l.setAttribute("aria-busy","false")}o.settings({timeout:5e3,position:"topRight"});const p=document.querySelector(".form"),u=p.querySelector("button");p.addEventListener("submit",a=>{if(a.preventDefault(),u.disabled)return;const r=a.currentTarget.elements["search-text"].value.trim();if(!r){o.warning({message:"Please enter a search query."});return}S(),w(),u.disabled=!0,b(r).then(({hits:s})=>{if(s.length===0){o.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}q(s)}).catch(()=>{o.error({message:"Unable to load images. Please try again later."})}).finally(()=>{N(),u.disabled=!1})});
//# sourceMappingURL=index.js.map
