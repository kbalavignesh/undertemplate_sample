$( document ).ready(function() {
	
	var tpl = _.template("<h1>Hello <%= course %> students</h1>");
	var tplString = tpl({course: "MBA"});
	$("header").html(tplString);

	var stuData = {
	listItems: [
		{
			name: "Kavi",mark: 89
		},
		{
			name: "Aarthi",mark: 78
		},
		{
			name: "Bala",mark: 15
		},
		{
			name: "Shrini",mark: 45
		}
		]
	};	

	var tpl = _.template($(".students-list-template").html());
	var tplString = tpl(stuData);
	$("#students").html(tplString);	
	
});