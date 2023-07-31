import { useEffect, useState } from "react"
import api from '../service/api'

function Characters() {

    const [characters, setcharactes] = useState()
    useEffect(() => {
        api
        .get('/characters')
        .then(response => {
         setcharactes(response.data.data)
        console.log(characters)
    })
        .catch(err => console.log(err))
    })



return   

}

export default Characters