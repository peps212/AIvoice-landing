import { headers } from "@/next.config"


export default async function handler(req, res) {

    const {email} = JSON.parse(req.body)
    console.log(email)
    console.log(process.env.MAILCHIMP_AUDIENCE_ID)
    if (!email) {
        res.status(401).json({e: "Email Required"})
        return
    }

    const mailchimpData = {
        members: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    }



    try {

        const URL = `https://us21.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}`

        const response = await fetch(URL,{
            method: "POST",
            headers: {
                Authorization: `auth ${process.env.MAILCHIMP_API}`
            },
            body: JSON.stringify(mailchimpData)
        })

        const data = await response.json()

        if (data.errors[0]?.error) {
            return res.status(401).json({ error: data.errors[0].error });
        } else {
            res.status(200).json({ success: true});
        }


    } catch (e) {
        res.status(401).json({e:"Something Went Wrong :("})
    }
}