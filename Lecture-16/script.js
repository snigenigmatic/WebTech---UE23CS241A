const loadData = () =>{
    var xhr = new XMLHttpRequest();
    xhr.open("get", "sample.txt", true);
    xhr.onreadystatechange=showdata;
    xhr.responseType = "text";
    xhr.send();
}

function showdata(){
    if(this.readyState === 4 && this.status === 200){
        document.getElementById('output').innerHTML = this.responseText;
    }else if(this.status === 404){
        document.getElementById('output').innerHTML = "Not Found";
    }
};

document.getElementById('button').addEventListener('click', loadData);