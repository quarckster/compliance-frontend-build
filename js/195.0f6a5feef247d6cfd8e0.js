(self.webpackChunkcompliance_frontend=self.webpackChunkcompliance_frontend||[]).push([[195],{65811:(n,e,t)=>{"use strict";t.d(e,{C:()=>s});var i=t(30319);function s(n){return(0,i.bh)().dispatch(n)}},39859:(n,e,t)=>{"use strict";t.d(e,{nT:()=>m,oI:()=>$,Dy:()=>P,r0:()=>I,Jd:()=>b,_v:()=>v,_M:()=>Z});var i,s,u,p,o,a,l,r,c=t(32465),d=t(44119),f=t.n(d),m=f()(i||(i=(0,c.Z)(["\nmutation CreateProfile($input: createProfileInput!) {\n    createProfile(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"]))),$=f()(s||(s=(0,c.Z)(["\nmutation associateSystems($input: associateSystemsInput!) {\n    associateSystems(input: $input) {\n        profile {\n            id\n            policy {\n                id\n                profiles {\n                    id\n                    parentProfileId\n                }\n            }\n        }\n    }\n}\n"]))),P=(f()(u||(u=(0,c.Z)(["\nmutation associateProfiles($input: associateProfilesInput!) {\n    associateProfiles(input: $input) {\n        system {\n            id\n            name\n            profiles {\n                id\n                name\n            }\n        }\n    }\n}\n"]))),f()(p||(p=(0,c.Z)(["\nmutation associateRules($input: associateRulesInput!) {\n    associateRules(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"])))),I=f()(o||(o=(0,c.Z)(["\nmutation UpdateProfile($input: UpdateProfileInput!) {\n    updateProfile(input: $input) {\n        profile {\n            id,\n            name,\n            complianceThreshold,\n            businessObjectiveId,\n            description\n        }\n    }\n}\n"]))),b=f()(a||(a=(0,c.Z)(["\nmutation createBusinessObjective($input: createBusinessObjectiveInput!) {\n    createBusinessObjective(input: $input) {\n        businessObjective {\n            id\n            title\n        }\n    }\n}\n"]))),v=f()(l||(l=(0,c.Z)(["\nmutation DeleteProfile($input: deleteProfileInput!) {\n    deleteProfile(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"]))),Z=f()(r||(r=(0,c.Z)(["\nmutation DeleteReport($input: deleteTestResultsInput!) {\n    deleteTestResults(input: $input) {\n        profile {\n            id\n        }\n    }\n}\n"])))}}]);
//# sourceMappingURL=../sourcemaps/195.662f5b7a29d52375fe37.js.map