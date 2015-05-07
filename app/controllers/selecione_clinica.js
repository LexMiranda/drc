var args = arguments[0] || {};
var speciality_backend_id = args['speciality_backend_id'];
var speciality_name = args['speciality_name'];

//	Create & Define Window
Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
	 backgroundColor: 'white'
});

Ti.App.addEventListener("clsAppntStack", function(data) {
	win.close();
});

win.addEventListener("open", function() {
	win.activity.actionBar.hide();
});


// Create & Define BackButton
var buttonBack = Ti.UI.createButton({
    backgroundImage: '/images/android/common/ic_arrow_back_white_24dp.png',
    top: 11,
    width: 36,
    height: 36,
    left:5,
    zIndex:9
});

buttonBack.addEventListener('click',function(e){
    win.close();
});

//	Create & Define Title Label
var labelTitle = Ti.UI.createLabel({
	width: "100%",
	height: 58,
	color: "#fefffd",
	backgroundColor:"#5090cd",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"0",
	font:{fontSize:18},
	text:"2. Selecione a clínica"
});





var tableData = [];
var tableDataCompleted = [];


var db = Ti.Database.open('_alloy_');
var query = 'SELECT * FROM clinic ORDER BY name';
var articlesRS = db.execute(query);
while (articlesRS.isValidRow()) {
	tableData.push({
		'id': articlesRS.fieldByName('id'),
		'backend_id': articlesRS.fieldByName('backend_id'),
		'name': articlesRS.fieldByName('name'),
		'address': articlesRS.fieldByName('address')
	});
  articlesRS.next();
}
articlesRS.close();
db.close();


console.log(tableData);


//	Define Data /Parse JSON
var tableDataLength = tableData.length;

//	START LOOP INTO DATA ARRAY
for (var i=1; i<tableDataLength; i++){
	console.log(tableDataLength);
	//	Define data after parse
	var rowData = tableData[i];

	//	Define TableRow
	var row = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:89
	});


	//	Define & Add TableRow Childrens
	var labelClinic = Ti.UI.createLabel({
	    textAlign:'left',
	    top:8,
		left:15,
		color: "#6e6f71",
	    font:{fontSize:16},
	    clinic_backend_id:rowData.backend_id,
	    touchEnabled:false,
	    text:rowData.name
	});
	
	row.add(labelClinic);
	
	var labelClinicDetail = Ti.UI.createLabel({
	    textAlign:'left',
		left:15,
		top:25,
		width:"90%",
		color: "#6e6f71",
	    font:{fontSize:16},
	    touchEnabled:false,
	    text:rowData.address
	});
	
	row.add(labelClinicDetail);
	
	// var labelDistance = Ti.UI.createLabel({
	    // textAlign:'right',
		// right:15,
	    // font:{fontSize:10},
	    // text:'1,7km'
	// });
// 	
	// row.add(labelDistance);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		top:79
	});
	
	row.add(borderSeparator);

	
	
	//	LISTENERS NAVIGATE
	row.addEventListener('click',function(e){
		var clinic_backend_id = e.source.children[0].clinic_backend_id;
		var clinic_name = e.source.children[0].text;
		
	    var marqueHorarioView = Alloy.createController("marque_horario",{'speciality_backend_id': speciality_backend_id, 'clinic_backend_id': clinic_backend_id, 'clinic_name':clinic_name,'speciality_name':speciality_name}).getView();
	});

//	Pushing Row
tableDataCompleted.push(row);


}// END LOOP


//	Define Table
var table = Ti.UI.createTableView({
  	data: tableDataCompleted,
  	top:"84px",
	left:"0px",
	color:"#6e6f71"
});


//	ADD objs to window
win.add(buttonBack);



win.add(labelTitle);
win.add(table);
win.open();
