(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2700:function(e,t,l){Promise.resolve().then(l.bind(l,4135)),Promise.resolve().then(l.bind(l,5447)),Promise.resolve().then(l.bind(l,1605)),Promise.resolve().then(l.t.bind(l,8173,23))},4135:function(e,t,l){"use strict";l.d(t,{Formular:function(){return o}});var a=l(7437),s=l(393),n=l.n(s),i=l(2265),r=l(1572);function o(){let[e,t]=(0,i.useState)(!1),[l,s]=(0,i.useState)(!1),[o,c]=(0,i.useState)("Message Envoyer !"),d=(0,i.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[e?(0,a.jsx)(u,{onClick:()=>t(!1),msg:o}):null,(0,a.jsxs)("form",{ref:d,onSubmit:e=>{e.preventDefault(),s(!0),r.ZP.sendForm("service_dvb34wj","template_qhr7vid",d.current,{publicKey:"XwTV50ELg7ZkRXYAG"}).then(()=>{c("Message Envoyer !"),t(!0),s(!1),console.log("SUCCESS!")},e=>{c("Erreur lors de l'envoi du message. Veuillez r\xe9essayer plus tard."),t(!0),s(!1),console.log("FAILED...",e.text)})},className:"flex h-full flex-col gap-4 xl:gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-between gap-2 xl:flex-row xl:gap-6",children:[(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{className:"whitespace-nowrap text-sm xl:text-xl",htmlFor:"email",children:"Email :"}),(0,a.jsx)("input",{type:"email",name:"email",id:"email",required:!0,className:"".concat(n().inputcolor," mt-2 w-full rounded bg-wmauve-2 p-1 text-base outline outline-2 outline-wmauve-4 focus:outline-wmauve-11 xl:p-2 xl:text-xl dark:outline-mauve-6 dark:focus:outline-mauve-11")})]}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{className:"whitespace-nowrap text-sm xl:text-xl",htmlFor:"name",children:"Nom complet :"}),(0,a.jsx)("input",{type:"text",name:"name",id:"name",required:!0,className:"".concat(n().inputcolor," mt-2 w-full rounded bg-wmauve-2 p-1 text-base outline outline-2 outline-wmauve-4 focus:outline-wmauve-11 xl:p-2 xl:text-xl dark:outline-mauve-6 dark:focus:outline-mauve-11")})]})]}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{className:"whitespace-nowrap text-sm xl:text-xl",htmlFor:"objet",children:"Objet :"}),(0,a.jsx)("input",{type:"text",name:"objet",id:"objet",required:!0,className:"".concat(n().inputcolor," mt-2 w-full rounded bg-wmauve-2 p-1 text-base outline outline-2 outline-wmauve-4 focus:outline-wmauve-11 xl:p-2 xl:text-xl dark:outline-mauve-6 dark:focus:outline-mauve-11")})]}),(0,a.jsxs)("div",{className:"flex h-full flex-col",children:[(0,a.jsx)("label",{className:"whitespace-nowrap text-sm xl:text-xl",htmlFor:"message",children:"Message :"}),(0,a.jsx)("textarea",{name:"message",id:"message",required:!0,className:"".concat(n().inputcolor," xl:min-h-auto mt-2 h-full min-h-28 w-full resize-none rounded bg-wmauve-2 p-1 text-base outline outline-2 outline-wmauve-4 focus:outline-wmauve-11 xl:p-2 xl:text-xl dark:outline-mauve-6 dark:focus:outline-mauve-11")})]}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{type:"submit",className:"mb-2 rounded bg-wmauve-9 p-1 px-24 py-2 text-base text-wmauve-1 xl:mb-6 xl:text-2xl dark:bg-mauve-9",children:l?"Envoi...":"Envoyer"})})]})]})}function u(e){let{msg:t,onClick:l}=e;return(0,a.jsx)("div",{className:"absolute z-50 flex h-full w-full items-center justify-center",children:(0,a.jsxs)("div",{className:"flex h-3/5 w-3/5 flex-col items-center justify-between rounded border-2 border-wmauve-6 bg-wmauve-4 p-12 shadow-[0_10px_30px_0px_rgba(0,0,0,1)] dark:border-mauve-6 dark:bg-mauve-4",children:[(0,a.jsx)("h3",{className:"text text-2xl xl:text-4xl",children:t}),(0,a.jsx)("button",{className:"rounded bg-wmauve-9 p-6 py-2 xl:px-24 dark:bg-mauve-9",onClick:l,children:"OK"})]})})}},5447:function(e,t,l){"use strict";l.d(t,{GridTechno:function(){return p}});var a=l(8646),s=l(7437),n=l(6159),i=l.n(n),r=l(6594),o=l(9183);function u(){let e=(0,a._)(["\nfrom {\n  right: ","px;\n}\nto {\n  right: -","px;\n}\n"]);return u=function(){return e},e}function c(){let e=(0,a._)(["\n  animation: "," linear infinite;\n"]);return c=function(){return e},e}let d=l(2483).C,m=l(2483).A,x=[0,1,2,3,4],h=[0,1],v=(0,o.F4)(u(),((d.length+1)*192+16*d.length)/4,((d.length+1)*192+16*d.length)/4),f=o.ZP.div(c(),v);function p(){return(0,s.jsxs)("div",{className:"relative flex h-[75vh] w-full flex-col items-center justify-evenly gap-4 overflow-hidden rounded-3xl bg-wmauve-3 xl:h-[650px] xl:p-8 dark:bg-mauve-3",children:[(0,s.jsx)(b,{}),x.map(e=>(!function(e){for(let t=e.length-1;t>0;t--){let l=Math.floor(Math.random()*(t+1));[e[t],e[l]]=[e[l],e[t]]}}(d),(0,s.jsx)(f,{className:"relative flex flex-nowrap justify-between gap-4",style:{animationDuration:"".concat(Math.floor(30*Math.random())+10,"s"),animationDelay:"".concat(Math.floor(30*Math.random())-31,"s"),animationDirection:"".concat(1&e?"reverse":null)},children:h.map(()=>d.map((e,t)=>(0,s.jsx)(r.j,{className:"size-24",techno:e},e+t)))},e)))]})}function b(){return(0,s.jsx)("div",{className:"".concat(i().bghover," absolute z-30 flex h-full w-full items-center justify-center p-4 transition-all xl:text-2xl"),children:(0,s.jsx)("div",{className:"flex flex-col divide-y divide-wmauve-12 xl:flex-row xl:divide-x xl:divide-y-0 dark:divide-mauve-12",children:m.map(e=>(0,s.jsxs)("div",{className:"py-4 xl:px-12 xl:py-0",children:[(0,s.jsxs)("h3",{className:"text-xl font-semibold xl:mb-2 xl:text-3xl",children:[e.zone," :"]}),(0,s.jsx)("ul",{children:e.technos.map(t=>(0,s.jsx)("li",{children:t},"".concat(e.zone,"_").concat(t)))})]},e.zone))})})}},1605:function(e,t,l){"use strict";l.d(t,{Cards:function(){return x}});var a=l(7437),s=l(6648);function n(e){let{className:t}=e;return(0,a.jsx)(s.default,{src:"/arrow.svg",width:30,height:30,alt:"arrow",className:t})}var i=l(2265),r=l(7138),o=l(6594),u=l(612),c=l.n(u);let d=l(1579)._;function m(e){let{title:t,description:l,technos:n,img:i,imgMobile:u,alt:d,link:m,position:x,github:h,id:v}=e;return(0,a.jsxs)("div",{className:"".concat(x," card-movement relative mx-3 h-[690px] max-h-[82vh] w-full overflow-hidden rounded-3xl bg-wmauve-3 object-cover shadow-2xl xl:min-w-[1256px] dark:border-none dark:bg-mauve-3 dark:shadow-none"),children:[(0,a.jsxs)(r.default,{href:m,className:"absolute h-full w-full",children:[(0,a.jsx)(s.default,{src:i,alt:d,fill:!0,className:"absolute hidden object-cover object-center min-[850px]:block xl:w-[1080px]"}),(0,a.jsx)(s.default,{src:u,alt:d,fill:!0,className:"absolute object-cover object-left-top min-[850px]:hidden xl:w-[1080px]"})]}),(0,a.jsxs)("div",{className:"".concat(c().textshadow," absolute bottom-0 flex h-1/4 w-full justify-between bg-wmauve-2 p-5 opacity-90 xl:p-5 dark:bg-mauve-4"),children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{className:"text-base font-medium xl:text-3xl",children:[t," :"]}),(0,a.jsx)("p",{className:"text-xs xl:text-xl",children:l})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mb-2 grid min-w-max grid-flow-row grid-cols-2 gap-1 xl:mb-0 xl:grid-cols-4 xl:grid-rows-2 xl:gap-3",dir:"rtl",children:n.map(e=>(0,a.jsx)(o.j,{techno:e,className:"size-9 xl:size-12"},e+v))}),(0,a.jsx)(r.default,{href:h,className:"block w-full whitespace-nowrap text-right text-indigo-400 underline",children:"lien github"})]})]})]})}function x(){let[e,t]=(0,i.useState)(1),[l,s]=(0,i.useState)("left-[0px]");(0,i.useEffect)(()=>{switch(e){case 0:s("xl:left-[1312px]");break;case 1:s("xl:left-[0px]");break;case 2:s("xl:left-[-1312px]")}},[e]);let r=l=>{t(e+l),0===e&&-1===l?t(2):2===e&&1===l&&t(0)};return(0,a.jsxs)("div",{className:"relative m-3 xl:m-0",children:[(0,a.jsx)("div",{className:"absolute flex h-full w-full items-center justify-center",children:(0,a.jsxs)("div",{className:"absolute flex h-full w-full items-center justify-between xl:max-w-[1280px]",children:[(0,a.jsx)("div",{onClick:()=>r(-1),className:"relative z-10 m-24 hidden h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1px] border-wmauve-7 xl:flex dark:border-mauve-7",children:(0,a.jsx)(n,{className:"relative right-1 z-10 h-full min-w-48 rotate-180 bg-wmauve-4/30 p-5 transition-colors hover:bg-wmauve-5 active:bg-wmauve-8 dark:bg-mauve-4/30 dark:hover:bg-mauve-6 dark:active:bg-mauve-8"})}),(0,a.jsx)("div",{onClick:()=>r(1),className:"relative z-10 m-24 hidden h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border-[1px] border-wmauve-7 xl:flex dark:border-mauve-7",children:(0,a.jsx)(n,{className:"relative left-1 z-10 h-full min-w-48 bg-wmauve-4/30 p-5 transition-colors hover:bg-wmauve-5 active:bg-wmauve-8 dark:bg-mauve-4/30 dark:hover:bg-mauve-6 dark:active:bg-mauve-8"})})]})}),(0,a.jsx)("div",{className:"flex flex-col items-center justify-center gap-8 overflow-x-clip xl:flex-row",children:d.map((e,t)=>(0,a.jsx)(m,{position:l,link:e.link,title:e.title,description:e.description,technos:e.technos,img:e.img,imgMobile:e.imgMobile,alt:e.alt,github:e.github,id:t},e.title))})]})}},6594:function(e,t,l){"use strict";l.d(t,{j:function(){return n}});var a=l(7437),s=l(6648);function n(e){let{techno:t,className:l}=e;return(0,a.jsx)("div",{className:"".concat(l," relative flex items-center justify-center rounded-full border-[1px] border-wmauve-7 bg-wmauve-5 dark:border-mauve-7 dark:bg-mauve-5"),children:(0,a.jsx)(s.default,{fill:!0,src:"/techno/".concat(t,".svg"),alt:t,className:"p-2"})})}},393:function(e){e.exports={inputcolor:"formulaire_inputcolor__4a8TC"}},6159:function(e){e.exports={bghover:"animation-techno_bghover__ToI2q"}},612:function(e){e.exports={textshadow:"card_textshadow__lbkks"}},2483:function(e){"use strict";e.exports=JSON.parse('{"C":["redux","react","nextjs","sass","tailwind","typescript","html","css","vite","react-router","lighthouse","javascript"],"A":[{"zone":"Front-end","technos":["HTML","React","Redux","React Router"]},{"zone":"Back-end","technos":["NextJS"]},{"zone":"CSS","technos":["CSS","Sass","Tailwind"]},{"zone":"Autre","technos":["SEO","Javascript","Typescript"]}]}')},1579:function(e){"use strict";e.exports=JSON.parse('{"_":[{"title":"Responsive IMG","description":"Responsive img permet de cr\xe9er plusieurs r\xe9solutions d\'une m\xeame image tr\xe8s rapidement et de les convertir au format WEBP.","img":"/works-image/responsive-img.png","imgMobile":"/works-image/responsive-img-mobile.png","alt":"Responsive IMG","technos":["redux","react","nextjs","typescript"],"github":"https://github.com/Amlac-Eniotna/responsive_img","link":"https://responsive-img.com"},{"title":"G\xeetes - Villa \'nduzienne","description":"Site vitrine pour un g\xeetes dans les alentours d\'Anduze","img":"/works-image/villaanduze.png","imgMobile":"/works-image/villaanduze-mobile.png","alt":"Villa Anduzienne","technos":["html","sass","javascript"],"github":"https://github.com/Amlac-Eniotna/Gites-Octet","link":"https://villaanduze.fr/"},{"title":"titrec","description":"cblablabla","img":"/image.png","imgMobile":"/image.png","alt":"titre du site","technos":["redux","react","nextjs"],"github":"#","link":"#"}]}')}},function(e){e.O(0,[678,138,717,971,23,744],function(){return e(e.s=2700)}),_N_E=e.O()}]);