/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useIntl, FormattedMessage} from 'react-intl'
import {categoryUrlBuilderSingle, productUrlBuilderSingle} from '../../utils/url'
import {useLocation} from 'react-router-dom'

// Components
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    SimpleGrid,
    // HStack,
    // VStack,
    // Text,
    Flex,
    // Stack,
    // Container,
    // Link,
    Heading,
    Grid,
    GridItem,
    BreadcrumbLink as ChakraBreadcrumbLink,
    Image
} from '@chakra-ui/react'

// Project Components
import Hero from '../../components/hero'
import Seo from '../../components/seo'
import Section from '../../components/section'
import ProductScroller from '../../components/product-scroller'

// Others
import {getAssetUrl} from 'pwa-kit-react-sdk/ssr/universal/utils'
import {heroFeatures, features} from './data'
//Hooks
import useEinstein from '../../commerce-api/hooks/useEinstein'

// Constants
import {
    MAX_CACHE_AGE,
    HOME_SHOP_PRODUCTS_CATEGORY_ID,
    HOME_SHOP_PRODUCTS_LIMIT
} from '../../constants'

/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */

// const MyHeader = ({name}) => {
//     return <Box>{name ? <h1>Hello from {name} </h1> : <h1> Hello from custom component</h1>}
//         <Alert>
//             <AlertIcon />
//             Chakra UI components unlocked!
//         </Alert>

//     </Box>
// }

