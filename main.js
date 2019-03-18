let app = new Vue({
    el: `#app`,
    data:
    {
        msg: ``,
        nombre: "Jhon",
        apellido: "Diaz",
        mostrar: false,
        lista: [],
        municipios: ['Mocoa', 'Villagarzon', 'Pto Caicedo', 'Pto Asis'],
        personas: [
            {
                nombre: "Jhon",
                celular: "123"
            },
            {
                nombre: "Carlos",
                celular: "456"
            },
            {
                nombre: "Jimena",
                celular: "789"
            },
            {
                nombre: "Lorena",
                celular: "911"
            }
        ]
    },
    methods:
    {
        guardar() {
            this.lista.push(this.msg)
            this.msg = " "
        }
    }
})




/*
const url = 'https://jsonplaceholder.typicode.com/posts'
//
fetch(url).then((res)=> res.json())
    .then(data =>{
        var html = ' '
        data.map((value)=>{
            html +=  ` <li>${value.title}</li>`
        })
        document.getElementById('post').innerHTML = html
        console.log(data)
    })

    //vue.js 
*/