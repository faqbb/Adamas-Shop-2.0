import { useEffect, useState } from "react"
import React from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"

 function grabProds(setProdsProp) {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        getDocs(queryCollection)
        .then(resp => setProdsProp(resp.docs.map(product => ( { id: product.id, ...product.data() } ) ) ) )
        }

        export default grabProds

function grabProd(setProdProp, id) {
    const db = getFirestore()
    const dbQuery = doc(db, 'products', id)
    getDoc(dbQuery)
    .then(resp => setProdProp({ id: resp.id, ...resp.data() } ) )   
    }

    export {grabProd}
