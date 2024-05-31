    const app= document.querySelector('#cap2')
    const md = fetch("./README.md").then((response) => response.text()).then(text=>{
        const converter = new showdown.Converter()
        const html = converter.makeHtml(text)
        app.innerHTML = html
    })
    