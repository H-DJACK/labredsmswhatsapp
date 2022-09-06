import axios from "axios"
import React, { useState } from "react"
import Papa, { ParseResult } from  "papaparse"
import ListNumber from "../components/ListNumber"
import GroupSMS from "../components/GroupSMS"
import "./Home.css"
import IndividualSMS from "../components/IndividualSMS"

type formType = {
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


const Home : React.FC = () => {

  const [display, setDisplay] = useState<Boolean[]>([true, false, false]);

  const [form, setForm] = useState<formType>({
    img: "",
    title: "",
    description: "",
    begindate: "",
    enddate: "",
    beginhour: "",
    endhour: "",
    link: "",
    training: ""
});


    return (
        <>
            <header>
              <h1>LABRED SOFTWARE </h1>  
              <nav>
                  <ul>
                    <li onClick={()  => setDisplay([true, false, false])}>Setting</li>
                    <li onClick={()  => setDisplay([false, true, false])}>Group Message</li>
                    <li onClick={()  => setDisplay([false, false, true])}>Individual Message</li>
                  </ul>
                </nav>
            </header>

            <section>
              <div className="block">
                {display[0]&&<GroupSMS form={form} setForm={setForm} />}
                {display[1]&&<ListNumber form={form} />}
                {display[2]&&<IndividualSMS form={form} />}
              </div>
            
            </section>

            <footer>
              <small>copyrigth</small>
            </footer>
        </>
    )
}

export default Home