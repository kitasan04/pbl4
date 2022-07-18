import Head from 'next/head'
import { Divider } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
export default function kyoto(){
return(
<div>
    <div>
        <Head>
            <meta charset="UTF-8"/>
            <link rel ="stylesheet" href="../../mysite/mysite.css"/>
            <title>京都紹介</title>
        </Head>
    </div>
    <header className="page-header">
        <h1><a href="/">名所紹介</a></h1>
        <nav>
            <ul className="main-nav">
                <li><a href="/meisho/asakusa">浅草</a></li>
                <li><a href="/meisho/kyoto">京都</a></li>
                <li><a href="/meisho/shinjuku">新宿</a></li>
                <li><a href="/meisho/disney">ディズニー</a></li>
                <li><a href="/meisho/nikko">日光</a></li>
            </ul>
        </nav>
    </header>

    <h1 className="TITLE">日光紹介</h1> 
    <Tabs>
        <TabList>
            <Tab>三猿</Tab>
            <Tab>宿泊施設</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>三猿の写真</h2>
                        <img src="/mysite/images/日光/sanzaru.jpg" className="meisho-image" />
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>説明</Text>
                                <Text>日光東照宮において有名な見ざる聞かざる言わざる。</Text>
                                <Text>それを間近で撮影した一枚。</Text>
                                <Text>噂に聞いていたとおり、言われている通りのポーズをしている。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>


            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>宿泊施設の写真</h2>
                        <img src="/mysite/images/日光/7899.jpg" className="meisho-image" />
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>説明</Text>
                                <Text>日光にて宿泊施設の外の庭にて、その美しさに思わずパシャリと一枚。</Text>
                                <Text>美しいい自然の中にいるのは心が洗われるような思いになる。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

        </TabPanels>
    </Tabs>
</div>
);
    
}
