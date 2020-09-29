localstorage
//Persistent Storage
> Save wrt to browser

localStorage.setItem('tokenltt','78678bjhb767b87')
localStorage.getItem('tokenltt')
"78678bjhb767b87"
localStorage.removeItem('tokenltt')
undefined

sessionStorage.setItem("kltoken",56765765)
undefined
sessionStorage.getItem('Kltoken')
null
sessionStorage.getItem('kltoken')
"56765765"
sessionStorage.removeItem('kltoken')
undefined
sessionStorage.getItem('kltoken')
null

save wrt to tab
remove automatcially as you close the tab

document.cookie
"_ga=GA1.2.777733879.1601303280; _gid=GA1.2.445056163.1601303280; _gat_gtag_UA_131256843_1=1"
document.cookie="location=12"
"location=12"
cookies save wrt to the website
when you reopen the webpage you will still see your saved cookies

document.cookie="location=12;expires=Fri, 2 Oct 2020 01:00:00 UTC;"