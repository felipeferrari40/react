const Challenge = () =>{

    const valor1 = 10
    
    const valor2 = 33

    const soma = (e) =>{
        console.log(valor1 + valor2)
    }

    return(
        <div>
            <div>
                <h2>Valor 1: {valor1}</h2>
            </div>
            <div>
                <h2>Valor 2: {valor2}</h2>
            </div>
            <div>
                <button onClick={soma}>
                    Somar!
                </button>
            </div>
        </div>
        
    )

}

export default Challenge