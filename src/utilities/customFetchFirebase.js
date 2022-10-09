import { getFirestore, collection, getDocs } from 'firebase/firestore';



export const customFetchFirebase = (products) => {

    return new Promise( (resolve, reject) => {
         setTimeout(() =>{
             resolve(products)}, 2000  )

    })
}