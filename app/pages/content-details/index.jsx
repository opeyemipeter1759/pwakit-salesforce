import React from 'react'
import fetch from 'cross-fetch'

// import {HTTPError} from 'pwa-kit-react-sdk/ssr/universal/errors'

const ContentDetails = ( { contentResult, error } ) =>
{
    if ( error )
    {
        return <>{ error.fault.message}</>
    }
    if (!contentResult) {
        return <div>Loading...</div>
    }

    return <div dangerouslySetInnerHTML={{__html: contentResult.c_body}} />
 }

ContentDetails.getProps = async ({params,res}) => {
    let contentResult, error
    const result = await fetch(
        `http://localhost:3000/mobify/proxy/ocapi/s/RefArch/dw/shop/v20_2/content/${params.id}?client_id=${'6379ddf0-b822-4064-97cb-cf7d5efd6ea2'}`
    )

    if (result.ok) {
        contentResult = await result.json()
    } else {
        error = await result.json()
        if ( res )
        {
            res.status(result.status)
        }
        // throw new HTTPError(result.status, error.fault.message)
    }

   return {contentResult, error}
}

ContentDetails.getTemplateName = () => 'content-details'

export default ContentDetails