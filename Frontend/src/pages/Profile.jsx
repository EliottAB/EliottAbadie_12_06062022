import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Loading } from "../components/Loading"
import { Score } from "../components/Score"
import { Activity } from "../components/Activity"
import { getDatas } from "../datas"
import "../css/pages/profile.css"

export function Profile(){
    let [datas, waitdatas] = useState()
    
    const { id } = useParams()
    let usersid = ["18", "12"]
    let setuser = 18

    if (usersid.includes(id)) {
        setuser = parseInt(id)
    }
    
    useEffect(()=>{
        (async () => {
            waitdatas({
                globalInfos: await getDatas(setuser, ""),
                activity: await getDatas(setuser, "/activity"),
                sessions: await getDatas(setuser, "/average-sessions"),
                performance: await getDatas(setuser, "/performance")
            })
        })()

    }, [setuser])
    

    return <React.Fragment>
        <Header/>
        <Sidebar/>
        <main className="mainprofile">
            {
            datas ? 
            
            <React.Fragment>
                <h2 className="hello">Bonjour <span>{datas.globalInfos.userInfos.firstName}</span></h2>
                <p className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <Score></Score>
                <Activity data={datas.activity.datas} minkg={datas.activity.minkg} maxkg={datas.activity.maxkg}></Activity>
            </React.Fragment>

            : <Loading/>
            }
        </main>
    </React.Fragment>

}