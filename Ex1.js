function Scn(){
    var a = parseFloat(prompt("Width: "));
    var b = parseFloat(prompt("Height: "));
    return alert(a*b);
}
function enjoy(){
    alert("Welcome to my game!")
    if (confirm("Do you want to play?")){
        var n = prompt("Enter name: ")
        alert(n + " enjoy the game")
    }
}
function birthday(){
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var d = new Date(prompt("Input your birthday: "))
    var day = weekday[d.getDay()];
    var year = d.getFullYear()
    var date = d.getDate()
    var month = d.getMonth() + 1
    alert("Sinh vao thu: " + day)
    alert("Sinh vao ngay: " + date)
    alert("Sinh vao thang: " + month)
    alert("Sinh vao nam: " + year)
    var currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    alert("Tuoi: " + (currentYear - year))
}
function condition(){
    var a = parseInt(prompt("Number: "));
    if (a>0){
        alert("A la so duong")
    }else if(a<0){
        alert("A la so am")
    }else{
        alert("A khong phai la so duong cung khong phai la so am")
    }
}



function functionOK() {
    var y = document.getElementById("year");
    var hk1 = parseInt(document.getElementById("s1").value);
    var hk2 = parseInt(document.getElementById("s2").value);
    var value = y[y.selectedIndex].value;
    var result;
  
    switch (value) {
      case "1": {
        result = ((hk1 + (hk2 * 2)) / 3);
    document.getElementById("sum").value=result;
        break;

      }
      case "2": {
        result = ((hk1 + (hk2 * 3)) / 4);
    document.getElementById("sum").value=result;
        break;

      }
      case "3": {
        result = ((hk1 + (hk2 * 4)) / 5);
    document.getElementById("sum").value=result;
        break;
      }
    }
    
  }
  function functionCancel() {
    document.getElementById('s1').value ="";
    document.getElementById('s2').value ="";
    document.getElementById('sum').value="";
  }