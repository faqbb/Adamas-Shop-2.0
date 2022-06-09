import { collection, getDocs, getFirestore } from "firebase/firestore"

export const findProduct = async (setFindprop, detailProp) => {
        const db = getFirestore()
        const queryCollection = collection(db, 'products')
        const response = await getDocs(queryCollection)
        const data = response.docs.map(product => ( { id: product.id, ...product.data() } ) )
        const result = data.find(producto => producto.id === detailProp);
        setFindprop(result)    
    }