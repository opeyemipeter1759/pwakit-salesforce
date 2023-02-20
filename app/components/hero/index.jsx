/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import PropTypes from 'prop-types'
import {Box, Flex, Heading, Stack, Image, Text} from '@chakra-ui/react'

const Hero = ({title, img, actions, ...props}) => {
    const {src, alt} = img

    return (
        <Box
            // marginBottom={{base: 0, md: 2}}
            // height={{lg: 'xl'}}
            position={{lg: 'relative'}}
            {...props}
        >
            {/* <Stack
                // align={'center'}
                spacing={{base: 8, md: 10}}
                paddingTop={{base: 12, md: -3}}
                paddingBottom={{base: 6, md: 10}}
                // direction={{ base: 'column', lg: 'row' }}   
            > */}
            {/* <Stack> */}
            <Box marginTop={{base:-"44px", md:"", lg:"-10px" }} width="full">
                        <Image
                            fit={'cover'}
                            // align={'center'}
                            width={'100%'}
                            height={'100%'}
                            src={src}
                            alt={alt}
                        />
                    </Box>
                    <Heading
                        background="#00a1e0"
                        color="white"
                        position="relative"
                        // padding="20px 0 20px 100px"
                        paddingLeft={{ base: "15px", lg:"100px" }}
                        paddingTop={{base:"0px", lg:"20px"}}
                        // paddingRight={{base:}}
                        paddingBottom={{base:"10px", lg:"20px"}}
                        top={{base:"-70px", md:'-148px', lg:"-209px"}}
                        as="p"
                        maxWidth={{base: '144px', md: '299px', lg: '400px'}}
                    >
                        <Text
                        fontSize={{ base: '14px', md: '24px', lg: '1xl' }}
                        paddingLeft={{ base: "20px", md: "20px" }}
                        whiteSpace="nowrap"
                        fontWeight="normal"    
                        as="samp">
                        {title}
                        </Text>
                    </Heading>

                    {/* {actions && <Box width={{base: 'full', lg: 'inherit'}}>{actions}</Box>} */}
                {/* </Stack> */}
                {/* <Flex
                > */}
                
                {/* </Flex> */}
            {/* </Stack> */}
        </Box>
    )
}

Hero.displayName = 'Hero'

Hero.propTypes = {
    /**
     * Hero component image
     */
    img: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    /**
     * Hero component main title
     */
    title: PropTypes.string,
    /**
     * Call to action component(s)
     */
    actions: PropTypes.element
}

export default Hero
