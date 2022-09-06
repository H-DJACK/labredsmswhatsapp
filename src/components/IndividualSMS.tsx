import React, { useState } from "react"
import "./Msg.css"
import axios from "axios"
import { Template } from "../helpers/templates";

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
};




const IndividualSMS = ({ form }: Props) => {
    const [number, setNumber] = useState<string>("");

    const handleSend = (e:any) => {
        e.preventDefault()
        axios({
          method: 'post',
          url: 'https://graph.facebook.com/v14.0/106582738852547/messages',
          headers: { 
            'Authorization': 'Bearer EAAPGSwaGSqIBAEqUmkl6L9xq7334Et45DXUrSVZAwqZAaoZCbx8NHRp9WZCMRSMeuIdrjB2sZCkbeM9z9etpFMt14HnwxN5RvqDnSNbiN4D7ZCgByoY5ybZADvZAMROJIOueKZBxJFxpEiAoAV7XOH2qrTK9eWdeVgRRVpBnJS2fspyx0GWAvFSaE', 
            'Content-Type': 'application/json'
          },
          data : Template(number, form.img, form.title, form.description, form.training, form.link, form.begindate, form.enddate, form.beginhour, form.endhour) 
        }).then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        
    } 
  
    return (
        <>
       
        <form action="" onSubmit={handleSend}>
           <div>
                <div className="item">
                    <label htmlFor="img" >Phone: </label>
                    <input type="text" value={ number }  onChange={(e) => setNumber(e.target.value)} id="img" />
                </div>

           </div>
           <button>Send</button>
           
        </form>             
        </>
    )
}

export default IndividualSMS;