var elementsLists = [  
	   {
	    "userId": 1,
	    "id": 1,
	    "title": "delectus aut autem",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 2,
	    "title": "quis ut nam facilis et officia qui",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 3,
	    "title": "fugiat veniam minus",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 4,
	    "title": "et porro tempora",
	    "completed": true
	  },
	  {
	    "userId": 1,
	    "id": 5,
	    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 6,
	    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 7,
	    "title": "illo expedita consequatur quia in",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 8,
	    "title": "quo adipisci enim quam ut ab",
	    "completed": true
	  },
	  {
	    "userId": 1,
	    "id": 9,
	    "title": "molestiae perspiciatis ipsa",
	    "completed": false
	  },
	  {
	    "userId": 1,
	    "id": 10,
	    "title": "illo est ratione doloremque quia maiores aut",
	    "completed": true
	  }
	
];

function Listarea(title)
{
	this.userId = 1;
	this.id = (elementsLists.length + 1);
	this.title = title;
	this.completed = false;
}

function AddLIsts()
{
    this.mostrarTarea = function(){
    	var html = "";
        for (var i = 0 ; i < elementsLists.length ; i++){
		 	var dato_1 = elementsLists[i];
		    var e = "<div>" + "<p>" + "<input type='checkbox' name='datos' id='"+ i + "' />" +
		            "<label for='"+i+"'>" + dato_1.title + "</label>" + "</p>" + "<div>" ;

		 	html +=  e;
        }
        document.getElementById('listado').innerHTML = html;
        
    }
}

function limpiar()
{
	document.getElementById('nuevaTarea').value= "";
}

var lista1 = new AddLIsts();


var btnAdd = document.getElementById('add');
btnAdd.onclick = function(){
	var addTarea = document.getElementById("nuevaTarea").value;
	var tarea1 = new Listarea(addTarea);
	elementsLists.push(tarea1);
	lista1.mostrarTarea();
    limpiar();
};

lista1.mostrarTarea();










