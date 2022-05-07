import React, { useEffect, useState } from "react";

// Firebase
import { db } from "../firebase-config"
import { collection, getDocs, addDoc, deleteDoc, doc } from "@firebase/firestore";

// Fill React component
import Navigation from "../compenents/react/Navigation";
import CardProject from "../compenents/react/CardProject";
import Footer from "../compenents/react/Footer";

const Work = () => {
    const [newWorkTitle, setWorkTitle] = useState("");
    const [newWorkLanguage, setWorkLanguage] = useState("");
    const [newWorkDescription, setWorkDescription] = useState("");
    const [works, setWorks] = useState([]);
    const worksCollectionRef = collection(db, "works");

    const createWork = async () => {
        await addDoc(worksCollectionRef, {title: newWorkTitle, language: newWorkLanguage, description: newWorkDescription});
    }

    const deleteWork = async (id) => {
        const workDoc = doc(db, "works", id);
        await deleteDoc(workDoc)
    }

    useEffect(() => {

        const getWorks = async () => {
            const data = await getDocs(worksCollectionRef);
            setWorks(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getWorks()
    }, [worksCollectionRef])

    return (
        <div className="work">
            <Navigation />
            <div className="home">
                <h1>Work</h1>


                <div className="Insert">

                    <input placeholder="title..." onChange={(event) => (setWorkTitle(event.target.value))}/>
                    <input placeholder="language..." onChange={(event) => (setWorkLanguage(event.target.value))}/>
                    <input placeholder="description..." onChange={(event) => (setWorkDescription(event.target.value))}/>
                    <br/><br/>
                    <button onClick={createWork}>Create Work</button>
                    <br/><br/><br/>

                </div>
                
                {works.map((work) => {
                    return (
                        <>
                            <CardProject title={work.title} language={work.language} description={work.description} />
                            <button onClick={() => {deleteWork(work.id)}}>Delete</button>
                        </>
                    )
                })}
                
            </div>
            <Footer />
        </div>
    );
}

export default Work;