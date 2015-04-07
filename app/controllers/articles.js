var back = function(e) {$.win.close();};

// Extrair método getArticles

var searchByTags = function(e) {
	var tag = $.sb.getValue();
	if (tag) {
		tag = tag.split(" ");
		// Extrair método getArticles		
		var articles = [];
		var db = Ti.Database.open('_alloy_');
		var query = "SELECT * FROM article WHERE id IN (" +
					"SELECT article_id FROM article_article_tags WHERE article_article_tags.article_tag_id IN (" +
					"SELECT article_tags.id FROM article_tags WHERE article_tags.tag = '" + tag.splice(0, 1) + "' ";
					// MULTIPLAS TAGS COM AND
		while (tag.length > 0) {
			query.concat("AND")
		}
		
		query.concat("));");
		
		var articlesRS = db.execute(query);
		
		while (articlesRS.isValidRow()) {
			articles.push({
				'articleId': articlesRS.fieldByName('id'),
				'articleName': articlesRS.fieldByName('name')
			});
		  articlesRS.next();
		}
		
		if (articles.length) {

			Ti.API.log('info', articles[0].articleName);		
		
		} else {
			alert("Não encontrado.");
		};
		articlesRS.close();
		db.close();

	} else {
		alert("Digite algo para pesquisar!");
	};
};

var openArticleDetails = function(e) {
	var articleId = e['source']['id'];
	var article = e['source']['title'];
	var articledetails_view = Alloy.createController("article_details", {'articleId': articleId, 'article': article}).getView();
    // if (OS_IOS) {
        // $.navGroupWin.openWindow(saudeaz_view);
    // }
 	// if (OS_ANDROID) {
 		articledetails_view.addEventListener('open', function(e) {
   			articledetails_view.activity.actionBar.hide();
		});
        articledetails_view.open();
    // }    
};




// Extrair método getArticles
var articles = [];
var db = Ti.Database.open('_alloy_');
var articlesRS = db.execute('SELECT id, name FROM article ORDER BY name');
while (articlesRS.isValidRow()) {
	articles.push({
		'articleId': articlesRS.fieldByName('id'),
		'articleName': articlesRS.fieldByName('name')
	});
  articlesRS.next();
}
articlesRS.close();
db.close();

for(var i=0,j=articles.length; i<j; i++){
  var article = articles[i];
  var articleId = article['articleId'];
  var articleName = article['articleName'];
  var articleFirstLetter = articleName.charAt(0).toUpperCase();
  var row = Ti.UI.createTableViewRow({title: articleName, id: articleId});
  row.addEventListener('click', openArticleDetails);
  $['s' + articleFirstLetter].add(row);
};