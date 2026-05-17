// ===== MODELO =====

class Perfume{

    constructor(
    nombre,
    marca,
    precio,
    stock
    ){
    
    this.nombre=nombre
    this.marca=marca
    this.precio=precio
    this.stock=stock
    
    }
    
    }
    
    
    // ===== SINGLETON =====
    
    class Inventario{
    
    static instancia
    
    constructor(){
    
    if(Inventario.instancia){
    
    return Inventario.instancia
    
    }
    
    this.perfumes=[]
    
    Inventario.instancia=this
    
    }
    
    agregar(perfume){
    
    this.perfumes.push(
    perfume
    )
    
    }
    
    obtener(){
    
    return this.perfumes
    
    }
    
    ordenar(estrategia){
    
    this.perfumes=
    estrategia.ordenar(
    this.perfumes
    )
    
    }
    
    }
    
    
    // ===== STRATEGY =====
    
    class OrdenPrecio{
    
    ordenar(lista){
    
    return lista.sort(
    (a,b)=>
    a.precio-b.precio
    )
    
    }
    
    }
    
    class OrdenStock{
    
    ordenar(lista){
    
    return lista.sort(
    (a,b)=>
    a.stock-b.stock
    )
    
    }
    
    }
    
    
    // ===== VISTA =====
    
    class Vista{
    
    mostrar(perfumes){
    
    const lista=
    document.getElementById(
    "lista"
    )
    
    lista.innerHTML=""
    
    perfumes.forEach(
    perfume=>{
    
    lista.innerHTML+=`
    
    <li>
    
    ${perfume.nombre}
    -
    ${perfume.marca}
    
    Precio:
    $${perfume.precio}
    
    Stock:
    ${perfume.stock}
    
    </li>
    
    `
    
    }
    
    )
    
    }
    
    }
    
    
    // ===== CONTROLADOR =====
    
    class Controlador{
    
    constructor(){
    
    this.inventario=
    new Inventario()
    
    this.vista=
    new Vista()
    
    }
    
    agregar(){
    
    const nombre=
    document.getElementById(
    "nombre"
    ).value
    
    const marca=
    document.getElementById(
    "marca"
    ).value
    
    const precio=
    Number(
    document.getElementById(
    "precio"
    ).value
    )
    
    const stock=
    Number(
    document.getElementById(
    "stock"
    ).value
    )
    
    const perfume=
    new Perfume(
    nombre,
    marca,
    precio,
    stock
    )
    
    this.inventario
    .agregar(
    perfume
    )
    
    this.vista.mostrar(
    this.inventario
    .obtener()
    )
    
    }
    
    ordenarPrecio(){
    
    this.inventario
    .ordenar(
    new OrdenPrecio()
    )
    
    this.vista.mostrar(
    this.inventario
    .obtener()
    )
    
    }
    
    ordenarStock(){
    
    this.inventario
    .ordenar(
    new OrdenStock()
    )
    
    this.vista.mostrar(
    this.inventario
    .obtener()
    )
    
    }
    
    }
    
    const controlador=
    new Controlador()
    
    
    document
    .getElementById(
    "agregar"
    )
    .onclick=
    ()=>controlador.agregar()
    
    
    document
    .getElementById(
    "ordenarPrecio"
    )
    .onclick=
    ()=>controlador
    .ordenarPrecio()
    
    
    document
    .getElementById(
    "ordenarStock"
    )
    .onclick=
    ()=>controlador
    .ordenarStock()