import React, { useState } from "react"
import Papa, { ParseResult } from  "papaparse"
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


const ListNumber =  ({ form }: Props)  => {
    const [values, setValues] = useState([]);

    const [parsedData, setParsedData] = useState([]);
  
    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);

    const handleUploadFile = (e:  React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
          return;
        }
    
        Papa.parse(e.target.files[0], {
          header: true,
          skipEmptyLines: true,
          complete: function (results:ParseResult<never>) {
            console.log(results.data)
            const rowsArray:any = [];
            const valuesArray:any = [];
    
            // Iterating data to get column name and their values
            results.data.map((d) => {
              rowsArray.push(Object.keys(d));
              valuesArray.push(Object.values(d));
            });
    
            // Parsed Data Response in array format
            setParsedData(results.data);
    
            // Filtered Column Names
            setTableRows(rowsArray[0]);
    
            // Filtered Values
            setValues(valuesArray);
          },
        });
        
    }

    const handleSend = () => {
        values.map((value, index) => {
          axios({
            method: 'post',
            url: 'https://graph.facebook.com/v14.0/106582738852547/messages',
            headers: { 
              'Authorization': 'Bearer EAAPGSwaGSqIBAE76beySUSvdUFMF18dVEZBeKIKgGCubFZC0q8lthjhL2IrFMtnkHaKCOA6zg0qQlwMmIIWEYTneGFYeWcX6IbTojODPAjj3mtK4R9HPnELrrWuxyBhZBRQqBZBi3qwQ7xusyw32SnuAnponYNjiE84ZAOZBMYGushsYlWyjRnOmZCGMVKPwOVEcK5OcWQvf1twNC8Xwueq', 
              'Content-Type': 'application/json'
            },
            data : Template(value[0], form.img, form.title, form.description, form.training, form.link, form.begindate, form.enddate, form.beginhour, form.endhour) 
          }).then(function (response) {
            alert("Votre message a ete envoyer avec success")
            console.log(JSON.stringify(response.data));
           
          })
          .catch(function (error) {
            console.log(error);
            alert(error.response.data.error.message)
          });
         
        })
          
      }
  

    return (
        <>
            <input  type="file"
                name="file"
                accept=".csv"
                style={{ display: "block", margin: "10px auto" }}
                onChange={handleUploadFile} />
            <br />
            <br />
            {/* Table */}
            <table>
                <tbody>
                    {values.map((value: any[], index) => {
                         console.log("rtoto", values);
                    return (
                       
                        
                        <tr key={index}>
                            <td key={index}>{value[0]}</td>
                        </tr>
                        
                        /*<tr key={index}>
                        {value.map((val, i) => {
                            return <td key={i}>{value[3]}</td>;
                        })}
                        </tr>*/
                    );
                    })}
                </tbody>
            </table>
            <button onClick={handleSend}>Send</button>
        </>
    )
    
}

export default ListNumber;