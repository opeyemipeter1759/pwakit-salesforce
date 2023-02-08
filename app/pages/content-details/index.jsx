import React from 'react'
import fetch from 'cross-fetch'

import {HTTPError} from 'pwa-kit-react-sdk/ssr/universal/errors'

const ContentDetails = ({contentResult}) => {
    if (!contentResult) {
        return <div>Loading...</div>
    }

    return <div dangerouslySetInnerHTML={{__html: contentResult.c_body}} />
 }

ContentDetails.getProps = async ({params}) => {
    let contentResult
    const result = await fetch(
        `http://localhost:3000/mobify/proxy/ocapi/s/RefArch/dw/shop/v20_2/content/${params.id}?client_id=${'6379ddf0-b822-4064-97cb-cf7d5efd6ea2'}`
    )

    if (result.ok) {
        contentResult = await result.json()
    } else {
        const error = await result.json()
        throw new HTTPError(result.status, error.fault.message)
    }

   return {contentResult}
}

ContentDetails.getTemplateName = () => 'content-details'

export default ContentDetails