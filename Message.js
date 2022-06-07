function getdata()
{
    var data = document.getElementById("textMessage").value;
    document.getElementById("lastMessage").innerHTML = data;
    document.getElementById("textMessage").value = "";
}