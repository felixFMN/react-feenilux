import React from "react";


const prodEj=[
    {
        id:1,
        name:'cable'
    },
    {
        id:2,
        name:'cable2'
    },
    {
        id:3,
        name:'cable3'
    },
]

const PlantillaProducto=()=>{
    return(
        <div>
            <h3 style={{margin:'20px'}}>Categorias</h3>
            {prodEj.map((value,index)=>{
                return(
                    <div key={value.id}>
                        <p>
                            {value.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default PlantillaProducto;