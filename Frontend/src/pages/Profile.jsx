import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Loading } from "../components/Loading"
import { getDatas } from "../datas"
import "../css/pages/profile.css"

export function Profile(){
    let [datas, waitdatas] = useState()
    
    const { id } = useParams()
    let usersid = ["18", "12"]
    let setuser = 18

    if (usersid.includes(id)) {
        setuser = id
    }
    
    useEffect(()=>{
    

        (async () => {
            waitdatas(
                Object.values(await getDatas("http://localhost:3000/user/" + setuser))[0]
            )
        })()

    }, [setuser])
    

    return <React.Fragment>
        <Header/>
        <Sidebar/>
        <main className="mainprofile">
            {
            datas ? 

            <React.Fragment>
                <h2 className="hello">Bonjour <span>{datas.userInfos.firstName}</span></h2>
                <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </React.Fragment>

            : <Loading/>
            }
        </main>
    </React.Fragment>

}