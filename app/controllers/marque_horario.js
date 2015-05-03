var args = arguments[0] || {};
var speciality_backend_id = args['speciality_backend_id'];
var clinic_backend_id = args['clinic_backend_id'];

//	Create & Define Window
Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
	 backgroundColor: 'white'
});

win.addEventListener("open", function() {
	win.activity.actionBar.hide();
});

Ti.App.addEventListener("clsAppntStack", function(data) {
	win.close();
});

// Create & Define BackButton
var buttonBack = Ti.UI.createButton({
    backgroundImage: '/left_arrow.png',
    top: 9,
    width: 30,
    height: 20,
    left:5,
    zIndex:9
});

buttonBack.addEventListener('click',function(e){
    win.close();
});

//	Create & Define Title Label
var labelTitle = Ti.UI.createLabel({
	width: "100%",
	height: "65px",
	color: "#fefffd",
	backgroundColor:"#5090cd",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"0",
	text:"3. Marque o dia e horário"
});

var labelSelect = Ti.UI.createLabel({
	width: "100%",
	height: "75px",
	color: "#fefffd",
	backgroundColor:"#ffffff",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"65",
	text:""
});

// Create & Define Picke/Selectbox
var picker1 = Ti.UI.createPicker({
  type:"Ti.UI.PICKER_TYPE_DATE",
  // minDate:"2014,4,1",
  // maxDate:"May 1, 2014 12:00:00",
  // value:"2014-04-15T12:00:00",
  top:50,
  zIndex:5,
  // backgroundColor: "#666666",
  // width:'100px',left:50
});

// var data = [];
// data[0]=Ti.UI.createPickerRow({title:'18 MAR'});
// data[1]=Ti.UI.createPickerRow({title:'19 MAR'});
// data[2]=Ti.UI.createPickerRow({title:'20 MAR'});
// data[3]=Ti.UI.createPickerRow({title:'30 MAR'});
// 
// picker1.add(data);
// picker1.selectionIndicator = true;


//rESULTS

var minDate = new Date();
minDate.setFullYear(2000);
minDate.setMonth(00);
minDate.setDate(01);

var maxDate = new Date();
maxDate.setFullYear(2020);
maxDate.setMonth(10);
maxDate.setDate(31);


var setValue = new Date();
setValue.setFullYear(2013);
setValue.setMonth(02);
setValue.setDate(24);



//Date picker
var picker = Ti.UI.createPicker({
	selectionIndicator:true,
	type:Ti.UI.PICKER_TYPE_DATE,
	minDate: minDate,
	maxDate: maxDate,
	value: setValue,
	top:0,
	zIndex:6
});

var bgPicker = Ti.UI.createLabel({
	width:"100%",
	height:"200px",
	backgroundColor:"#000",
	top:"20px",
	zIndex:5
	
});


//event listenner
picker.addEventListener("change",function(e){
	
});

/*var picker2 = Ti.UI.createPicker({
  top:50,
  zIndex:5,
  color: "#666666",
  backgroundColor: "#666666",
  width:'100px', right:50
});

var data1 = [];
data1[0]=Ti.UI.createPickerRow({title:'SACOMÃ'});
data1[1]=Ti.UI.createPickerRow({title:'SACOMÃ'});
data1[2]=Ti.UI.createPickerRow({title:'SACOMÃ'});
data1[3]=Ti.UI.createPickerRow({title:'SACOMÃ'});

picker2.add(data1);
picker2.selectionIndicator = true;
*/
//	Define border to separate table & title
var borderSeparatorTable = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		top:'140px',
		zIndex:5
});

//	Define Data /Parse JSON
var tableData = [];
var tableJsonDataClean = '{"consultas":[{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"}]}';
var	tableJsonData = JSON.parse(tableJsonDataClean);
	
var tableDataLength = tableJsonData.consultas.length;

var letters = [];

