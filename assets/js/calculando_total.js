function calcular_total(){
    /* OBTENER VALORES DE LOS INPUTS */
    console.log('calcular_total')
    cantidad = document.querySelector("input[name='cantidad']").value
    console.log('cantidad:', cantidad)
    color = document.querySelector("input[name='color']").value
    console.log('color:', color)
    precio = document.querySelector("input[name='precio']").value
    console.log('precio:', precio)

    /* REALIZAR CALCULOS */
    total = cantidad*precio
    console.log('total:', total)
    /* ACTUALIZAR INPUTS */
    document.querySelector("input[name='buy-total']").value=total
    document.querySelector("input[name='buy-cantidad']").value=cantidad
    document.querySelector("input[name='buy-color']").style="background-color:"+color
}