// JavaScript Document
(function(){
	var app= angular.module('LEOMED',[]);
	var Patients=[
			{name:'Monica Latte',id:'0000-4444'},
			{name:'Ron Burgandy',id:'1234-12345'},
			{name:'Harry Potter',id:'5555-55555'}			
		];
			
	
	app.controller('PatientsController',function(){
								this.patients=Patients;				 
												 });
})();