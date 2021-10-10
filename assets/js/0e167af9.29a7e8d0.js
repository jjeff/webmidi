"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[327],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return s}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),N=o(n),s=l,d=N["".concat(m,".").concat(s)]||N[s]||u[s]||i;return n?a.createElement(d,r(r({ref:t},k),{},{components:n})):a.createElement(d,r({ref:t},k))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=N;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},3576:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return k},default:function(){return N}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],p={},m="Enumerations",o={unversionedId:"classes/Enumerations",id:"classes/Enumerations",isDocsHomePage:!1,title:"Enumerations",description:"The Enumerations class contains enumerations of elements used throughout the library. All",source:"@site/api/classes/Enumerations.md",sourceDirName:"classes",slug:"/classes/Enumerations",permalink:"/webmidi/api/classes/Enumerations",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API Documentation",permalink:"/webmidi/api/index"},next:{title:"Input",permalink:"/webmidi/api/classes/Input"}},k=[{value:"Enums",id:"enums",children:[{value:"<code>.MIDI_CHANNEL_MESSAGES</code>",id:"midi_channel_messages",children:[]},{value:"<code>.MIDI_CHANNEL_MODE_MESSAGES</code>",id:"midi_channel_mode_messages",children:[]},{value:"<code>.MIDI_CONTROL_CHANGE_MESSAGES</code>",id:"midi_control_change_messages",children:[]},{value:"<code>.MIDI_REGISTERED_PARAMETERS</code>",id:"midi_registered_parameters",children:[]},{value:"<code>.MIDI_SYSTEM_MESSAGES</code>",id:"midi_system_messages",children:[]}]}],u={toc:k};function N(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enumerations"},"Enumerations"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Enumerations")," class contains enumerations of elements used throughout the library. All\nenumerations are static and should be referenced using the class name. For example:\n",(0,i.kt)("inlineCode",{parentName:"p"},"Enumerations.MIDI_CHANNEL_MESSAGES"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since"),": 3.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"enums"},"Enums"),(0,i.kt)("h3",{id:"midi_channel_messages"},(0,i.kt)("inlineCode",{parentName:"h3"},".MIDI_CHANNEL_MESSAGES")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": Object.","<","string, number",">"),(0,i.kt)("p",null,"Enumeration of all MIDI channel messages and their associated 4-bit numerical value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"noteoff"),": 0x8 (8)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"noteon"),": 0x9 (9)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyaftertouch"),": 0xA (10)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"controlchange"),": 0xB (11)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nrpn"),": 0xB (11)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"programchange"),": 0xC (12)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"channelaftertouch"),": 0xD (13)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitchbend"),": 0xE (14)")),(0,i.kt)("h3",{id:"midi_channel_mode_messages"},(0,i.kt)("inlineCode",{parentName:"h3"},".MIDI_CHANNEL_MODE_MESSAGES")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": Object.","<","string, number",">"),(0,i.kt)("p",null,"Enumeration of all channel mode messages and their associated numerical value:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allsoundoff"),": 120"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"resetallcontrollers"),": 121"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"localcontrol"),": 122"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allnotesoff"),": 123"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"omnimodeoff"),": 124"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"omnimodeon"),": 125"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"monomodeon"),": 126"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"polymodeon"),": 127")),(0,i.kt)("h3",{id:"midi_control_change_messages"},(0,i.kt)("inlineCode",{parentName:"h3"},".MIDI_CONTROL_CHANGE_MESSAGES")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": Object.","<","string, number",">"),(0,i.kt)("p",null,"Enumeration of most control change messages and their associated numerical value. Note that\nsome control change numbers do not have a predefined purpose and are absent from this list."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bankselectcoarse"),": 0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modulationwheelcoarse"),": 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"breathcontrollercoarse"),": 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"footcontrollercoarse"),": 4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"portamentotimecoarse"),": 5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dataentrycoarse"),": 6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"volumecoarse"),": 7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"balancecoarse"),": 8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"pancoarse"),": 10")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"expressioncoarse"),": 11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"effectcontrol1coarse"),": 12")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"effectcontrol2coarse"),": 13")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generalpurposeslider1"),": 16")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generalpurposeslider2"),": 17")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generalpurposeslider3"),": 18")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generalpurposeslider4"),": 19")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bankselectfine"),": 32")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modulationwheelfine"),": 33")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"breathcontrollerfine"),": 34")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"footcontrollerfine"),": 36")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"portamentotimefine"),": 37")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"dataentryfine"),": 38")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"volumefine"),": 39")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"balancefine"),": 40")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"panfine"),": 42")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"expressionfine"),": 43")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"effectcontrol1fine"),": 44")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"effectcontrol2fine"),": 45")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"holdpedal"),": 64")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"portamento"),": 65")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"sustenutopedal"),": 66")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"softpedal"),": 67")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"legatopedal"),": 68")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"hold2pedal"),": 69")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"soundvariation"),": 70")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"resonance"),": 71")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"soundreleasetime"),": 72")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"soundattacktime"),": 73")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"brightness"),": 74")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"soundcontrol6"),": 75")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"soundcontrol7"),": 76")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"soundcontrol8"),":`77")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"soundcontrol9"),": 78")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"soundcontrol10"),": 79")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generalpurposebutton1"),": 80")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generalpurposebutton2"),": 81")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generalpurposebutton3"),": 82")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"generalpurposebutton4"),": 83")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"reverblevel"),": 91")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tremololevel"),": 92")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"choruslevel"),": 93")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"celestelevel"),": 94")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"phaserlevel"),": 95")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"databuttonincrement"),": 96")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"databuttondecrement"),": 97")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"nonregisteredparametercoarse"),": 98")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"nonregisteredparameterfine"),": 99")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"registeredparametercoarse"),": 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"registeredparameterfine"),": 101")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"allsoundoff"),": 120")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"resetallcontrollers"),": 121")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"localcontrol"),": 122")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"allnotesoff"),": 123")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"omnimodeoff"),": 124")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"omnimodeon"),": 125")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"monomodeon"),": 126")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"polymodeon"),": 127"))),(0,i.kt)("h3",{id:"midi_registered_parameters"},(0,i.kt)("inlineCode",{parentName:"h3"},".MIDI_REGISTERED_PARAMETERS")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": Object.","<","string, Array.","<","number",">",">"),(0,i.kt)("p",null,"Enumeration of all registered parameters and their associated pair of numerical values. MIDI\nregistered parameters extend the original list of control change messages. Currently, there are\nonly a limited number of them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pitchbendrange"),": ","[0x00, 0x00]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"channelfinetuning"),": ","[0x00, 0x01]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"channelcoarsetuning"),": ","[0x00, 0x02]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tuningprogram"),": ","[0x00, 0x03]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tuningbank"),": ","[0x00, 0x04]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"modulationrange"),": ","[0x00, 0x05]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"azimuthangle"),": ","[0x3D, 0x00]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"elevationangle"),": ","[0x3D, 0x01]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gain"),": ","[0x3D, 0x02]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"distanceratio"),": ","[0x3D, 0x03]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maximumdistance"),": ","[0x3D, 0x04]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maximumdistancegain"),": ","[0x3D, 0x05]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"referencedistanceratio"),": ","[0x3D, 0x06]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"panspreadangle"),": ","[0x3D, 0x07]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rollangle"),": ","[0x3D, 0x08]")),(0,i.kt)("h3",{id:"midi_system_messages"},(0,i.kt)("inlineCode",{parentName:"h3"},".MIDI_SYSTEM_MESSAGES")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": Object.","<","string, number",">"),(0,i.kt)("p",null,"Enumeration of all valid MIDI system messages and matching numerical values. WebMidi.js also\nuses two custom messages."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"System common messages")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sysex"),": 0xF0 (240)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timecode"),": 0xF1 (241)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"songposition"),": 0xF2 (242)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"songselect"),": 0xF3 (243)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tunerequest"),": 0xF6 (246)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sysexend"),": 0xF7 (247)")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sysexend")," message is never actually received. It simply ends a sysex stream."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"System real-time messages")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clock"),": 0xF8 (248)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"start"),": 0xFA (250)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"continue"),": 0xFB (251)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stop"),": 0xFC (252)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"activesensing"),": 0xFE (254)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"reset"),": 0xFF (255)")),(0,i.kt)("p",null,"Values 249 and 253 are actually relayed by the Web MIDI API but they do not serve a specific\npurpose. The\n",(0,i.kt)("a",{parentName:"p",href:"https://www.midi.org/specifications/item/table-1-summary-of-midi-message"},"MIDI 1.0 spec"),"\nsimply states that they are undefined/reserved."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Custom WebMidi.js messages")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"midimessage"),": 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unknownsystemmessage"),": -1")))}N.isMDXComponent=!0}}]);