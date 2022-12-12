import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button, useColorMode, useColorModeValue, Link } from "@chakra-ui/react";
import deviceIcon from "../images/piano.jpg";
import { Link as Scroll } from 'react-scroll';
import React from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export const TopWorks = () => {
    const color = useColorModeValue("#000033", "#8EB8FF")
    const controls = useAnimation()
    const color2 = useColorModeValue("#8EB8FF", "#000033")
  return (
    <Box bg={color} opacity="0.8" color="#ffffff" pt={28} pb={28}>
      <Box textAlign="center">
      
          <motion.div
          style={{ backgroundColor: "red", width: "15px", height: "15px"}}
          animate={controls}
          transition={{
            duration: 5,
            times: [0, 0.001, 1]
        }}
        />
        

        <Box mt={10}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            galaxyとmilaの<br/>music recommend
          </Text>
        </Box>

        <button onClick={() => controls.start({x:[-1, 1000, 10, 1100, 50, 1250]})}>
        <Box display="flex" justifyContent="center">
            <Image 
              borderRadius="full"
              boxSize="200px"
              src={deviceIcon.src} />
        </Box>
        </button>
            
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={10}
          mb={10}
        >
          
        </Box>
      </Box>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
        boxShadow='dark-lg'
          p={10}
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >
          
          <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="1" smooth={true} >mila</Scroll>
          </Text>
          <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
            Creepy Nuts / YOASOBI etc
          </Text>
        </Box>
        <Box
        boxShadow='dark-lg'
          p={10}
          bg="000"
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B" }}
        >

         
          <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="concept" smooth={true} >galaxy</Scroll>
          </Text>
          <Text fontSize="sm" fontFamily="Rajdhani" color="#ECC94B">
            SEKAI NO OWARI etc
          </Text>

        </Box>
      </Grid>

      <Box  h={100}>
      </Box>

      <Divider borderColor="#FFFFFF" w={1000} mx={100}/>

      <Box id="1" textAlign="center" mt={100}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            mila
          </Text>
        </Box>

        <Grid
        templateColumns="repeat(3, 1fr)"
        gap={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="3" smooth={true} >Creepy Nuts</Scroll>
          </Text>
        </Box>

        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="4" smooth={true} >YOASOBI</Scroll>
          </Text>
        </Box>
        </Grid>

        <Box h={100}></Box>

        <Box px={40} pb={20} id="3">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            Creepy Nuts
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　日本の三連覇のラッパー「R-指定」と、世界一のDJ「DJ 松永」による、HIP HOPユニット。
2017年Sony Musicよりメジャーデビューし、2020年8月に「かつて天才だった俺たちへ」をリリース。
2021年アルバム「Case」をリリース。収録曲「のびしろ」がTikTokで1億回再生を越えるなど、その他SNSでも注目を集めている。 9月にアルバムを引っ提げた全国ツアーは横浜アリーナを含む公演全てが完売。ニッポン放送「Creepy Nuts のオールナイトニッポン」、CMやドラマなど多方面で活躍を見せる。
          </Text>
        </Box>


      <Box Align="center" >
        <Grid
          templateColumns='repeat(2, 1fr)'
        gap={20}
        display="flex"
        alignItems="center"
        justifyContent="center">
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/iZtDuxKztgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "2way nice guy"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            まさかって所にハマる...
          </Text>
    </Box>
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/E6A7l1l6kKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "サントラ"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            生々しく書き上げてく自分だけの生き方を...
          </Text>
    </Box>
      </Grid>
      </Box>


      <Box  h={100}>
      </Box>


      <Box px={40} pb={20} id="4">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            YOASOBI
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　コンポーザーのAyase、ボーカルのikuraからなる、「小説を音楽にするユニット」 。2019年11月に公開された第一弾楽曲「夜に駆ける」はBillboard Japan 総合ソングチャート"HOT100"にて2020年年間1位を獲得し、2021年12月に史上初のストリーミング累計7億回再生を突破。
          </Text>
        </Box>

        <Box Align="center" >
        <Grid
          templateColumns='repeat(2, 1fr)'
        gap={20}
        display="flex"
        alignItems="center"
        justifyContent="center">
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/mnta9Pp2LqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "ラブレター"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            いつまでも大好きなあなたが響いていますように...
          </Text>
    </Box>
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/I0kytvnHG-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "もしも命が描けたら"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            僕の残りの時間と引き換えに...
          </Text>
    </Box>
      </Grid>
      </Box>

      <Box  h={100}>
      </Box>
      <Divider borderColor="#FFFFFF" w={1000} mx={100}/>

      <Box id="concept" textAlign="center" mt={100}>
          <Text fontFamily="Roboto" fontWeight="bold" fontSize={72}>
            galaxy
          </Text>
        </Box>

        <Box  h={30}>
      </Box>

        <Grid
        templateColumns="repeat(3, 1fr)"
        gap={50}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="5" smooth={true} >SEKAI NO OWARI</Scroll>
          </Text>
        </Box>

        <Box
        boxShadow='dark-lg'
          p={10}
          border="1px solid #ffffff"
          borderRadius="4px"
          _hover={{ border: "1px solid rgba(236, 201, 75, 0.8)", color:"#ECC94B"}}
        >

        <Text fontSize="3xl" fontFamily="Rajdhani">
          <Scroll to="6" smooth={true} >HoneyWorks</Scroll>
          </Text>
        </Box>
        </Grid>

        <Box h={100}></Box>

        <Box px={40} pb={20} id="5">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            SEKAI NO OWARI
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　2010年、突如音楽シーンに現れた4人組バンド「SEKAI NO OWARI」。同年4月1stアルバム「EARTH」をリリース後、2011年8月にTOY’S FACTORYよりメジャーデビュー。圧倒的なポップセンスとキャッチーな存在感、テーマパークの様な世界観溢れるライブ演出で、子供から大人まで幅広いリスナーにアプローチ、「セカオワ現象」とも呼ばれる加速度的なスピード感で認知を拡大する。
          </Text>
        </Box>

        <Box Align="center" >
        <Grid
          templateColumns='repeat(2, 1fr)'
        gap={20}
        display="flex"
        alignItems="center"
        justifyContent="center">
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/1gU0zRl7Lc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "Habit"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            俺達だって動物　こーゆーのって好物...
          </Text>
    </Box>
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/od8CNHDkIJA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "虹色の戦争"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            花に声があるなら何を叫ぶのだろう...
          </Text>
    </Box>
      </Grid>
      </Box>
      
      <Box  h={100}>
      </Box>


      <Box px={40} pb={20} id="6">
        <Text fontFamily="Roboto" fontWeight="bold" fontSize={50}>
            HoneyWorks
          </Text>
          <Text fontSize="2xl" fontFamily="Rajdhani">
          　HoneyWorks（通称：ハニワ）は、ニコニコ動画、YouTubeなどの動画投稿サイトを中心に活動する、関連動画総再生回数8億回を超えるクリエイターユニット。
音楽性は「キュンキュン系」「青春系」と呼ばれるポジティブ系ロックを主体とする。楽曲を元にしたシリーズプロジェクト「告白実行委員会」では様々なキャラクター達が物語を展開し、小説やテレビアニメなどのメディアミックスも行なっている。
          </Text>
        </Box>

        <Box Align="center" >
        <Grid
          templateColumns='repeat(2, 1fr)'
        gap={20}
        display="flex"
        alignItems="center"
        justifyContent="center">
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/ekycNTgJbnA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "東京サマーセッション"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            花火大会が来週あるんだってね...
          </Text>
    </Box>
    <Box boxShadow='dark-lg'>
    <iframe width="448" height="252" src="https://www.youtube.com/embed/bSUBiMCZAoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Text p={2} fontFamily="Roboto" fontWeight="bold" fontSize={20}>
            "初恋の絵本"
          </Text>
          <Text p={2} Align="left" fontFamily="Roboto" fontWeight="bold" fontSize={18}>
            残り10cmの勇気があったなら...
          </Text>
    </Box>
      </Grid>
      </Box>

    </Box>
  );
};
