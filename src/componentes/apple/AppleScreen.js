

import React from 'react'
import { Cellist } from '../marcas/Cellist'
import { MarcasList } from '../marcas/MarcasList'


export const AppleScreen = ({
  modelo,
  bateria
}) => {
    return (
        <div>
          <h1>Apple Screen</h1>
          <h1>Bateria : {modelo}</h1>
          <hr />
          


          

          <MarcasList marca="Apple" />
          {/* <Cellist/> */}


          







          

        </div>
    )
}
