(function(){
  var views=["info","skills","projets","contact"], btns=document.querySelectorAll("nav.pill button");
  function show(v){
    document.querySelector("header").classList.toggle("solo",v!=="work");
    btns.forEach(function(b){
      if(b.dataset.v===v)b.setAttribute("aria-current","page");else b.removeAttribute("aria-current");
    });
  }
  btns.forEach(function(b){b.addEventListener("click",function(){document.getElementById(b.dataset.v).scrollIntoView()})});
  var chips=document.querySelectorAll(".filters button"), rows=document.querySelectorAll(".projects .row");
  chips.forEach(function(c){c.addEventListener("click",function(){
    var k=c.dataset.k;
    chips.forEach(function(x){x.setAttribute("aria-pressed",x===c?"true":"false")});
    rows.forEach(function(r){r.hidden=(k!=="all"&&r.dataset.cat!==k)});
  })});
  var ids=["work"].concat(views), tick=false, cur="";
  function spy(){
    tick=false;
    var y=window.innerHeight*0.45, c=ids[0];
    ids.forEach(function(n){if(document.getElementById(n).getBoundingClientRect().top<=y)c=n});
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)c="contact";
    if(c!==cur){cur=c;show(c)}
  }
  window.addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(spy)}},{passive:true});
  window.addEventListener("resize",spy);
  var lang="fr", tr=[], EN={
    "Développeur full stack":"Full stack developer","Développeur full stack.":"Full stack developer.",
    "Projets":"Projects","Domaines":"Expertise","Mes domaines":"My expertise",
    "Je transforme mes idées en projets qui marchent, dans cinq domaines.":"I turn my ideas into projects that work, across five areas.",
    "Développement web":"Web development",
    "Développeur full stack : sites et applications web, comme ce portfolio et ma plateforme de chat.":"Full stack developer: websites and web apps, like this portfolio and my chat platform.",
    "Systèmes Linux":"Linux systems",
    "Un bureau et un dock façon macOS en Rust et GTK4, pensés pour Wayland.":"A macOS-style desktop and dock built in Rust and GTK4, designed for Wayland.",
    "Jeux Roblox":"Roblox games",
    "Création et scripting de jeux en Luau, comme mon jeu de minage avec détecteur de métaux.":"Building and scripting games in Luau, like my mining game with a metal detector.",
    "Électronique connectée":"Connected electronics",
    "Cartes Arduino, capteurs et automatisation, comme ma mini-serre qui arrose toute seule.":"Arduino boards, sensors and automation, like my mini greenhouse that waters itself.",
    "Applications Android":"Android apps",
    "Applications mobiles pour mon usage perso, comme mon lecteur de musique.":"Mobile apps for my own use, like my music player.","Tous":"All","Systèmes":"Systems","Jeux":"Games","Électronique":"Electronics","CV ↗":"Resume ↗",
    "Je développe des logiciels, des jeux & des":"I develop software, games &","systèmes.":"systems.",
    "De la personnalisation de bureaux Linux à l’électronique connectée, en passant par le développement de jeux sur Roblox.":"From customizing Linux desktops to connected electronics, and developing games on Roblox.",
    "Langages et technologies que j’utilise.":"Languages and technologies I use.",
    "Un bureau et un dock façon macOS pour Linux, avec une barre de menu et un dock traduits de MacOSDock.":"A macOS-style desktop and dock for Linux, with a menu bar and a dock ported from MacOSDock.",
    "Plateforme de chat":"Chat platform",
    "Une application de discussion en ligne avec communautés, salons et messages en temps réel.":"An online chat app with communities, channels and real-time messages.",
    "Temps réel":"Real time","Jeu de minage Roblox":"Roblox mining game",
    "Un détecteur de métaux pour miner sur Terre puis dans l’espace, avec zones, boutique, sac et Game Pass.":"A metal detector for mining on Earth, then in space, with zones, a shop, a bag and a Game Pass.",
    "Lecteur de musique":"Music player",
    "Une appli Android inspirée d’Amerigo, capable de télécharger une playlist entière.":"An Android app inspired by Amerigo, able to download a whole playlist at once.",
    "Mini-serre connectée":"Connected mini greenhouse",
    "Une serre qui mesure la température, l’humidité de l’air et du sol, et arrose toute seule.":"A greenhouse that measures air temperature, air humidity and soil moisture, and waters itself.",
    "Je suis développeur full stack et je transforme mes idées en projets qui marchent, du logiciel système aux jeux en passant par l’électronique.":"I’m a full stack developer, and I turn my ideas into projects that work, from system software to games to electronics.",
    "J’aime comprendre comment les choses fonctionnent en dessous, puis les rendre simples à utiliser.":"I like understanding how things work underneath, then making them simple to use.",
    "Langages":"Languages","Écris-moi sur l’une de ces plateformes.":"Message me on any of these platforms.",
    "Copier le pseudo":"Copy username","Voir le profil":"View profile"
  };
  var tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT), tn;
  while((tn=tw.nextNode())){var tt=tn.nodeValue.trim();if(EN[tt])tr.push({n:tn,fr:tn.nodeValue,k:tt})}
  var lb=document.getElementById("lang");
  function setLang(l){
    lang=l;
    tr.forEach(function(o){o.n.nodeValue=lang==="en"?o.fr.replace(o.k,EN[o.k]):o.fr});
    document.documentElement.lang=lang;
    document.title=lang==="en"?"mhmed9073 — Full stack developer":"mhmed9073 — Développeur full stack";
    lb.querySelectorAll("button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l===lang?"true":"false")});
  }
  lb.querySelectorAll("button").forEach(function(b){b.addEventListener("click",function(){if(b.dataset.l!==lang)setLang(b.dataset.l)})});
  var PD={
    astra:{fr:{t:"AstraOS",d:"Un environnement de bureau pour Linux, avec un bureau et un dock inspirés de macOS.",p:["Bureau avec fond d’écran et icônes (astra-shell)","Dock façon macOS (astra-dock), écrit en Rust avec GTK4 et gtk4-layer-shell","Dock traduit du projet MacOSDock, à l’origine en TypeScript pour GNOME","Cible : le compositeur Wayfire"],g:["Rust","GTK4","Wayfire"]},
      en:{t:"AstraOS",d:"A desktop environment for Linux, with a macOS-inspired desktop and dock.",p:["Desktop with wallpaper and icons (astra-shell)","macOS-style dock (astra-dock), written in Rust with GTK4 and gtk4-layer-shell","Dock ported from the MacOSDock project, originally TypeScript for GNOME","Target: the Wayfire compositor"],g:["Rust","GTK4","Wayfire"]}},
    chat:{fr:{t:"Plateforme de chat",d:"Une application de discussion en ligne, pensée autour de trois idées.",p:["Des communautés qui regroupent des salons","Des salons de discussion","Des messages en temps réel"],g:["Web","Temps réel"]},
      en:{t:"Chat platform",d:"An online chat app built around three ideas.",p:["Communities that group channels","Discussion channels","Real-time messages"],g:["Web","Real time"]}},
    roblox:{fr:{t:"Jeu de minage Roblox",d:"Un jeu de minage avec détecteur de métaux, de la Terre jusqu’à l’espace. Projet en cours.",p:["On trouve les minerais avec un détecteur de métaux, puis on les mine à la pioche","Progression de la Terre vers l’espace : une fois la fusée achetée, on apparaît directement dans l’espace","Les joueurs gratuits ne sont jamais bloqués : le payant sert à gagner du temps","Stand de vente sur Terre et sac dont la capacité s’améliore","Pioche et détecteur dont les caractéristiques changent selon le niveau","Zones sur Terre : Forêt en cours, puis Désert et Montagne","Modèles 3D générés avec Meshy pour la pioche, le détecteur et la fusée"],g:["Roblox Studio","Luau"]},
      en:{t:"Roblox mining game",d:"A mining game with a metal detector, from Earth all the way to space. Work in progress.",p:["Find ores with a metal detector, then mine them with a pickaxe","Progress from Earth to space: once the rocket is bought, you spawn straight in space","Free players are never blocked: paying only saves time","A sell stand on Earth and a bag with upgradable capacity","Pickaxe and detector stats change with their level","Zones on Earth: Forest in progress, then Desert and Mountain","3D models generated with Meshy for the pickaxe, the detector and the rocket"],g:["Roblox Studio","Luau"]}},
    music:{fr:{t:"Lecteur de musique",d:"Une appli Android de lecteur de musique pour mon usage perso, inspirée d’Amerigo.",p:["Télécharger une playlist entière d’un coup","Cible : Android (d’abord pensée pour iPhone)","Usage personnel uniquement"],g:["Android","Mobile"]},
      en:{t:"Music player",d:"An Android music player app for my own use, inspired by Amerigo.",p:["Download a whole playlist at once","Target: Android (first designed for iPhone)","Personal use only"],g:["Android","Mobile"]}},
    serre:{fr:{t:"Mini-serre connectée",d:"Un système autonome qui surveille la serre et arrose quand il le faut.",p:["Mesure de la température et de l’humidité de l’air (DHT11)","Affichage sur un écran LCD I2C 1602","Arrosage par mini pompe quand le sol est trop sec (capteur d’humidité capacitif)","Carte Arduino Uno R4, simulation préalable sous Proteus","Prévu ensuite : mesure de la luminosité et trappe pivotante"],g:["Arduino Uno R4","Proteus"]},
      en:{t:"Connected mini greenhouse",d:"A standalone system that monitors the greenhouse and waters it when needed.",p:["Measures air temperature and humidity (DHT11)","Shows readings on an I2C 1602 LCD","Waters with a mini pump when the soil is too dry (capacitive moisture sensor)","Arduino Uno R4 board, simulated beforehand in Proteus","Planned next: light measurement and a pivoting hatch"],g:["Arduino Uno R4","Proteus"]}}
  };
  var mo=document.getElementById("modal"), lastF=null;
  function openP(id){
    var d=PD[id][lang];
    document.getElementById("mt").textContent=d.t;
    document.getElementById("md").textContent=d.d;
    var ul=document.getElementById("ml");ul.textContent="";
    d.p.forEach(function(x){var li=document.createElement("li");li.textContent=x;ul.appendChild(li)});
    var tg=document.getElementById("mtags");tg.textContent="";
    d.g.forEach(function(x){var s=document.createElement("span");s.textContent=x;tg.appendChild(s)});
    document.getElementById("mclose").setAttribute("aria-label",lang==="en"?"Close":"Fermer");
    lastF=document.activeElement;mo.classList.add("open");document.documentElement.style.overflow="hidden";
    document.getElementById("mclose").focus();
  }
  function closeP(){mo.classList.remove("open");document.documentElement.style.overflow="";if(lastF)lastF.focus()}
  document.querySelectorAll(".projects .row").forEach(function(r){r.addEventListener("click",function(e){e.preventDefault();openP(r.dataset.p)})});
  mo.addEventListener("click",function(e){if(e.target===mo)closeP()});
  document.getElementById("mclose").addEventListener("click",closeP);
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&mo.classList.contains("open"))closeP()});
  spy();
  document.querySelectorAll(".copy").forEach(function(cp){
  cp.addEventListener("click",function(){
    var t=cp.dataset.copy;
    function ok(){cp.firstChild.nodeValue=lang==="en"?"Copied!":"Copié !";setTimeout(function(){cp.firstChild.nodeValue=lang==="en"?"Copy username":"Copier le pseudo"},1800)}
    function fb(){var a=document.createElement("textarea");a.value=t;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();try{document.execCommand("copy");ok()}catch(e){}document.body.removeChild(a)}
    if(navigator.clipboard){navigator.clipboard.writeText(t).then(ok,fb)}else fb();
  });
  });
})();