const Home = ({productSearchResult, isLoading}) => {
    const basicBoxStyles = {
        background: 'url("static/img/women.jpg") center/cover no-repeat'
    }

    const intl = useIntl()
    const einstein = useEinstein()
    const {pathname} = useLocation()

    /**************** Einstein ****************/
    useEffect(() => {
        einstein.sendViewPage(pathname)
    }, [])

    return (
        <Box data-testid="home-page" layerStyle="page">
            <Seo
                title="Home Page"
                description="Commerce Cloud Retail React App"
                keywords="Commerce Cloud, Retail React App, React Storefront"
            />

            <Hero
                title="Summer Style"
                img={{
                    src: getAssetUrl('static/img/women.jpg'),
                    alt: 'Women Image'
                }}
                // actions={
                //     <Stack spacing={{base: 4, sm: 6}} direction={{base: 'column', sm: 'row'}}>
                //         <Button
                //             as={Link}
                //             href="https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html"
                //             target="_blank"
                //             width={{base: 'full', md: 'inherit'}}
                //             paddingX={7}
                //             _hover={{textDecoration: 'none'}}
                //         >
                //             <FormattedMessage
                //                 defaultMessage="Get started"
                //                 id="home.link.get_started"
                //             />
                //         </Button>
                //     </Stack>
                // }
            />

            {/* <Grid h="" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
               
                <GridItem colSpan={2}>
                    <Image src={getAssetUrl('static/img/women-dresses.jpg')} />
                </GridItem>
                <GridItem>
                    <Image src={getAssetUrl('static/img/jewelleries.jpg')} />
                </GridItem>
                <GridItem colSpan={2}>
                    <Image src={getAssetUrl('static/img/suits.jpg')} />
                </GridItem>
                <GridItem colSpan={4}>
                    <Image src={getAssetUrl('static/img/shoes.jpg')} />
                </GridItem>
            </Grid> */}
            <Grid
                templateAreas={`
                  "dresses jewellery suits"
                  " shoes shoes suits"`}
                gridTemplateRows={'1fr 1fr 1fr'}
                gridTemplateColumns={'1fr 1fr'}
                width="90%"
                margin="-80px auto 0px auto"
                paddingLeft="0"
            >
                <GridItem area={'dresses'}>
                    <a href={categoryUrlBuilderSingle('womens-clothing-dresses')}>
                        <Image src={getAssetUrl('static/img/women-dresses.jpg')} />
                    </a>
                    <Heading
                        as="p"
                        fontSize={{base: '1xl', md: '3xl', lg: '20px'}}
                        color="white"
                        position="relative"
                        top={{base: '-130px', md: '100px', lg: '-130px'}}
                        fontWeight="normal"
                        left={{lg: '30px'}}
                    >
                        Women's Dresses
                    </Heading>
                </GridItem>
                <GridItem area={'jewellery'}>
                    <a href={categoryUrlBuilderSingle('womens-jewelry')}>
                        <Image src={getAssetUrl('static/img/jewelleries.jpg')} />
                    </a>
                    <Heading
                        as="p"
                        fontSize={{base: '20px', md: '3xl', lg: '20px'}}
                        color="white"
                        position="relative"
                        left={{lg: '30px'}}
                        top={{base: '-130px', md: '100px', lg: '-80px'}}
                        fontWeight="normal"
                    >
                        Women's Jewelry
                    </Heading>
                </GridItem>
                <GridItem area={'shoes'}>
                    <a href={categoryUrlBuilderSingle('womens-accessories-shoes')}>
                        <Image
                            src={getAssetUrl('static/img/shoes.jpg')}
                            marginTop={{base: '-100px', md: '120px', lg: '-80px'}}
                        />
                    </a>
                    <Heading
                        as="p"
                        fontSize={{base: '20px', md: '3xl', lg: '20px'}}
                        color="white"
                        position="relative"
                        top={{base: '-130px', md: '100px', lg: '-130px'}}
                        fontWeight="normal"
                        left={{lg: '30px'}}
                    >
                        Shop Red
                    </Heading>
                </GridItem>
                <GridItem area={'suits'}>
                    <a href={categoryUrlBuilderSingle('mens-clothing-jackets')}>
                        <Image src={getAssetUrl('static/img/suits.jpg')} width={{lg: '93%'}} />
                    </a>
                    <Heading
                        as="p"
                        fontSize={{base: '1xl', md: '3xl', lg: '20px'}}
                        color="white"
                        position="relative"
                        top={{base: '-130px', md: '100px', lg: '-130px'}}
                        fontWeight="normal"
                        left={{lg: '30px'}}
                    >
                        Men's Jackets
                    </Heading>
                </GridItem>
            </Grid>

            {/* <MyHeader name="Opeyemi Peter" /> */}
            <SimpleGrid
                columns={3}
                spacingX="40px"
                spacingY="20px"
                width="90%"
                margin="-350px auto 0px auto"
            >
                <a href={productUrlBuilderSingle('25696513M')}>
                    <Box height="">
                        <Image src={getAssetUrl('static/img/sleeve.jpg')} width="100%" />

                        <Image
                            src={getAssetUrl('static/img/orange-swatch.jpg')}
                            width="1.8em"
                            borderRadius="0.9em"
                            height="1.8em"
                            marginTop="0.5rem"
                        />
                        <Heading
                            as="p"
                            fontSize={{lg: '1em'}}
                            color="#00A1E0"
                            fontWeight="bold"
                            marginTop="0.5rem"
                        >
                            Sleeveless Pleated Top.
                        </Heading>
                        <Heading
                            as="p"
                            fontSize={{lg: '1em'}}
                            color="black"
                            fontWeight="bold"
                            marginTop="0.3rem"
                        >
                            £31.36
                        </Heading>
                    </Box>
                </a>

                <Box padding="1.25rem">
                    <Heading
                        as="h1"
                        fontSize={{lg: '4em'}}
                        color="#00A1E0"
                        fontWeight="200"
                        textAlign="center"
                        lineHeight="8rem"
                    >
                        Styles to Love
                    </Heading>
                    <Heading
                        as="p"
                        fontSize={{lg: '1em'}}
                        color="#00A1E0"
                        textAlign="center"
                        fontWeight="normal"
                    >
                        Only Online
                    </Heading>
                </Box>
                <a href={productUrlBuilderSingle('25697682M')}>
                    <Box>
                        <Image src={getAssetUrl('static/img/white-top.jpg')} width="100%" />
                        <Image
                            src={getAssetUrl('static/img/white-swatch.jpg')}
                            width="1.8em"
                            borderRadius="0.9em"
                            height="1.8em"
                            marginTop="0.5rem"
                        />
                        <Heading
                            as="p"
                            fontSize={{lg: '1em'}}
                            color="#00A1E0"
                            fontWeight="bold"
                            marginTop="0.5rem"
                        >
                            Woven Trimmed Cardigan
                        </Heading>
                        <Heading
                            as="p"
                            fontSize={{lg: '1em'}}
                            color="black"
                            fontWeight="bold"
                            marginTop="0.3rem"
                        >
                            £56.96
                        </Heading>
                    </Box>
                </a>
                <a href={productUrlBuilderSingle('25686514M')}>
                    <Box>
                        <Image src={getAssetUrl('static/img/black-suit.jpg')} width="100%" />
                        <Image
                            src={getAssetUrl('static/img/black-swatch.jpg')}
                            width="1.8em"
                            borderRadius="0.9em"
                            height="1.8em"
                            marginTop="0.5rem"
                        />
                        <Heading
                            as="p"
                            fontSize={{lg: '1em'}}
                            color="#00A1E0"
                            fontWeight="bold"
                            marginTop="0.5rem"
                        >
                            Black Single Pleat Athletic Fit Wool Suit
                        </Heading>
                        <Heading
                            as="p"
                            fontSize={{lg: '1em'}}
                            color="black"
                            fontWeight="bold"
                            marginTop="0.3rem"
                        >
                            £191.99
                        </Heading>
                    </Box>
                </a>
                <a href={productUrlBuilderSingle('25519318M')}>
                <Box>
                    <Image src={getAssetUrl('static/img/black-top.jpg')} width="100%" />
                    <Flex>
                        <Box pl="2">
                            <Image
                                src={getAssetUrl('static/img/black-swatch.jpg')}
                                width="1.8em"
                                borderRadius="0.9em"
                                height="1.8em"
                                marginTop="0.5rem"
                            />
                        </Box>
                        <Box pl="2">
                            <Image
                                src={getAssetUrl('static/img/lemon-swatch.jpg')}
                                width="1.8em"
                                borderRadius="0.9em"
                                height="1.8em"
                                marginTop="0.5rem"
                            />
                        </Box>
                        <Box pl="2">
                            <Image
                                src={getAssetUrl('static/img/ash-swatch.jpg')}
                                width="1.8em"
                                borderRadius="0.9em"
                                height="1.8em"
                                marginTop="0.5rem"
                            />
                        </Box>
                    </Flex>
                    <Heading
                        as="p"
                        fontSize={{lg: '1em'}}
                        color="#00A1E0"
                        fontWeight="bold"
                        marginTop="0.5rem"
                    >
                        3/4 Sleeve V-Neck Top
                    </Heading>
                    <Heading
                        as="p"
                        fontSize={{lg: '1em'}}
                        color="black"
                        fontWeight="bold"
                        marginTop="0.3rem"
                    >
                        £15.36
                    </Heading>
                </Box>
                </a>
                <a href={productUrlBuilderSingle('25720054M')}>
                <Box>
                    <Image src={getAssetUrl('static/img/earrring.jpg')} width="100%" />
                    <Image
                        src={getAssetUrl('static/img/ash-swatch.jpg')}
                        width="1.8em"
                        borderRadius="0.9em"
                        height="1.8em"
                        marginTop="0.5rem"
                    />
                    <Heading as="p" fontSize={{lg: '1em'}} color="#00A1E0" fontWeight="bold">
                        Cluster Drop Earring
                    </Heading>
                    <Heading as="p" fontSize={{lg: '1em'}} color="black" fontWeight="bold">
                        £16.64
                    </Heading>
                </Box>
</a>
            </SimpleGrid>

            {/* <Section
                background={'gray.50'}
                marginX="auto"
                paddingY={{base: 8, md: 16}}
                paddingX={{base: 4, md: 8}}
                borderRadius="base"
                width={{base: '100vw', md: 'inherit'}}
                position={{base: 'relative', md: 'inherit'}}
                left={{base: '50%', md: 'inherit'}}
                right={{base: '50%', md: 'inherit'}}
                marginLeft={{base: '-50vw', md: 'auto'}}
                marginRight={{base: '-50vw', md: 'auto'}}
            >
                <SimpleGrid
                    columns={{base: 1, md: 1, lg: 3}}
                    spacingX={{base: 1, md: 4}}
                    spacingY={{base: 4, md: 14}}
                >
                    {heroFeatures.map((feature, index) => {
                        const featureMessage = feature.message
                        return (
                            <Box
                                key={index}
                                background={'white'}
                                boxShadow={'0px 2px 2px rgba(0, 0, 0, 0.1)'}
                                borderRadius={'4px'}
                            >
                                <Link target="_blank" href={feature.href}>
                                    <HStack>
                                        <Flex
                                            paddingLeft={6}
                                            height={24}
                                            align={'center'}
                                            justify={'center'}
                                        >
                                            {feature.icon}
                                        </Flex>
                                        <Text fontWeight="700">
                                            {intl.formatMessage(featureMessage.title)}
                                        </Text>
                                    </HStack>
                                </Link>
                            </Box>
                        )
                    })}
                </SimpleGrid>
            </Section>

            {productSearchResult && (
                <Section
                    padding={4}
                    paddingTop={16}
                    title={intl.formatMessage({
                        defaultMessage: 'Shop Products',
                        id: 'home.heading.shop_products'
                    })}
                    subtitle={intl.formatMessage(
                        {
                            defaultMessage:
                                'This section contains content from the catalog. {docLink} on how to replace it.',
                            id: 'home.description.shop_products',
                            description:
                                '{docLink} is a html button that links the user to https://sfdc.co/business-manager-manage-catalogs'
                        },
                        {
                            docLink: (
                                <Link
                                    target="_blank"
                                    href={'https://sfdc.co/business-manager-manage-catalogs'}
                                    textDecoration={'none'}
                                    position={'relative'}
                                    _after={{
                                        position: 'absolute',
                                        content: `""`,
                                        height: '2px',
                                        bottom: '-2px',
                                        margin: '0 auto',
                                        left: 0,
                                        right: 0,
                                        background: 'gray.700'
                                    }}
                                    _hover={{textDecoration: 'none'}}
                                >
                                    {intl.formatMessage({
                                        defaultMessage: 'Read docs',
                                        id: 'home.link.read_docs'
                                    })}
                                </Link>
                            )
                        }
                    )}
                >
                    <Stack pt={8} spacing={16}>
                        <ProductScroller
                            products={productSearchResult?.hits}
                            isLoading={isLoading}
                        />
                    </Stack>
                </Section>
            )}

            <Section
                padding={4}
                paddingTop={32}
                title={intl.formatMessage({
                    defaultMessage: 'Features',
                    id: 'home.heading.features'
                })}
                subtitle={intl.formatMessage({
                    defaultMessage:
                        'Out-of-the-box features so that you focus only on adding enhancements.',
                    id: 'home.description.features'
                })}
            >
                <Container maxW={'6xl'} marginTop={10}>
                    <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>
                        {features.map((feature, index) => {
                            const featureMessage = feature.message
                            return (
                                <HStack key={index} align={'top'}>
                                    <VStack align={'start'}>
                                        <Flex
                                            width={16}
                                            height={16}
                                            align={'center'}
                                            justify={'left'}
                                            color={'gray.900'}
                                            paddingX={2}
                                        >
                                            {feature.icon}
                                        </Flex>
                                        <Text color={'black'} fontWeight={700} fontSize={20}>
                                            {intl.formatMessage(featureMessage.title)}
                                        </Text>
                                        <Text color={'black'}>
                                            {intl.formatMessage(featureMessage.text)}
                                        </Text>
                                    </VStack>
                                </HStack>
                            )
                        })}
                    </SimpleGrid>
                </Container>
            </Section>

            <Section
                padding={4}
                paddingTop={32}
                title={intl.formatMessage({
                    defaultMessage: "We're here to help",
                    id: 'home.heading.here_to_help'
                })}
                subtitle={
                    <>
                        <>
                            {intl.formatMessage({
                                defaultMessage: 'Contact our support staff.',
                                id: 'home.description.here_to_help'
                            })}
                        </>
                        <br />
                        <>
                            {intl.formatMessage({
                                defaultMessage: 'They will get you to the right place.',
                                id: 'home.description.here_to_help_line_2'
                            })}
                        </>
                    </>
                }
                actions={
                    <Button
                        as={Link}
                        href="https://help.salesforce.com/s/?language=en_US"
                        target="_blank"
                        width={'auto'}
                        paddingX={7}
                        _hover={{textDecoration: 'none'}}
                    >
                        <FormattedMessage defaultMessage="Contact Us" id="home.link.contact_us" />
                    </Button>
                }
                maxWidth={'xl'}
            /> */}
        </Box>
    )
}

Home.getTemplateName = () => 'home'

Home.shouldGetProps = ({previousLocation, location}) =>
    !previousLocation || previousLocation.pathname !== location.pathname

Home.getProps = async ({res, api}) => {
    if (res) {
        res.set('Cache-Control', `max-age=${MAX_CACHE_AGE}`)
    }

    const productSearchResult = await api.shopperSearch.productSearch({
        parameters: {
            refine: [`cgid=${HOME_SHOP_PRODUCTS_CATEGORY_ID}`, 'htype=master'],
            limit: HOME_SHOP_PRODUCTS_LIMIT
        }
    })

    return {productSearchResult}
}

Home.propTypes = {
    /**
     * The search result object showing all the product hits, that belong
     * in the supplied category.
     */
    productSearchResult: PropTypes.object,
    /**
     * The current state of `getProps` when running this value is `true`, otherwise it's
     * `false`. (Provided internally)
     */
    isLoading: PropTypes.bool
}

export default Home
