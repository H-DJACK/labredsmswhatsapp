import axios from "axios"
import React, { useState } from "react"
import Papa, { ParseResult } from  "papaparse"

const Home : React.FC = () => {

  const [values, setValues] = useState([]);

  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);




    var data = JSON.stringify({
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": "237654541280",
        "type": "template",
        "template": {
          "name": "template_labred_training",
          "language": {
            "code": "fr"
          }, 
           "components": [
            {
                "type": "header",
                "parameters": [
                    {
                        "type": "image",
                        "image": {
                            "link": "https://labredclub.com/images/dronef.jpg" 
                        }
                    }
                ]
            },
            {
              "type": "body",
              "parameters": [
                  {
                      "type": "text",
                      "text": "Hello"
                  },
                  {
                    "type": "text",
                    "text": "Hello"
                  },
                  {
                    "type": "text",
                    "text": "Hello"
                  },
                  {
                    "type": "text",
                    "text": "Hello"
                  },
                  {
                    "type": "text",
                    "text": "Hello"
                  }
                  ,
                  {
                    "type": "text",
                    "text": "Hello"
                  }
              ]
          },
          {
            "type": "button",
            "sub_type" : "url",
            "index": "0", 
            "parameters": [
                {
                    "type": "text",
                    "text": "https://labredclub.com/drone.php" 
                }
            ]
        }
          ]
        }
          
      }
    
);
 const handleClick = () => {
        
       
    }
    const handleButton = () => {
      [237698824939, 237656283301, 237656068502, 237675272585, 237654541280, 237691152270, 237693489549, 237698384945].map((value, index) => {
        axios({
          method: 'post',
          url: 'https://graph.facebook.com/v14.0/106582738852547/messages',
          headers: { 
            'Authorization': 'Bearer EAAPGSwaGSqIBAEqUmkl6L9xq7334Et45DXUrSVZAwqZAaoZCbx8NHRp9WZCMRSMeuIdrjB2sZCkbeM9z9etpFMt14HnwxN5RvqDnSNbiN4D7ZCgByoY5ybZADvZAMROJIOueKZBxJFxpEiAoAV7XOH2qrTK9eWdeVgRRVpBnJS2fspyx0GWAvFSaE', 
            'Content-Type': 'application/json'
          },
          data : JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": + value + "",
            "type": "template",
            "template": {
              "name": "template_labred_training",
              "language": {
                "code": "fr"
              }, 
               "components": [
                {
                    "type": "header",
                    "parameters": [
                        {
                            "type": "image",
                            "image": {
                                "link": "https://labredclub.com/images/dronef.jpg" 
                            }
                        }
                    ]
                },
                {
                  "type": "body",
                  "parameters": [
                      {
                          "type": "text",
                          "text": "Hello"
                      },
                      {
                        "type": "text",
                        "text": "Hello"
                      },
                      {
                        "type": "text",
                        "text": "Hello"
                      },
                      {
                        "type": "text",
                        "text": "Hello"
                      },
                      {
                        "type": "text",
                        "text": "Hello"
                      }
                      ,
                      {
                        "type": "text",
                        "text": "Hello"
                      }
                  ]
              },
              {
                "type": "button",
                "sub_type" : "url",
                "index": "0", 
                "parameters": [
                    {
                        "type": "text",
                        "text": "https://labredclub.com/drone.php" 
                    }
                ]
            }
              ]
            }
              
          }
        
    )
        }).then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error.response.data.error);
        });
       
      })
        
    }

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

    return (
        <>
            <div>
                LABRED SOFTWARE
            </div>

            <input type="text" onClick={handleClick} name="" id="" />

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
            console.log(value[3]);
            
            return (
              <tr key={index}>
                {value.map((val, i) => {
                  return <td key={i}>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
            <button onClick={handleButton} >Send</button>
        </>
    )
}

export default Home