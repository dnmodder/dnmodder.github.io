function generarMenus(elementos, superior) {
    let ul = document.createElement("ul")
    
    for (let i in elementos) {
        let elemento = elementos[i]
        let li = document.createElement("li")
        let a = document.createElement("a")

        if (elemento.clase) {
            li.className = elemento.clase
            if (li.className.includes("vertical")) {
                ul.className = "desplegable"
                a.className = "vlink"
            } else if (li.className.includes("horizontal")) {
                ul.className = "menu"
                a.className = "hlink"
            }
        }
        
        a.href = elemento.enlace
        a.innerText = elemento.texto
        if (elemento.elementos != null) {
            generarMenus(elemento.elementos, a)
        }
        li.appendChild(a)
        ul.appendChild(li)
    }
    superior.appendChild(ul)
}


fetch('./menu.json')
    .then((response) => response.json())
    .then((json) => {
        let nav = document.getElementById("navbar")
        generarMenus(json.elementos, nav)
    })
