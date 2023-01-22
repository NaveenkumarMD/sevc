import React, { useEffect, useState } from 'react'
import "../../../css/Admin/Teamview.css"
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import { RiSecurePaymentFill } from "react-icons/ri"
import { json, useLocation } from 'react-router-dom'
import { db } from "../../../Firebase/init"
import { getDoc, query, where, collection, getDocs, updateDoc, doc, limit } from "firebase/firestore"
import { toast, ToastContainer } from 'react-toastify'
import sendmail from '../../../sendmails'  

function Teamview() {
    const location = useLocation()
    const teamname = location.pathname.split("/")[3]
    const [teamdata, setTeamdata] = useState([])
    useEffect(() => {
        const q = query(collection(db, "users"), where("team_name", "==", teamname))
        const querySnapshot = getDocs(q)
        let teams = []
        querySnapshot.then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setTeamdata(doc.data())
            })
        })
        console.log("team data is ", teamdata)
    }, [])
    const handlepaymentauthorise = async () => {
        const q = query(collection(db, "users"), where("team_name", "==", teamname), limit(1))
        const querySnapshot = await getDocs(q)
        let docid = ""
        querySnapshot.forEach(async (docx) => {
            docid = docx.id
            await updateDoc(doc(db, "users", docid), {
                payment: true
            })
        })


    }
    const handlepaymentphase1 = () => {
        return sendmail()
        const q = query(collection(db, "users"), where("team_name", "==", teamname), limit(1))
        const querySnapshot = getDocs(q)
        let docid = ""
        querySnapshot.then((querySnapshot) => {
            querySnapshot.forEach((docx) => {
                docid = docx.id
                updateDoc(doc(db, "users", docid), {
                    phase1payment: true
                }, { merge: true })
            })
        })
        
        setTimeout(()=>{
            toast.success("Payment authorized")            
        },1000)
        setTimeout(()=>{
            window.location.reload()
        },2000)
    }
    const handlepaymentphase2 = () => {
        const q = query(collection(db, "users"), where("team_name", "==", teamname), limit(1))
        const querySnapshot = getDocs(q)
        let docid = ""
        querySnapshot.then((querySnapshot) => {
            querySnapshot.forEach((docx) => {
                docid = docx.id
                updateDoc(doc(db, "users", docid), {
                    phase2payment: true

                }, { merge: true })
            })
        })
        setTimeout(()=>{
            toast.success("Payment authorized")            
        },1000)
        setTimeout(()=>{
            window.location.reload()
        },2000)
    }
    const handlepaymentphase3 = () => {
        const q = query(collection(db, "users"), where("team_name", "==", teamname), limit(1))
        const querySnapshot = getDocs(q)
        let docid = ""
        querySnapshot.then((querySnapshot) => {
            querySnapshot.forEach((docx) => {
                docid = docx.id
                updateDoc(doc(db, "users", docid), {
                    phase3: true
                }, { merge: true })
            })
        })
        setTimeout(()=>{
            toast.success("Payment authorized")            
        },1000)
        setTimeout(()=>{
            window.location.reload()
        },2000)
    }

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className='teamview'>
                <div className='home-container'>
                    <div className='title-1 home-title'> {teamdata && teamdata.team_name}</div>
                    <div>
                        <table className='table-view' >
                            {
                                <pre style={{ color: "white", fontSize: "20px", width: "600px" }}>
                                    <code >
                                        {JSON.stringify(teamdata, null, 2).replace(/{/g, "").replace(/}/g, "").replace(/"/g, "").replace(/,/g, "").replace(/:/g, " : ")
                                        }
                                    </code>
                                </pre>
                            }
                            {/* {
                                teamdata && Object.keys(teamdata).map((item, index) => {
                                    if (item == "team_name" || item == "team_members" || item == "payment" ||
                                        item=="password"  || item=="confirm_password"
                                    ) {
                                        return true
                                    }
                                    return (
                                        <tr key={index}>
                                            <td className='field-label'>{item}</td>
                                            <td className='field-value'> :{teamdata[item]}</td>
                                        </tr>
                                    )
                                })
                            } */}

                        </table>
                        {/* {
                            teamdata && !teamdata.payment &&

                            <div>
                                <div className='query-btn' onClick={handlepaymentauthorise}>
                                    Authorize payment <RiSecurePaymentFill size={25} />
                                </div>
                            </div>
                        } */}
                        {
                            teamdata && teamdata.phase1 && (teamdata.phase1payment == false || !("phase1payment" in teamdata)) &&
                            <div>
                                <div className='query-btn' onClick={handlepaymentphase1}>
                                    Authorize phase 1 <RiSecurePaymentFill size={25} />
                                </div>
                            </div>
                        }
                        {
                            teamdata && teamdata.phase2 && (teamdata.phase2payment == false || !("phase2payment" in teamdata)) &&
                            <div>
                                <div className='query-btn' onClick={handlepaymentphase2}>
                                    Authorize phase 2 <RiSecurePaymentFill size={25} />
                                </div>
                            </div>
                        }
                        {
                            teamdata && teamdata.phase3 && (teamdata.phase3payment == false || !("phase3payment" in teamdata)) &&
                            <div>
                                <div className='query-btn' onClick={handlepaymentphase3}>
                                    Authorize phase 3 <RiSecurePaymentFill size={25} />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Teamview
