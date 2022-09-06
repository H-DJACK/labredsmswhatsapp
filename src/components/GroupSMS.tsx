
import React, { useState } from "react"
import "./Msg.css"


type formTypes = {
        img: string,
        title: string,
        description: string,
        begindate: string,
        enddate: string,
        beginhour: string,
        endhour: string,
        link: string,
        training: string
  };

type Props = {
    form: formTypes,
    setForm: React.Dispatch<React.SetStateAction<formTypes>>;
  };
  

const GroupSMS = ({form , setForm }: Props) => {
    return (
        <>
        
        <form action="" >
           <h3>Add information about your template</h3>
           <div>
                <div className="item">
                    <label htmlFor="img">Image Link: </label>
                    <input type="text" value={form.img} id="img" onChange={(e) => setForm({...form,img: e.target.value })} />
                </div>

                <div className="item">
                    <label htmlFor="title">Title: </label>
                    <input type="text"  value={form.title} id="title" onChange={(e) => setForm({...form, title: e.target.value })}  />
                </div>

                <div className="item">
                    <label htmlFor="description">Description: </label>
                    <input type="text" value={form.description} onChange={(e) => setForm({...form, description: e.target.value })}   id="description" />
                </div>
                <div className="item">
                    <label htmlFor="link">Link trainning: </label>
                    <input type="text" value={form.link} onChange={(e) => setForm({...form, link: e.target.value })}   id="link" />
                </div>

           </div>
           

            <div className="date">
                <div>
                    <label htmlFor="begin">Begin date: </label>
                    <input type="date" value={form.begindate} onChange={(e) => setForm({...form, begindate: e.target.value })}   id="begindate"  />
                </div>

                <div>
                    <label htmlFor="end">End date: </label>
                    <input type="date" value={form.enddate} onChange={(e) => setForm({...form, enddate: e.target.value })}   id="enddate"/>
                </div>
            </div>
            
            <div className="hour">
                <div>
                    <label htmlFor="beginhour">Begin Hour:</label>
                    <input type="text" value={form.beginhour} onChange={(e) => setForm({...form, beginhour: e.target.value })}   id="beginhour" />
                </div>

                <div>
                    <label htmlFor="endhour">End Hour: </label>
                    <input type="text" value={form.endhour} onChange={(e) => setForm({...form, endhour: e.target.value })}   id="endhour" />
                </div>
            </div>
            
            <div className="item label">
                <label htmlFor="programm">Programm of trainning: </label><br />
                <textarea name="programm" value={form.training} onChange={(e) => setForm({...form, training: e.target.value })}   id="programm" cols={50} rows={10}></textarea>
            </div>
    
            <button>Save</button>
           
        </form>             
        </>
    )
}

export default GroupSMS;