//	START LOOP INTO DATA ARRAY
for (var i=1; i<tableDataLength; i++){
	
	//	Define data after parse
	var rowData = tableJsonData.consultas[i];

	//	Define TableRow
	var row = Ti.UI.createTableViewRow({
	    className:'forumEvent'
	});


	//	Define & Add TableRow Childrens
	var labelDay = Ti.UI.createLabel({
	    textAlign:'left',
	    top:8,
		left:8,
		width:'60px',
		color:'#000000',
	    font:{fontSize:20},
	    text:'1'+i
	});
	
	row.add(labelDay);
	
	
	var labelMonth = Ti.UI.createLabel({
	    textAlign:'left',
	    top:28,
		left:7,
		width:'40px',
		color:'#000000',
	    font:{fontSize:12},
	    text:'mar'
	});
	
	row.add(labelMonth);
	
	//	Define first hour label
	var labelTime = Ti.UI.createLabel({
	    textAlign:'left',
	    top:55,
		left:7,
		width:'60px',
		color:'#666666',
	    font:{fontSize:12},
	    text:'15:00'
	});
	row.add(labelTime);
	
	//	Define Coaching Meet
	
	var labelCoach = Ti.UI.createLabel({
	    textAlign:'left',
	    top:55,
		left:90,
		height:25,
		width:200,
		color:'#fefffd',
		backgroundColor:'#5090cd',
	    font:{fontSize:12},
	    text:'    15:15 - Dr(a). Mirela dos Santos',
	    borderRadius:4,
	    backgroundPaddingLeft: 30,
    	backgroundPaddingRight: 30
	});
	
	labelCoach.addEventListener('click',function(e){
	    var modalConfirm = Ti.UI.createLabel({
		    textAlign:'left',
		    top:108,
			left:30,
			height:218,
			width:276,
			zIndex:11,
			backgroundColor:'#fafafa'
		});
		
		var labelModalTitle = Ti.UI.createLabel({
		    textAlign:'left',
		    top:128,
			left:50,
			color:'#868688',
			font:{fontSize:25},
			zIndex:12,
			text:'Confirmando'
		});
		
		var labelModalDesc = Ti.UI.createLabel({
		    textAlign:'left',
		    top:168,
			left:50,
			zIndex:12,
			color:'#868688',
			font:{fontSize:12},
			text: 'Sua consulta de ginecologista com a Dra.Mirela dos Santos será Quarta-Feira 11 de Fevereiro as 15:00hrs na clínica São Pedro.'
		});
		
		var labelModalEdit = Ti.UI.createLabel({
		    textAlign:'left',
		    zIndex:12,
		    top:258,
			left:90,
			color:'#868688',
			font:{fontSize:12},
			text: 'Alterar'
		});
		
		var labelModalConfirm = Ti.UI.createLabel({
		    textAlign:'left',
		    top:258,
		    zIndex:12,
			left:205,
			color:'#5090cd',
			font:{fontSize:12}
		});
		
		labelModalConfirm.addEventListener('click',function(e){
			var dadosPacienteView = Alloy.createController("dados_paciente",{}).getView();
		});
		
		labelModalEdit.addEventListener('click',function(e){
			win.remove(modalConfirm);
			win.remove(labelModalTitle);
			win.remove(labelModalDesc);
			win.remove(labelModalEdit);
			win.remove(labelModalConfirm);
		});
		
		win.add(modalConfirm);
		win.add(labelModalTitle);
		win.add(labelModalDesc);
		win.add(labelModalEdit);
		win.add(labelModalConfirm);
		
		
	
	});
	
	row.add(labelCoach);
	
	

//	Pushing Row
tableData.push(row);


}// END LOOP


//	Define Table
var table = Ti.UI.createTableView({
  	data: tableData,
  	top:"140px",
	left:"0px",
	color:"#6e6f71",
	top:240
});


//	ADD objs to window
win.add(buttonBack);


win.add(borderSeparatorTable);
win.add(picker);
win.add(bgPicker);
win.add(labelTitle);
win.add(labelSelect);
win.add(table);
win.open();
