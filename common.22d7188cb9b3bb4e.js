"use strict";(self.webpackChunkstock_app=self.webpackChunkstock_app||[]).push([[592],{6259:(u,n,o)=>{o.d(n,{s:()=>S});var i=o(529),s=o(8256);let S=(()=>{class c{constructor(e){this.httpClient=e,this.BASE_URL="https://finnhub.io/api/v1/",this.TOKEN="bu4f8kn48v6uehqi3cqg"}get(e,a={}){let t=new i.LE;t=t.append("token",this.TOKEN);for(const r in a)t=t.append(r,a[r]);return this.httpClient.get(`${this.BASE_URL}/${e}`,{params:t})}}return c.\u0275fac=function(e){return new(e||c)(s.LFG(i.eN))},c.\u0275prov=s.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},2014:(u,n,o)=>{o.d(n,{q:()=>p});var i=o(4004),s=o(8256),S=o(6259);let c=(()=>{class e{constructor(){}set(t,r){localStorage.setItem(t,JSON.stringify(r))}get(t){return JSON.parse(localStorage.getItem(t)??"[]")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),p=(()=>{class e{constructor(t,r){this.apiService=t,this.storageService=r,this.SEARCH_URL="search",this.QUOTE_URL="quote"}getSymbol(t){return this.apiService.get(this.SEARCH_URL,{q:t}).pipe((0,i.U)(r=>r.result[0]))}getQuote(t){return this.apiService.get(this.QUOTE_URL,{symbol:t})}addToLocalStorage(t){const r=[...this.getFromLocalStorage(),t];this.storageService.set("stocks",r)}removeFromLocalStorage(t){const r=this.getFromLocalStorage();r.splice(t,1),this.storageService.set("stocks",r)}getFromLocalStorage(){return this.storageService.get("stocks")}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(S.s),s.LFG(c))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);