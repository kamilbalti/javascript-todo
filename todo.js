let nameArr = [];
let dataObj = {}
let alldata = false;
let updateBut = false;


let head = "";
document.getElementById("update").style.display = 'none';
document.getElementById("clear").style.display = 'none';
function submit(){
    if(document.getElementById("name").value == "" || document.getElementById("age").value == "")
    alert("The form is not complete Please fill all the requirement")
    else{
        document.getElementById("clear").style.display = 'flex';
        head = `<p class='row'><span class='hiddenHead hide'>Index</span> <span class='hiddenHead'>Name</span> <span class='hiddenHead'>Age</span><span class='hide hiddenHead'></span></p>`
        dataObj.name = document.getElementById("name").value
        dataObj.age = document.getElementById("age").value
    nameArr.push(dataObj)
    dataObj = {}
    alldata = nameArr.map((item, index)=>
    (`<div class='resultPara'><p class='para'><span class='resultItem hide'>${index}</span><span class="resultItem">${item.name}</span><span class = "resultItem">${item.age}</span></p><span class="delEditBut"><button onclick=del(${index})>Delete</button><button onclick=edit(${index})>Edit</button></span></div>`))
    alldata = alldata.join("")
    document.getElementById('div').innerHTML = head + alldata
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
} 
}
function edit(i){
    document.getElementById('update').style.display = 'flex';
    document.getElementById('but').style.display = 'none';
    document.getElementById("name").value = nameArr[i].name
    document.getElementById("age").value = nameArr[i].age
    updateBut = i+1
}
function update(){
    nameArr[updateBut-1].name = document.getElementById("name").value
    nameArr[updateBut-1].age = document.getElementById("age").value
    alldata = nameArr.map((item, index)=>
    (`<div class="resultPara"><p class='para'><span class='resultItem hide'>${index}</span><span class="resultItem">${item.name}</span><span class = "resultItem">${item.age}</span></p><span class="delEditBut"><button onclick=del(${index})>Delete</button><button onclick=edit(${index})>Edit</button></span></div>`))
    alldata = alldata.join("")
    document.getElementById('div').innerHTML = head + alldata
    document.getElementById("name").value = ""
    document.getElementById("age").value = ""
    document.getElementById('but').style.display = 'flex';
    document.getElementById('update').style.display = 'none';
    updateBut = false
}
function clearAll(){
    nameArr = []
    document.getElementById('div').innerHTML = ""
    document.getElementById("clear").style.display = 'none';
}
function del(i){    
    nameArr = nameArr.filter((item, index) => index !== i)
    alldata = nameArr.map((item, index)=>
    (`<div class="resultPara"><p class='para'><span class='resultItem hide'>${index}</span><span class="resultItem">${item.name}</span><span class = "resultItem">${item.age}</span></p><span class="delEditBut"><button onclick=del(${index})>Delete</button><button onclick=edit(${index})>Edit</button></span></div>`))
    alldata = alldata.join("")
    if(nameArr.length == 0)
    {
        head = ""
        document.getElementById("clear").style.display = 'none';
    }
    document.getElementById('div').innerHTML = head + alldata
}


    alldata = nameArr.map((item, index)=>
    (`<div class="resultPara"><p class='para'><span class='resultItem hide'>${index}</span><span class="resultItem">${item.name}</span><span class = "resultItem">${item.age}</span></p><span class="delEditBut"><button onclick=del(${index})>Delete</button><button onclick=edit(${index})>Edit</button></span></div>`))
    alldata = alldata.join("")
    document.getElementById('div').innerHTML = head + alldata
