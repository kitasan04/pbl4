import Head from 'next/head';
import { Link } from '@chakra-ui/react'
export default function Home() {
    return (
<div>
    <div>
        <Head>
            <meta charset="UTF-8"/>
            <title>名所紹介</title>
        </Head>
    </div>
        <header className="page-header">
            <h1><Link href="/">名所紹介</Link></h1>
            <nav>
                <ul className="main-nav">
                    <li><Link href="/meisho/asakusa">浅草</Link></li>
                    <li><Link href="/meisho/kyoto">京都</Link></li>
                    <li><Link href="/meisho/shinjuku">新宿</Link></li>
                    <li><Link href="/meisho/disney">ディズニー</Link></li>
                    <li><Link href="/meisho/nikko">日光</Link></li>
                </ul>
            </nav>
        </header>

        <h1 className="TITLE">名所紹介</h1>


        <div className="container">
            <a className="item" href="/meisho/asakusa">
                <img src='mysite/images/浅草/kaminarimon.jpg' className="img_article" />
                <p>浅草</p>
            </a>
            <a className="item" href="/meisho/kyoto">
                <img src="/mysite/images/京都/kiyomizudera.jpg" className="img_article"/>
                <p>京都</p>
            </a>
            <a className="item" href="/meisho/shinjuku">
                <img src="mysite/images/新宿/sakura1.jpg" className="img_article"/>
                <p>新宿</p>
            </a>
            <a className="item" href="/meisho/disney">
                <img src="mysite/images/ディズニー/7897.jpg" className="img_article"/>
                <p>ディズニー</p>
            </a>
            <a className="item" href="/meisho/nikko">
                <img src="mysite/images/日光/sanzaru.jpg" className="img_article"/>
                <p>日光</p>
            </a>
        </div>


</div>
    );
}
