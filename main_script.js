window.addEventListener("load", ()=>{
    fetch("data.json")

        .then((resp) => resp.json())

        .then((json) => {
            const table = document.getElementById("main-table")

            const tbody = document.getElementsByTagName("tbody")[0]

            for (info of json) {
                tbody.innerHTML += "<tr>" + 
                `<td>${info.name}</td>` +
                `<td>${info.title}</td>` +
                `<td>${info.content}</td>` +
                "</tr>"
            }
        }
)})

const AddNewContent = ()=>{
    let title = document.getElementById("input-title")
    let name = document.getElementById("input-name")
    let image = document.getElementById("input-image")
    let content = ""

    if (image == null){
        content = `${document.getElementById("input-contents")}`
    }else{
        content = `${document.getElementById("input-contents")}<img src="${document.getElementById("input-image")}"/>`
    }
   
    addContent = {"name": name, "title": title, "content": content}

    fetch("data.json")
        .then((resp) => resp.json())
        .then((json) => {
            json.push(addContent)
        })
}