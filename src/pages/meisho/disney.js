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

    <h1 className="TITLE">ディズニー紹介</h1> 
    <Tabs>
        <TabList>
            <Tab>シンデレラ城</Tab>
            <Tab>プロメテウス火山</Tab>
            <Tab>シャンボール城</Tab>
            <Tab>スプラッシュ・マウンテン</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>シンデレラ城の写真</h2>
                        <img src="/mysite/images/ディズニー/7901.jpg" className="meisho-image" />
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='500px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>説明</Text>
                                <Text>言わずとしれたディズニーランドのシンボル、シンデレラ城。</Text>
                                <Text>人が多く映らないエリアにて横からの一枚。</Text>
                                <Text>青空にその大きさがよく映える。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>プロメテウス火山の写真</h2>
                        <img src="/mysite/images/ディズニー/7897.jpg" className="meisho-image" />
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='300px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>説明</Text>
                                <Text>ディズニーシーにおけるシンボルとも言えるプロメテウス火山。</Text>
                                <Text>入口近くのメディアテレーニアンハーバーにて撮影したもの。</Text>
                                <Text>遠くからでも雄大さが見て取れる。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>シャンボール城の写真</h2>
                        <img src="/mysite/images/ディズニー/7903.jpg" className="meisho-image" />
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='500px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>説明</Text>
                                <Text>ディズニーランドの新エリア、美女と野獣の城だ。</Text>
                                <Text>アトラクションに入る前に横から撮影したもの。</Text>
                                <Text>映画でヒロインがこの城を見つけたときのワンシーンがまず頭をよぎる。</Text>
                            </div>
                        </Stack>
                    </div>
                </div>
            </TabPanel>


            <TabPanel>
                <div className="meisho-container">
                    <div className="meisho-imagebox">
                        <h2>スプラッシュ・マウンテンの写真</h2>
                        <img src="/mysite/images/ディズニー/7902.jpg" className="meisho-image" />
                    </div>
                    <div className="meisho-text">
                        <Stack direction='row' h='500px' p={4}>
                            <Divider orientation='vertical' />
                            <div>
                                <Text fontSize='20px' color='blue'>説明</Text>
                                <Text>ディズニーランドの人気アトラクションの一つである、スプラッシュ・マウンテン。</Text>
                                <Text>アトラクション前にての一枚。</Text>
                                <Text>撮影前後にはたびたびスリリングを楽しむような悲鳴が聞こえる。</Text>
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
