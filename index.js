function shw_alert(){
    const n=document.getElementById("name").value;
    const e=document.getElementById("email").value;
    const mn=document.getElementById("mobn").value;
    if(n==="")
    return alert("Please enter your name !!!");
    else if(e==="" && mn==="")
    return alert("Please give some contact informtion");
    else if(e==="")
    return alert("Your response has been submitted !!\n"+"Name: "+n+"\nEmail: Not Given "+"\nPhone Number: "+mn);
    else if(mn==="")
    return alert("Your response has been submitted !!\n"+"Name: "+n+"\nEmail: "+e+"\nPhone Number: Not Given");
    else
    return alert("Your response has been submitted !!\n"+"Name: "+n+"\nEmail: "+e+"\nPhone Number: "+mn);

}