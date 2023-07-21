function clr(){
    document.getElementById("result").value="";

}

function back()
{
    var bak=document.getElementById('result').value;
    var bk=bak.slice(0,-1);
    document.getElementById('result').value=bk;
}
function display(val)
{
    document.getElementById('result').value+=val;
}
function sqt()
{
    var k=document.getElementById('result').value;
    var d=Math.sqrt(k);
    document.getElementById('result').value=d;
}

function power()
{
    var k=document.getElementById('result').value;
    var d=Math.pow(k,2);
    document.getElementById('result').value=d;
}

function onedvd()
{
    var k=document.getElementById('result').value;
    var d=1/k;
    document.getElementById('result').value=d;
}

function finalresult()
{
    var k=document.getElementById('result').value;
    var d=eval(k);
    document.getElementById('result').value=d;
}

function plusminus()
{
    var k=document.getElementById('result').value;
    var d=-k;
    document.getElementById('result').value=d;
}