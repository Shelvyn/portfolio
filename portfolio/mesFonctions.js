
document.getElementById("nav_mon_cv").addEventListener("click",ChangerSection)
document.getElementById("nav_mon_site").addEventListener("click",ChangerSection)
document.getElementById("nav_inscription").addEventListener("click",ChangerSection)
document.getElementById("nav_connexion").addEventListener("click",ChangerSection)


function ChangerSection ()
{

  if (this.id == "nav_mon_cv")
  {
    document.getElementById("mon_cv").style.display = "block";

  }
  else if (this.id =="nav_mon_site")
  {
  document.getElementById("mon_cv").style.display = "none";
  document.getElementById("mon_site").style.display ="block";
  document.getElementById("portfolio").style.display = "none";
  }

  else if (this.id =="nav_portfolio")
  {
    document.getElementById("mon_cv").style.display = "none";
    document.getElementById("mon_site").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
  }

  /*
  if (this.id == "nav_mon_cv")
  {
    document.getElementById("mon_cv").style.display = "block";
    document.getElementById("mon_site").style.display = "none";
    document.getElementById("portfolio").style.display = "none";

  }
  else if (this.id =="nav_mon_site")
  {
  document.getElementById("mon_cv").style.display = "none";
  document.getElementById("mon_site").style.display ="block";
  document.getElementById("portfolio").style.display = "none";
  }

  else if (this.id =="nav_portfolio")
  {
    document.getElementById("mon_cv").style.display = "none";
    document.getElementById("mon_site").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
  }
  */
}