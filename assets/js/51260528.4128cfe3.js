"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[404],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3496:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},d="Middle C & Octave Offset",s={unversionedId:"going-further/middle-c",id:"going-further/middle-c",isDocsHomePage:!1,title:"Middle C & Octave Offset",description:"Default Value for Middle C",source:"@site/docs/going-further/middle-c.md",sourceDirName:"going-further",slug:"/going-further/middle-c",permalink:"/webmidi/docs/going-further/middle-c",editUrl:"https://github.com/djipco/webmidi/edit/develop/website/docs/going-further/middle-c.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/webmidi/docs/getting-started/installation"},next:{title:"Performance",permalink:"/webmidi/docs/going-further/performance"}},c=[{value:"Default Value for Middle C",id:"default-value-for-middle-c",children:[]},{value:"Offsetting Middle C",id:"offsetting-middle-c",children:[{value:"Inbound Note Example",id:"inbound-note-example",children:[]},{value:"Outbound Note Example",id:"outbound-note-example",children:[]}]},{value:"Offsetting Granularity",id:"offsetting-granularity",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"middle-c--octave-offset"},"Middle C & Octave Offset"),(0,r.kt)("h2",{id:"default-value-for-middle-c"},"Default Value for Middle C"),(0,r.kt)("p",null,"The general MIDI 1.0 specification does not explicitly define a pitch for middle C but it does\nconsider middle C to be note number 60. The ",(0,r.kt)("strong",{parentName:"p"},"MIDI Tuning Standard")," states that note number 69\nshould be tuned at 440Hz by default, which would also make middle C (60) to be C4. However,\ndifferent manufacturers have assigned middle C to various octaves/pitches (usually C3, C4 or C5)."),(0,r.kt)("p",null,"In accordance with the ",(0,r.kt)("strong",{parentName:"p"},"MIDI Tuning Standard")," and the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Scientific_pitch_notation"},(0,r.kt)("strong",{parentName:"a"},"scientific pitch notation")),", WebMidi.js\nconsiders middle C (261.626 Hz) to be C4 by default."),(0,r.kt)("h2",{id:"offsetting-middle-c"},"Offsetting Middle C"),(0,r.kt)("p",null,"You can offset the reported note name and octave by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"octaveOffset")," property of various\nobjects. This will make it easier to interface with devices that do not place middle C at C4."),(0,r.kt)("h3",{id:"inbound-note-example"},"Inbound Note Example"),(0,r.kt)("p",null,"If your external MIDI keyboard sends C3 and WebMidi.js reports it as C4, it is because your keyboard\nplaces middle C one octave lower than WebMidi.js does. To account for that, simply set\n",(0,r.kt)("inlineCode",{parentName:"p"},"WebMidi.octaveOffset")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),". This way, when your keyboard sends C3, WebMidi.js will also report\nit as C3."),(0,r.kt)("p",null,"In both cases the actual note number (60) remains the same. It is just being reported differently by\nWebMidi.js."),(0,r.kt)("h3",{id:"outbound-note-example"},"Outbound Note Example"),(0,r.kt)("p",null,"If you are sending F#4 to an external device and that device thinks it's receiving F#5, it means\nthat the external device places middle C one octave higher than WebMidi.js. In this case, set\n",(0,r.kt)("inlineCode",{parentName:"p"},"WebMidi.octaveOffset")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to account for the difference."),(0,r.kt)("h2",{id:"offsetting-granularity"},"Offsetting Granularity"),(0,r.kt)("p",null,"For most scenarios, setting the global ",(0,r.kt)("inlineCode",{parentName:"p"},"WebMidi.octaveOffset")," is enough. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"octaveOffset"),"\nproperty is available for several objects to allow for better granularity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/webmidi/api/classes/Input"},"Input")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/webmidi/api/classes/InputChannel"},"InputChannel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/webmidi/api/classes/Output"},"Output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/webmidi/api/classes/OutputChannel"},"OutputChannel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/webmidi/api/classes/Note"},"Note")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/webmidi/api/classes/WebMidi"},"WebMidi"))),(0,r.kt)("p",null,"If you define ",(0,r.kt)("inlineCode",{parentName:"p"},"octaveOffset")," on several objects, their value will be added. For example, if you\nset ",(0,r.kt)("inlineCode",{parentName:"p"},"WebMidi.octaveOffset")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"-1")," and set ",(0,r.kt)("inlineCode",{parentName:"p"},"octaveOffset")," on a specific channel to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", the\nresulting offset on that channel will be ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," (-1 + 1) while the offset on other channels will be\n",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."))}p.isMDXComponent=!0}}]);