(this["webpackJsonpxstate-react-typescript-template"]=this["webpackJsonpxstate-react-typescript-template"]||[]).push([[0],{24:function(t,e,o){},35:function(t,e,o){"use strict";o.r(e);var n=o(23),a=o(11),r=(o(24),o(7),o(20)),c=o(41),s=o(4),i=o(40),l=o(39);function p(t){return Object(s.k)((e=>({type:"SPEAK",value:t})))}function m(){return Object(s.k)("LISTEN")}const y={John:{person:"John Appleseed"},Chris:{person:"Chris Thomas"},Grace:{person:"Grace Jane"},"on Friday":{day:"Friday"},"on Monday":{day:"Monday"},at8:{time:"eight o'clock"},"at eight":{time:"eight o'clcok"},at10:{time:"ten o'clcok"},"at ten":{time:"ten o'clcok"},at7:{time:"seven o'clock"},"at seven":{time:"seven o'clock"},at11:{time:"eleven o'clock"},"at eleven":{time:"eleven o'clock"}},h={yes:!0,Yes:!0,"Of course":!0,"of course":!0,No:!1,no:!1,"No way":!1,"no way":!1},E={initial:"init",states:{init:{on:{CLICK:"welcome"}},welcome:{initial:"prompt",on:{RECOGNISED:[{actions:Object(s.b)((t=>({query:t.recResult}))),target:"query"}]},states:{prompt:{entry:p("What would you like to do?"),on:{ENDSPEECH:"ask"}},ask:{entry:m()}}},query:{invoke:{id:"rasa",src:t=>{return e=t.query,fetch(new Request("https://cors-anywhere.herokuapp.com/https://appointment-ds.herokuapp.com/model/parse",{method:"POST",headers:{Origin:"http://maraev.me"},body:'{"text": "'.concat(e,'"}')})).then((t=>t.json()));var e},onDone:[{cond:t=>"Appointment"===t,target:"who"},{target:"welcomemessage"}],onError:{target:"welcome"}}},who:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"person"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({person:y[t.recResult].person}))),target:"day"},{target:".nomatch"}]},states:{prompt:{entry:p("Who are you meeting with?"),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:p("Sorry I don't know them"),on:{ENDSPEECH:"prompt"}}}},day:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"day"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({day:y[t.recResult].day}))),target:"wholeday"},{target:".nomatch"}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"OK. ".concat(t.person,". On which day is your meeting?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:p("Sorry I don't know which day are you talking about"),on:{ENDSPEECH:"prompt"}}}},wholeday:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===h[t.recResult],target:"notime"},{cond:t=>!1===h[t.recResult],target:"whattime"},{target:".nomatch"}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Good.on ".concat(t.day,". Will it take the whole day?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:p("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},notime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===h[t.recResult],target:"Finished"},{cond:t=>!1===h[t.recResult],target:"who"},{target:".nomatch"}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day,"for the whole day?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:p("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},whattime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>"time"in(y[t.recResult]||{}),actions:Object(s.b)((t=>({time:y[t.recResult].time}))),target:"withtime"},{target:".nomatch"}]},states:{prompt:{entry:p("What time is your meeting"),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:p("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},withtime:{initial:"prompt",on:{RECOGNISED:[{cond:t=>!0===h[t.recResult],target:"Finished"},{cond:t=>!1===h[t.recResult],target:"who"},{target:".nomatch"}]},states:{prompt:{entry:Object(s.k)((t=>({type:"SPEAK",value:"Good. Do you want to me create an appointment with ".concat(t.person," on ").concat(t.day," at ").concat(t.time,"?")}))),on:{ENDSPEECH:"ask"}},ask:{entry:m()},nomatch:{entry:p("Please repeat it again"),on:{ENDSPEECH:"prompt"}}}},Finished:{initial:"prompt",on:{ENDSPEECH:"init"},states:{prompt:{entry:p("Your appointment has been created!")}}}}};var u=o(19),g=o(12);Object(l.a)({url:"https://statecharts.io/inspect",iframe:!1});const d=Object(c.a)({id:"root",type:"parallel",states:{dm:Object(a.a)({},E),asrtts:{initial:"idle",states:{idle:{on:{LISTEN:"recognising",SPEAK:{target:"speaking",actions:Object(s.b)(((t,e)=>({ttsAgenda:e.value})))}}},recognising:{initial:"progress",entry:"recStart",exit:"recStop",on:{ASRRESULT:{actions:["recLogResult",Object(s.b)(((t,e)=>({recResult:e.value})))],target:".match"},RECOGNISED:"idle"},states:{progress:{},match:{entry:Object(s.k)("RECOGNISED")}}},speaking:{entry:"ttsStart",on:{ENDSPEECH:"idle"}}}}}},{actions:{recLogResult:t=>{console.log("<< ASR: "+t.recResult)},test:()=>{console.log("test")},logIntent:t=>{console.log("<< NLU intent: "+t.nluData.intent.name)}}}),b=t=>{switch(!0){case t.state.matches({asrtts:"recognising"}):return Object(g.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"glowing 20s linear"}},t),{},{children:"Listening..."}));case t.state.matches({asrtts:"speaking"}):return Object(g.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover",style:{animation:"bordering 1s infinite"}},t),{},{children:"Speaking..."}));default:return Object(g.jsx)("button",Object(a.a)(Object(a.a)({type:"button",className:"glow-on-hover"},t),{},{children:"Click to start"}))}};function S(){const t=Object(u.useSpeechSynthesis)({onEnd:()=>{m("ENDSPEECH")}}),e=t.speak,o=t.cancel,a=(t.speaking,Object(u.useSpeechRecognition)({onResult:t=>{m({type:"ASRRESULT",value:t})}})),r=a.listen,c=(a.listening,a.stop),s=Object(i.b)(d,{devTools:!0,actions:{recStart:Object(i.a)((()=>{console.log("Ready to receive a color command."),r({interimResults:!1,continuous:!0})})),recStop:Object(i.a)((()=>{console.log("Recognition stopped."),c()})),changeColour:Object(i.a)((t=>{console.log("Repainting..."),document.body.style.background=t.recResult})),ttsStart:Object(i.a)(((t,o)=>{console.log("Speaking..."),e({text:t.ttsAgenda})})),ttsCancel:Object(i.a)(((t,e)=>{console.log("TTS STOP..."),o()}))}}),l=Object(n.a)(s,3),p=l[0],m=l[1];l[2];return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(b,{state:p,onClick:()=>m("CLICK")})})}const O=document.getElementById("root");r.render(Object(g.jsx)(S,{}),O)}},[[35,1,2]]]);
//# sourceMappingURL=main.9ef9ff0b.chunk.js.map