(()=>{"use strict";const e=()=>!0,t=()=>[{date:"20 September 2023",time:"10:00",stadium:"Yeni Surakhani Stadium",region:"Baku",country:"Azerbaijan"},{date:"23 September 2023",time:"10:00",stadium:"Bina Stadium",region:"Baku",country:"Azerbaijan"}];(()=>{const a=e=>{document.getElementsByClassName("navigationBar")[0].childNodes.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")},n=()=>{const e=document.querySelector("main");e.replaceChildren(),e.textContent="home"},i=e=>{0==e?(()=>{const e=document.querySelector("header"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("a"),i=document.createElement("a"),d=document.createElement("img");t.classList.add("logo"),a.classList.add("logInAndRegister"),n.classList.add("logIn"),i.classList.add("register"),d.src="assets/images/logo.svg",n.textContent="Log in",i.textContent="Create a free account",n.href="#",i.href="#",t.appendChild(d),a.appendChild(n),a.appendChild(i),e.appendChild(t),e.appendChild(a)})():1==e&&(()=>{const e=document.querySelector("header"),i=document.createElement("div"),d=document.createElement("div"),o=document.createElement("button"),l=document.createElement("button"),r=document.createElement("button"),c=document.createElement("button"),s=document.createElement("div"),m=document.createElement("span"),u=document.createElement("p"),p=document.createElement("span"),h=document.createElement("p"),C=document.createElement("span"),E=document.createElement("p"),g=document.createElement("span"),b=document.createElement("p"),v=document.createElement("img");i.classList.add("logo"),d.classList.add("navigationBar"),s.classList.add("avatar"),m.classList.add("material-symbols-outlined"),p.classList.add("material-symbols-outlined"),C.classList.add("material-symbols-outlined"),g.classList.add("material-symbols-outlined"),m.textContent="home",p.textContent="sports_soccer",C.textContent="groups",g.textContent="settings",v.src="assets/images/logo.svg",u.textContent="Home",h.textContent="Games",E.textContent="Teams",b.textContent="Settings",s.textContent="Name Surname",o.addEventListener("click",(()=>{n(),a(o)})),l.addEventListener("click",(()=>{(()=>{const e=document.querySelector("main"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),o=document.createElement("form"),l=document.createElement("select");l.setAttribute("name","country"),l.setAttribute("required",!0),o.appendChild(l);const r=document.createElement("option");r.textContent="Please choose a country",r.setAttribute("value",""),l.appendChild(r),l.options[0].disabled=!0,["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","United States of America (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"].forEach((e=>{const t=document.createElement("option");t.setAttribute("value",e.toLowerCase()),t.textContent=e,l.appendChild(t)}));const c=document.createElement("label");c.textContent="Date:",o.appendChild(c);const s=document.createElement("input");s.setAttribute("type","date"),s.setAttribute("id","date"),s.setAttribute("name","date"),o.appendChild(s);const m=document.createElement("button");o.setAttribute("action","javascript:void(0);"),m.addEventListener("click",(()=>{})),m.textContent="Apply Filters",o.appendChild(m),t().forEach((e=>{const t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),l=document.createElement("button");a.textContent=e.date,n.textContent=e.time,i.textContent=e.stadium,o.textContent=e.region+", "+e.country,l.textContent="Join now",t.classList.add("result"),t.appendChild(a),t.appendChild(n),t.appendChild(i),t.appendChild(o),t.appendChild(l),d.appendChild(t)})),a.classList.add("games"),n.classList.add("searchBar"),d.classList.add("results"),i.classList.add("createGame"),e.replaceChildren(),n.appendChild(o),a.appendChild(n),a.appendChild(i),a.appendChild(d),e.appendChild(a)})(),a(l)})),r.addEventListener("click",(()=>{document.querySelector("main").replaceChildren(),a(r)})),c.addEventListener("click",(()=>{document.querySelector("main").replaceChildren(),a(c)})),i.appendChild(v),o.appendChild(m),o.appendChild(u),l.appendChild(p),l.appendChild(h),r.appendChild(C),r.appendChild(E),c.appendChild(g),c.appendChild(b),d.appendChild(o),d.appendChild(l),d.appendChild(r),d.appendChild(c),e.appendChild(i),e.appendChild(d),e.appendChild(s)})()};let d=e();return{updateBody:()=>{(()=>{const e=document.querySelector("head"),t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",e.appendChild(t)})(),i(d),(e=>{0==e?(()=>{const e=document.querySelector("main"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),m=document.createElement("h2"),u=document.createElement("p"),p=document.createElement("img"),h=document.createElement("h2"),C=document.createElement("p"),E=document.createElement("img"),g=document.createElement("h2"),b=document.createElement("p"),v=document.createElement("img");t.classList.add("overview"),d.classList.add("info"),o.classList.add("info"),l.classList.add("info"),m.textContent="A platform that brings flamboyance to football",u.textContent="Find games near you and play with strangers, or create your own team and compete",h.textContent="Unleash the beast",C.textContent="Compete and earn points to rank up your profile and be seen by everybody",g.textContent="Football has never been this easy",b.textContent="Achieve your dreams in three steps",p.src="assets/images/info-1.jpg",E.src="assets/images/info-2.jpg",v.src="assets/images/info-3.jpg",d.appendChild(m),d.appendChild(u),r.appendChild(p),o.appendChild(h),o.appendChild(C),c.appendChild(E),l.appendChild(g),l.appendChild(b),s.appendChild(v),a.appendChild(d),a.appendChild(r),n.appendChild(c),n.appendChild(o),i.appendChild(l),i.appendChild(s),t.appendChild(a),t.appendChild(n),t.appendChild(i),e.appendChild(t)})():1==e&&(()=>{n();const e=document.getElementsByClassName("navigationBar")[0].firstChild;a(e)})()})(d),(e=>{0==e?(()=>{const e=document.querySelector("footer"),t=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),i=document.createElement("h3"),d=document.createElement("div"),o=document.createElement("a"),l=document.createElement("a"),r=document.createElement("a"),c=document.createElement("h3"),s=document.createElement("div"),m=document.createElement("a"),u=document.createElement("a"),p=document.createElement("h3"),h=document.createElement("div"),C=document.createElement("a"),E=document.createElement("a"),g=document.createElement("i"),b=document.createElement("i");h.classList.add("social"),i.textContent="Tongoal",c.textContent="Help",p.textContent="Follow us",o.textContent="About us",o.href="#",l.textContent="Our services",l.href="#",r.textContent="Privacy policy",r.href="#",m.textContent="FAQ",m.href="#",u.textContent="Contact",u.href="#",C.href="#",E.href="#",C.appendChild(g),E.appendChild(b),d.appendChild(o),d.appendChild(l),d.appendChild(r),s.appendChild(m),s.appendChild(u),h.appendChild(C),h.appendChild(E),t.appendChild(i),t.appendChild(d),a.appendChild(c),a.appendChild(s),n.appendChild(p),n.appendChild(h),e.appendChild(t),e.appendChild(a),e.appendChild(n)})():1==e&&document.querySelector("footer").remove()})(d)}}})().updateBody()})();