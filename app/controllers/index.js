var db = Ti.Database.install('/dr.db', '_alloy_');
db.close();

$.index.addEventListener('open', function(e) {
    $.index.activity.actionBar.hide();
});
$.index.open();


// function load_exames() {
	// alert("exames");
// }
// function load_saude_crianca() {
	// var articlesView = Alloy.createController("articles", {'articlesSession': 'crianca'}).getView();
 		// articlesView.addEventListener('open', function(e) {
   			// articlesView.activity.actionBar.hide();
		// });
        // articlesView.open();
// 
// }

function load_exame() {
	 var saudeaz_view = Alloy.createController("articles", {}).getView();
 		 saudeaz_view.addEventListener('open', function(e) {
   			 saudeaz_view.activity.actionBar.hide();
		 });
         saudeaz_view.open();
 }

function load_gravidez() {
	var saudeaz_view = Alloy.createController("onboarding", {}).getView();
	saudeaz_view.addEventListener('open', function(e) {
		saudeaz_view.activity.actionBar.hide();
	});
}
// function load_saude_az() {
	// var saudeaz_view = Alloy.createController("articles", {}).getView();
 		// saudeaz_view.addEventListener('open', function(e) {
   			// saudeaz_view.activity.actionBar.hide();
		// });
        // saudeaz_view.open();
// } 
// 
function load_phone_auth() {
	var v = Alloy.createController("onboarding", {}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
}

function debug_phone_auth() {
	// var v = Alloy.createController("onboarding_debug", {}).getView();
 		// v.addEventListener('open', function(e) {
   			// v.activity.actionBar.hide();
		// });
        // v.open();
       var consultaView = Alloy.createController("httpMock", {}).getView();
}

function load_consulta() {
	var v = Alloy.createController("especialidades", {}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();

	// var consultaView = Alloy.createController("especialidades", {}).getView();

}

function open_dicas() {
	var v = Alloy.createController("dicas", {}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
}

function open_partes_corpo() {
	var v = Alloy.createController("partes_corpo", {}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
}

function open_gravidez(){
	var consultaView = Alloy.createController("artigos", {'articlesSession': 'gravidez', 'window_title': 'Gravidez e recém nascido'}).getView();
}

function open_exames(){
	var consultaView = Alloy.createController("artigos", {'articlesSession': 'exames', 'window_title': 'Exames'}).getView();
}

 function open_alert() {
// 	alert("Aguardando integração com tela de detalhes de artigo");
 var consultaView = Alloy.createController("marque_horario", {}).getView();

 }
 
 function open_gineco() {
 	var consultaView = Alloy.createController("artigos", {'articlesSession': 'gineco', 'window_title': 'Ginecologista'}).getView();
 }
