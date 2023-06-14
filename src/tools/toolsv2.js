import { collection, getDocs, getFirestore } from "firebase/firestore"

export const findProduct = async (setFindprop, detailProp) => {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        const response = await getDocs(queryCollection)
        const data = response.docs.map(product => ( { id: product.id, ...product.data() } ) )
        const result = data.find(producto => producto.id === detailProp);
        setFindprop(result)    
    }

    export const getProducts = async (setProdprop, filterProp) => {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        const response = await getDocs(queryCollection)
        const data = response.docs.map(product => ( { id: product.id, ...product.data() } ) )
        let result = data
        console.log(result)
        if (filterProp) {
             result = data.filter(product => product.category == filterProp)
             setProdprop(result)
        }
        else {
            setProdprop(result)    
        }
    }