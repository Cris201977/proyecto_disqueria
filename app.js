const artistas = [
    {
        nombre: 'Soda Stereo',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '2007-11-27',
        album: 'Me Verás Volver',
        imagen: 'https://i.scdn.co/image/ab67616d0000b273e885d6895a32a612813bf6d3',
        descripcion: 'Soda Stereo es una banda del Rock alternativo formada en Buenos Aires, Argentina en 1982 por Gustavo Cerati (voz y guitarra), Zeta Bosio (bajo) y Charly Alberti (batería),​considerada ampliamente por la crítica especializada como la banda más importante, popular e influyente del rock en español y una leyenda de la música latinoamericana.2​ Fueron el primer grupo de habla hispana en conseguir un éxito masivo en Latinoamérica y tuvieron un papel muy importante en el desarrollo y la difusión del rock latinoamericano y el rock en español durante las décadas de 1980 y 1990. Durante su carrera, fueron vanguardistas y marcaron tendencia en Latinoamérica, en la que protagonizaron diversos géneros como la música divertida de sus inicios, la new wave, el dark wave, el hard rock, el rock alternativo y el rock electrónico de sus finales.',
        img_descripcion: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/CeratiAlbertiBosio.jpg'
    },
    {
        nombre: 'Los Auténticos Decadentes',
        banda: 'Los Auténticos Decadentes',
        genero: 'Rock/Ska',
        ultimoLanzamiento: '2019-04-26',
        album: 'MTV Unplugged',
        imagen: 'https://www.zonadeobras.com/wp-content/uploads/2018/11/autenticos-disco.jpg',
        descripcion: 'Los Auténticos Decadentes es una banda argentina de ska y rock alternativo formada en 1986 por Cucho Parisi, Nito Montecchia y Gastón Francés Bernardou. Si bien su principal género es el ska, suele tocar una cantidad múltiple de géneros y fusionarlos, formando así un sonido único.',
        img_descripcion: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/ADecadentes.JPG/405px-ADecadentes.JPG'
    },

    {
        nombre: 'Charly García',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2017-10-27',
        album: 'Random',
        imagen: 'https://fotos.perfil.com/2019/10/22/charly-garcia-795233.jpg',
        descripcion: 'Carlos Alberto García, más conocido como Charly García, es un músico, cantautor, multinstrumentista, compositor y productor discográfico argentino, considerado una de las figuras más importantes y vanguardistas de la música popular argentina y latinoamericana.',
        img_descripcion: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg/330px-Charly_Garc%C3%ADa_por_Alejandro_Kuropatwa.jpg'
    },
    {
        nombre: 'Luis Alberto Spinetta',
        banda: 'Almendra',
        genero: 'Rock',
        ultimoLanzamiento: '1970-12-01',
        album: 'Almendra',
        imagen: 'https://cdns-images.dzcdn.net/images/cover/bb4591a4c56f889dc093bba9512ed1eb/264x264.jpg',
        descripcion: 'Luis Alberto Spinetta fue un cantante, guitarrista, poeta, escritor y compositor argentino, considerado uno de los más importantes y respetados músicos de Argentina, Latinoamérica y del habla hispana .',
        img_descripcion: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Spinetta_en_Expreso_Imaginario_1976.jpg/330px-Spinetta_en_Expreso_Imaginario_1976.jpg'
    },
    {
        nombre: 'Gustavo Cerati',
        banda: 'Soda Stereo',
        genero: 'Rock',
        ultimoLanzamiento: '1995-11-07',
        album: 'Sueño Stereo',
        imagen: 'https://assets.megamediaradios.fm/sites/2/2021/08/siempre-es-hoy-2-1024x1024.jpg'
    },
    {
        nombre: 'Fito Páez',
        banda: 'Solista',
        genero: 'Rock',
        ultimoLanzamiento: '2021-11-12',
        album: 'La conquista del espacio',
        imagen: 'https://diariohoynet.nyc3.cdn.digitaloceanspaces.com/adjuntos/galerias/000/480/0000480752.jpg'
    },
    {
        nombre: 'Andrés Calamaro',
        banda: 'Los Rodríguez',
        genero: 'Rock',
        ultimoLanzamiento: '2021-11-19',
        album: 'Dios los cría (Edición Especial)',
        imagen: 'https://www.calamaro.com/wp-content/uploads/2013/10/altasuciedad1997.jpg'
    },
    {
        nombre: 'Shakira',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2021-04-02',
        album: 'El Dorado',
        imagen: 'https://akamai.sscdn.co/letras/360x360/albuns/3/9/5/6/1113691626708476.jpg'
    },
    {
        nombre: 'Ariana Grande',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-10-30',
        album: 'Positions',
        imagen: 'https://i.scdn.co/image/ab67616d0000b2735ef878a782c987d38d82b605'
    },
    {
        nombre: 'Dua Lipa',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-03-27',
        album: 'Future Nostalgia',
        imagen: 'https://upload.wikimedia.org/wikipedia/en/2/20/Dua_Lipa_%28album%29.png'
    },
    {
        nombre: 'Taylor Swift',
        banda: 'Solista',
        genero: 'Pop',
        ultimoLanzamiento: '2020-07-24',
        album: 'Folklore',
        imagen: 'https://i.scdn.co/image/ab6761610000e5eb6a224073987b930f99adc706'
    },
    {
        nombre: 'Eminem',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2020-12-18',
        album: 'Music To Be Murdered By - Side B',
        imagen: 'https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/264x264.jpg'
    },
    {
        nombre: 'Kendrick Lamar',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2017-04-14',
        album: 'DAMN.',
        imagen: 'https://indiehoy.com/wp-content/uploads/2017/05/Kendrick-Lamar-DAMN.jpeg'
    },
    {
        nombre: 'Drake',
        banda: 'Solista',
        genero: 'Hip Hop',
        ultimoLanzamiento: '2021-09-03',
        album: 'Certified Lover Boy',
        imagen: 'https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg'
    },
    {
        nombre: 'Virus',
        banda: 'Virus',
        genero: 'Rock',
        ultimoLanzamiento: '1998-09-03',
        album: '9',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Relax_1984_Virus.jpg'
    },
];

