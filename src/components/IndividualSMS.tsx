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
            'Authorization': 'Bearer EAAPGSwaGSqIBAOvhLKYC63pph3sMUZCa4gbJ3WDaxueDEF7q3sO6eMsc3saJbRWYGekWwJ2WLMfuMyuQad6uqcnGMZBVz0K2JmhvPO7eQycp8KPdadTMKuTPrNjJaZCRNADZAftfy0BOc2xmh4MCkmOb4tGqzP7d5yVECYvqM2vlvUNvWu7VocDo7sQef9JYfIXZBamZC2vSBSqbHXVIj6', 
            'Content-Type': 'application/json'
          },
          data : Template(number, form.img, form.title, form.description, form.training, form.link, form.begindate, form.enddate, form.beginhour, form.endhour) 
        }).then(function (response) {
          console.log(JSON.stringify(response.data));
          alert("Votre message a ete envoyer avec success")
        })
        .catch(function (error) {
          console.log(error);
          alert(error.response.data.error.message)
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