const URL_BASE = 'http://localhost:3000/'

//GET -----------------------------------------------------
//get user scores
export const autoLogin = () => {
    let infoPack =  fetch(`${URL_BASE}me`)
                    .then(res => res.json())
                    .catch(()=> false)
    
    return infoPack
}


//POST ----------------------------------------------
//post response login 
export const login = (body) => {
    let infoPack = fetch(`${URL_BASE}login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(err=>console.log(err))

    return infoPack
}

export const signup = (body) => {
    let infoPack = fetch(`${URL_BASE}signup`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .catch((err)=>console.log(err))

    return infoPack
}

export const joinPlan = (user, typeOfPlan) => {
    let body = {
        username: user,
        title: typeOfPlan
    }
    let infoPack = fetch(`${URL_BASE}joinplan`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(res=>res.json())
    .catch((err)=>console.log(err))

    return infoPack
}

//DELETE ---------------------------------------------
//delete user
export const logout = (id) => {
    return fetch(`${URL_BASE}users/${id}`,{
        method:'DELETE',
    })
    .then(()=>true)
    .catch(()=>false)
}