const generosMusicales = [
    { id: 1, nombre: "Rock" },
    { id: 2, nombre: "Pop" },
    { id: 3, nombre: "Electrónica" },
    { id: 4, nombre: "Hip Hop" },
    { id: 5, nombre: "Reggaetón" },
    { id: 6, nombre: "Heavy Metal" },
    // Agrega más categorías según sea necesario
];

//------- BOTONERA------------------
const botonera = document.createElement("div")
botonera.classList.add("botonera")

const botonHome = document.createElement("button")
botonHome.classList.add("home")
botonHome.setAttribute("id", 0)
botonHome.textContent = "Home"
botonHome.addEventListener("click",()=> {
    location.reload();
})
botonera.appendChild(botonHome)

generosMusicales.forEach (function(g){
    const boton = document.createElement("button")
    boton.classList.add("btn")
    boton.textContent = g.nombre
    boton.setAttribute("name", g.nombre)
    boton.addEventListener("click", ()=>{
        grilla.classList.remove("grilla_detalle")
        grilla.classList.add("grilla")
        const filtrado = artistas.filter((a) => {
            return a.genero === boton.name
        })
        mostrar(filtrado)
    })
    botonera.appendChild(boton)
});

//------------GRILLA-------------------//
const grilla = document.createElement("div")
grilla.classList.add("grilla")
document.body.append(botonera, grilla)
mostrar(artistas)

function mostrar(art){
    grilla.innerHTML ="";
    art.forEach(function (a) {
        crearCard(a);
    });
}

function crearCard(a) {
    const card = document.createElement("div")
    card.classList.add("card")
    card.addEventListener("click", () => {
        mostrarDetalle(a)
    })
    const nombre = document.createElement("h3")
    nombre.innerHTML = a.nombre
    const genero = document.createElement("h5")
    genero.innerHTML = a.genero
    const ultimoLanzamiento = document.createElement("p")
    ultimoLanzamiento.innerHTML = a.ultimoLanzamiento
    const album = document.createElement("p")
    album.innerHTML = a.album
    const figure = document.createElement("figure")
    const imagen = document.createElement("img")
    imagen.src = a.imagen
    imagen.classList.add("imagen")
    figure.appendChild(imagen)
    card.append(nombre, genero, ultimoLanzamiento, album, figure)
    grilla.appendChild(card)
}

//---------------DETALLE----------------------
const mostrarDetalle = function(a){
    const newCard = document.createElement("div")
    newCard.classList.add("newCard")
    const banda = document.createElement("h4")
    banda.innerHTML = a.banda
    const descripcion = document.createElement("p")
    descripcion.innerHTML = a.descripcion
    const figure_descripcion = document.createElement("figure")
    const img_descripcion = document.createElement("img")
    img_descripcion.src = a.img_descripcion
    img_descripcion.alt = "Foto de " + a.nombre
    img_descripcion.classList.add("img_desc")
    figure_descripcion.appendChild(img_descripcion)
    newCard.append(banda, descripcion, figure_descripcion)
    grilla.innerHTML = ""
    grilla.classList.remove("grilla")
    grilla.classList.add("grilla_detalle")
    grilla.append(crearCard(a), newCard)
}

