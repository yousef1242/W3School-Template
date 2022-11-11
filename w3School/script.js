
//toogle classes
    
    mode.onclick = function(){
      document.querySelector('.heading .contaner .left span').classList.toggle('back')
      document.querySelector('#pro').classList.toggle('bb')
      document.querySelector('#htmlexample').classList.toggle('darkkk')
      document.querySelector('#javascriptexample').classList.toggle('darkkk')
      document.querySelector('#sqlexample').classList.toggle('darkkk')
      document.querySelector('#pythonexample').classList.toggle('darkkk')
      document.querySelector('#cssexample').classList.toggle('darkkk')
      document.querySelector('.head').classList.toggle('daa')
      document.querySelector('#htmlexample h2').classList.toggle('white')
      document.querySelector('#cssexample h2').classList.toggle('white')
      document.querySelector('#javascriptexample h2').classList.toggle('white')
      document.querySelector('#pythonexample h2').classList.toggle('white')
      document.querySelector('#sqlexample h2').classList.toggle('white')
      document.querySelector('.links #Exercises').classList.toggle('white')
      document.querySelector('.links #References').classList.toggle('white')
      document.querySelector('.links #Tutorials').classList.toggle('white')
      document.querySelector('#mode').classList.toggle('white')
      document.querySelector('#search').classList.toggle('white')
      document.querySelector('#earth').classList.toggle('white')
      document.querySelector('.heading').classList.toggle('color')
      document.querySelector('#menu').classList.toggle('lock')
      
    }

//end toogle classes






let up = document.getElementById('up')


up.style.display = 'none'
onscroll = function(){
  if(scrollY < 400){
    up.style.display = 'none'
  }else if(scrollY > 401){
    up.style.display = 'block'
  }
}
up.onclick = function(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
})
}








let html = document.createTextNode(`
<!DOCTYPE html>
<html>
<title>HTML Tutorial</title>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`)
let Css = document.createTextNode(`
body {
    background-color: lightblue;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  p {
    font-family: verdana;
  }
`)
let javascript = document.createTextNode(`
<button onclick="myFunction()">Click Me!
</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>
`)
let python =document.createTextNode(`
if 5 > 2:
  print("Five is greater than two!")
`)

let sql =document.createTextNode(`
SELECT * FROM Customers
WHERE Country='Mexico';
`)



document.getElementById('pre').appendChild(html)
document.getElementById('pre2').appendChild(Css)
document.getElementById('pre3').appendChild(javascript)
document.getElementById('pre5').appendChild(python)
document.getElementById('pre6').appendChild(sql)

// when we onclick on mode
let menu = document.getElementById('menu')
let ul2 = document.querySelector('.ul2')
let wrong = document.getElementById('wrong')
menu.onclick = function(){
    ul2.style.display = 'flex'
}
wrong.onclick = function(){
    ul2.style.display = 'none'
}




let back = document.querySelector('.back')
let front = document.querySelector('.front')
let imgg2 = document.querySelector('.imgg2')

back.onclick = function(){
  imgg2.src = '	https://www.w3schools.com/tryit/best2.gif'
  back.style.background = '#dfe3e6'
  front.style.background = 'none'
  
}
front.onclick = function(){
  imgg2.src = "https://www.w3schools.com/codeeditor.gif"
  back.style.background = 'none'
  front.style.background = '#dfe3e6'
  
}









