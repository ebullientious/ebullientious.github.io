"use strict";var weddingApp=angular.module("weddingApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]);weddingApp.config(["$routeProvider",function(a){a.when("/about",{templateUrl:"views/about.html",controller:"contactController"}).when("/story",{templateUrl:"views/story.html",controller:"storyController"}).when("/extras",{templateUrl:"views/extras.html",controller:"extrasController"}).when("/party",{templateUrl:"views/party.html",controller:"partyController"}).when("/rsvp",{templateUrl:"views/rsvp.html",controller:"rsvpController"}).when("/venue",{templateUrl:"views/venue.html",controller:"venueController"}).when("/tags",{templateUrl:"views/tags.html",controller:"tagsController"}).when("/main",{templateUrl:"views/main.html",controller:"mainController"}).when("/thanks",{templateUrl:"views/thanks.html"}).otherwise({templateUrl:"views/main.html",controller:"mainController"})}]),angular.module("weddingApp").factory("instagram",["$resource",function(a){return{fetchRecentTag:function(b,c){var d=a("https://api.instagram.com/v1/tags/:tag/media/recent/?client_id=:clientId&callback=JSON_CALLBACK",{clientId:"523902333d6345938f4f9eeb92f8c3d8",tag:b},{fetch:{method:"JSONP"}});console.log(d),d.fetch(function(a){c(a.data)})}}}]),angular.module("weddingApp").factory("formService",["$http",function(a){var b={};return b.postMessage=function(b){a.jsonp("https://docs.google.com/forms/d/1DvZP2Ns1EfG6XjvdPLFDSrL5lTXevYsHJ_Ubh7yAcuQ/formResponse?entry.968907602="+b.firstName+"&entry.251731624="+b.lastName+"&entry.543364464="+b.attending+"&entry.1659833932="+b.email+"&entry.763506774="+b.numberOfPeopleAttending+"&entry.891110319="+b.songRequests+"&entry.1503585619="+b.comments)},console.log(b),b}]),angular.module("weddingApp").controller("mainController",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("weddingApp").controller("navController",["$scope","$location",function(a,b){function c(){angular.forEach(a.navList,function(a){a.active=b.path().match(new RegExp(a.url))?!0:!1})}a.navList=[{url:"/main",title:"Home"},{url:"/venue",title:"Venue"},{url:"/story",title:"Story"},{url:"/rsvp",title:"RSVP"},{url:"/party",title:"Party"},{url:"/extras",title:"Extras"}],b.path("/main"),a.$on("$routeChangeSuccess",c)}]),angular.module("weddingApp").controller("rsvpController",["$scope","$location","formService",function(a,b,c){a.formData={firstName:"",lastName:"",attending:"",email:"",comments:"",songRequests:"",numberOfPeopleAttending:""},a.submit=function(){c.postMessage(a.formData),b.path("/thanks")}}]),angular.module("weddingApp").controller("venueController",function(){}),angular.module("weddingApp").controller("extrasController",function(){}),angular.module("weddingApp").controller("storyController",function(){}),angular.module("weddingApp").controller("partyController",function(){}),angular.module("weddingApp").controller("tagsController",["$scope","instagram",function(a,b){a.tagItems=[],a.$watch("searchValue",function(){b.fetchRecentTag(a.searchValue,function(b){a.tagItems=b})})}]);