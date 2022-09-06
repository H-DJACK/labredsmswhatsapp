

export const Template = (phone:string, img:string, title: string, description: string,
      programm: string, link: string, datebegin: string, dateend: string,  hourbegin: string, hourend: string,) => {
        
      return  JSON.stringify({"messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": `${phone}` ,
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
                          "link":  `${img}` 
                      }
                  }
              ]
          },
          {
            "type": "body",
            "parameters": [
                {
                    "type": "text",
                    "text": `${title}` 
                },
                {
                  "type": "text",
                  "text": `${description}`
                },
                {
                  "type": "text",
                  "text": `${programm}`
                },
                {
                  "type": "text",
                  "text": `${link}`
                },
                {
                  "type": "text",
                  "text": `${datebegin} - ${dateend}`
                },
                {
                  "type": "text",
                  "text": `${hourbegin} - ${hourend}`
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
                  "text": `${link}`
              }
          ]
      }
        ]
      }        
      });
}



