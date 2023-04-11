(()=>{"use strict";const e=()=>!0,t=()=>[{date:"20 September 2023",time:"10:00",stadium:"Yeni Surakhani Stadium",region:"Baku",country:"Azerbaijan"},{date:"23 September 2023",time:"10:00",stadium:"Bina Stadium",region:"Baku",country:"Azerbaijan"}],a=()=>[{name:"Vehwiler",manager:"Furfur",country:"Azerbaijan"},{name:"Keleler",manager:"Furfur",country:"Azerbaijan"},{name:"Kelemler",manager:"Furfur",country:"Azerbaijan"}];(()=>{const n=e=>{document.getElementsByClassName("navigationBar")[0].childNodes.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")},d=()=>{const e=document.querySelector("main");e.replaceChildren(),e.textContent="home"},i=e=>{0==e?(()=>{const e=document.querySelector("header"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("a"),d=document.createElement("a"),i=document.createElement("img");t.classList.add("logo"),a.classList.add("logInAndRegister"),n.classList.add("logIn"),d.classList.add("register"),i.src="assets/images/logo.svg",n.textContent="Log in",d.textContent="Create a free account",n.href="#",d.href="#",t.appendChild(i),a.appendChild(n),a.appendChild(d),e.appendChild(t),e.appendChild(a)})():1==e&&(()=>{const e=document.querySelector("header"),i=document.createElement("div"),o=document.createElement("div"),l=document.createElement("button"),r=document.createElement("button"),c=document.createElement("button"),s=document.createElement("button"),m=document.createElement("div"),u=document.createElement("span"),p=document.createElement("p"),h=document.createElement("span"),C=document.createElement("p"),E=document.createElement("span"),g=document.createElement("p"),b=document.createElement("span"),v=document.createElement("p"),y=document.createElement("img");i.classList.add("logo"),o.classList.add("navigationBar"),m.classList.add("avatar"),u.classList.add("material-symbols-outlined"),h.classList.add("material-symbols-outlined"),E.classList.add("material-symbols-outlined"),b.classList.add("material-symbols-outlined"),u.textContent="home",h.textContent="sports_soccer",E.textContent="groups",b.textContent="settings",y.src="assets/images/logo.svg",p.textContent="Home",C.textContent="Games",g.textContent="Teams",v.textContent="Settings",m.textContent="Name Surname",l.addEventListener("click",(()=>{d(),n(l)})),r.addEventListener("click",(()=>{(()=>{const e=document.querySelector("main"),a=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),o=document.createElement("form"),l=document.createElement("select");l.setAttribute("name","country"),l.setAttribute("required",!0);const r=document.createElement("option");r.textContent="Please choose a country",r.setAttribute("value",""),l.appendChild(r),l.options[0].disabled=!0,["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"].forEach((e=>{const t=document.createElement("option");t.setAttribute("value",e.toLowerCase()),t.textContent=e,l.appendChild(t)}));const c=document.createElement("label");c.textContent="Date:";const s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("id","date"),s.setAttribute("name","date");const m=document.createElement("button");o.setAttribute("action","javascript:void(0);"),m.addEventListener("click",(()=>{})),m.textContent="Apply Filters",t().forEach((e=>{const t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),l=document.createElement("button");a.textContent=e.date,n.textContent=e.time,d.textContent=e.stadium,o.textContent=e.region+", "+e.country,l.textContent="Join now",t.classList.add("result"),t.appendChild(a),t.appendChild(n),t.appendChild(d),t.appendChild(o),t.appendChild(l),i.appendChild(t)})),a.classList.add("games"),n.classList.add("searchBar"),i.classList.add("results"),d.classList.add("createGame"),e.replaceChildren(),o.appendChild(l),o.appendChild(c),o.appendChild(s),o.appendChild(m),n.appendChild(o),a.appendChild(n),a.appendChild(d),a.appendChild(i),e.appendChild(a)})(),n(r)})),c.addEventListener("click",(()=>{(()=>{const e=document.querySelector("main"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),o=document.createElement("input");o.setAttribute("placeholder","Search for teams..."),o.addEventListener("keyup",(()=>{i.childNodes.forEach((e=>{e.childNodes[0].textContent.toUpperCase().indexOf(o.value.toUpperCase())>-1?e.style.display="":e.style.display="none"}))})),a().forEach((e=>{const t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("button");a.textContent=e.name,n.textContent=e.manager,d.textContent=e.country,o.textContent="Join now",t.classList.add("result"),t.appendChild(a),t.appendChild(n),t.appendChild(d),t.appendChild(o),i.appendChild(t)})),t.classList.add("teams"),n.classList.add("searchBar"),i.classList.add("results"),d.classList.add("createTeam"),o.classList.add("searchBarInput"),e.replaceChildren(),n.appendChild(o),t.appendChild(n),t.appendChild(d),t.appendChild(i),e.appendChild(t)})(),n(c)})),s.addEventListener("click",(()=>{document.querySelector("main").replaceChildren(),n(s)})),i.appendChild(y),l.appendChild(u),l.appendChild(p),r.appendChild(h),r.appendChild(C),c.appendChild(E),c.appendChild(g),s.appendChild(b),s.appendChild(v),o.appendChild(l),o.appendChild(r),o.appendChild(c),o.appendChild(s),e.appendChild(i),e.appendChild(o),e.appendChild(m)})()};let o=e();return{updateBody:()=>{(()=>{const e=document.querySelector("head"),t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",e.appendChild(t)})(),i(o),(e=>{0==e?(()=>{const e=document.querySelector("main"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),m=document.createElement("h2"),u=document.createElement("p"),p=document.createElement("img"),h=document.createElement("h2"),C=document.createElement("p"),E=document.createElement("img"),g=document.createElement("h2"),b=document.createElement("p"),v=document.createElement("img");t.classList.add("overview"),i.classList.add("info"),o.classList.add("info"),l.classList.add("info"),m.textContent="A platform that brings flamboyance to football",u.textContent="Find games near you and play with strangers, or create your own team and compete",h.textContent="Unleash the beast",C.textContent="Compete and earn points to rank up your profile and be seen by everybody",g.textContent="Football has never been this easy",b.textContent="Achieve your dreams in three steps",p.src="assets/images/info-1.jpg",E.src="assets/images/info-2.jpg",v.src="assets/images/info-3.jpg",i.appendChild(m),i.appendChild(u),r.appendChild(p),o.appendChild(h),o.appendChild(C),c.appendChild(E),l.appendChild(g),l.appendChild(b),s.appendChild(v),a.appendChild(i),a.appendChild(r),n.appendChild(c),n.appendChild(o),d.appendChild(l),d.appendChild(s),t.appendChild(a),t.appendChild(n),t.appendChild(d),e.appendChild(t)})():1==e&&(()=>{d();const e=document.getElementsByClassName("navigationBar")[0].firstChild;n(e)})()})(o),(e=>{0==e?(()=>{const e=document.querySelector("footer"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),d=document.createElement("h3"),i=document.createElement("div"),o=document.createElement("a"),l=document.createElement("a"),r=document.createElement("a"),c=document.createElement("h3"),s=document.createElement("div"),m=document.createElement("a"),u=document.createElement("a"),p=document.createElement("h3"),h=document.createElement("div"),C=document.createElement("a"),E=document.createElement("a"),g=document.createElement("i"),b=document.createElement("i");h.classList.add("social"),d.textContent="Tongoal",c.textContent="Help",p.textContent="Follow us",o.textContent="About us",o.href="#",l.textContent="Our services",l.href="#",r.textContent="Privacy policy",r.href="#",m.textContent="FAQ",m.href="#",u.textContent="Contact",u.href="#",C.href="#",E.href="#",C.appendChild(g),E.appendChild(b),i.appendChild(o),i.appendChild(l),i.appendChild(r),s.appendChild(m),s.appendChild(u),h.appendChild(C),h.appendChild(E),t.appendChild(d),t.appendChild(i),a.appendChild(c),a.appendChild(s),n.appendChild(p),n.appendChild(h),e.appendChild(t),e.appendChild(a),e.appendChild(n)})():1==e&&document.querySelector("footer").remove()})(o)}}})().updateBody()})();