var element=document.getElementById('group')
element.onclick=function() {
    var a = document.getElementById('inp').value
    var digit = a.slice(-3, -2)
    if (digit == 1) {
        document.getElementById('tag').innerHTML = "Seher Qrupu(09:00-11:45)"
    }
    else if (digit == 2) {
        document.getElementById('tag').innerHTML = "Gunorta Qrupu(13:00-15:45)"
    }
    else if (digit == 3) {
        document.getElementById('tag').innerHTML = "Axsam Qrupu(19:00-21:45)"
    }
    else if (digit == 4 || digit==5) {
        document.getElementById('tag').innerHTML = "Heftesonu Qrupu(19:00-21:45)"
    }
    else{
        document.getElementById('tag').innerHTML = "Bele Bir Qrup Movcud Deyil"
    }
    

   


}
