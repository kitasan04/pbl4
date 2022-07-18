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

    <h1 className="TITLE">新宿紹介</h1> 
    <Tabs>
        <TabList>
            <Tab>新宿御苑</Tab>
            <Tab>名前不明の寺</Tab>
        </TabList>
        <TabPanels>

            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>新宿御苑の写真</h2>
                        <img src="/mysite/images/新宿/sakura3.jpg" className="meisho-image" />
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>感想</Text>
                                <Text>桜がきれいだった。</Text>
                                <Text>広かったけど人がいっぱいいた。</Text>
                                <Text>だいぶ自然を感じられた。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>寺の桜の写真</h2>
                        <img src="/mysite/images/新宿/sakura2.jpg" className="meisho-image" />
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>感想</Text>
                                <Text>名前忘れた寺の桜。</Text>
                                <Text>なかなかきれいだった。</Text>
                                <Text>探してみてね。</Text>
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
