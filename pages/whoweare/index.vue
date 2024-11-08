<template>
  <div class='whoweare'>
    <main-visual
      title='co-found a startup with quantum.<br>we are venture builders.'
      background='/images/who/bg.jpg'
      backgroundsp='/images/who/bg-sp.jpg'
      size='small'
    >
      <template v-slot:titleLink>
        <p class="text-[20px] mt-[25px] leading-[42px]">we ally with entrepreneurs and intrapreneurs to develop new ideas,<br>deep tech, and business models into high-growth companies.</p>
      </template>
    </main-visual>

    <section class='l-section contents'>
      <div class='l-section__inner js-lazyclass'>
        <div class='contents__imagearea q'>
          <img src='~/assets/images/common/01.svg' alt='q'>
        </div>
        <div class='contents__textarea'>
          <h2>who we are</h2>
          <p class='l-section__body' v-if='!isEnglish'>quantumは、クリエイティビティを軸にしたインキュベーション力で、<br>新規事業開発、ベンチャークリエーション、ハンズオン投資によるグロース支援を行うスタートアップスタジオです。<br><br>2016年の創業以来、100社を超える企業、大学とインキュベーションを実践しています。これからもventure Buildersとして、① 新規事業のインキュベーション、② ベンチャークリエーション＆グロースのquantum ventures、③ デザイン＆エンジニアリングのMEDUMの3つの事業セグメントを重ね合わせて「世界を変えるインパクトのある新規事業の創造」に挑戦していきます。
          </p>
          <p class='l-section__body' v-if='isEnglish'>
            quantum is a startup studio that creates new products and services through creativity-driven business development.<br>
            Since our founding in 2016, we have launched our own businesses as venture builders, worked on business development with over 70 companies, startups, and universities, and created a variety of new businesses through co-founding.<br>
            quantum will continuously aim to achieve “Zero to Impact” with the utilization of creativity and the implementation capability in a culture that values the spirit of entrepreneurship.
          </p>
        </div>
      </div>

      <div class='l-section__inner js-lazyclass ourteam'>
        <div class='contents__textarea'>
          <h2>our team</h2>
          <p class='l-section__body' v-if='!isEnglish'>
            ハードとソフトウェアを融合できる卓越したクリエイティビティを軸に、インキュベーションに必要な機能を360°ワンストップで提供するために、quantumはクリエイティブディレクター、プロダクトデザイナー、エンジニア、アートディレクター、UI/UXデザイナー、PdM、ビジネス開発、グロースチーム、起業家（EIR）等を内製化しています。<br><br>多彩な人材からなるフルスタックなスタジオで、ものづくりを追求するプロダクトファーストを行動指針に、連続的な新事業創造に取り組んでいます。
          </p>
          <p class='l-section__body' v-if='isEnglish'>quantum creates business by creating an overlap between the three areas: creativity, technology, and business.<br>
            We have in-house creative director, product designer, art director, UI/UX designer, product manager, AI engineer, data scientist, and venture architects in charge of business development, PR and investment teams to generate growth in the business we create.<br>
            Our full-stack studio is managed by a diverse human resource, finance and accounting, and general affairs professionals who have a wealth of experience working with and supporting startups.
          </p>
        </div>
      </div>

      <div class='l-section__inner type-right js-lazyclass'>
        <div class='contents__imagearea illust'>
          <img src='/images/who/illust.gif' alt=''>
        </div>
      </div>
    </section>


    <section class='l-section peoples'>
      <div class='l-section__inner js-lazyclass'>
        <h2 class='type-center'>board member</h2>
        <div class='people__wrap js-peoples'>
          <div class='people'>
            <img src='/images/who/people/02.jpg' alt='' class='image'>
            <div class='people__text'>
              <p class='people__name' v-if='!isEnglish'>及部 智仁</p>
              <p class='people__name_en'>Tomohito Oyobe</p>
              <p class='people__position' v-if='!isEnglish'>quantum代表取締役社長 共同CEO</p>
              <p class='people__position' v-if='isEnglish'>President and Co-CEO</p>
              <p class='people__body' v-if='!isEnglish'>世界トップクラスのベンチャービルダーを目指し、quantumを社内起業で創業。数多くの大企業との新規事業開発、アクセラレータープログラム、スタートアップのハンズオン支援、ジョイントベンチャー組成を経験。また、産学連携にて機械学習技術を活用したサッカー×AIの研究を行い、2017年にはスポーツデータ×機械学習を専門とするSPORTS AIを創業。開発したサッカーの戦況予測AI事業の売却を経験。博報堂グループや京都大学などの社内起業／起業家教育プログラムでメンター・審査員を歴任するほか、書籍『スタートアップスタジオ』（日経BP）の翻訳出版・監修など、日本企業から多くの社内ベンチャー、社内起業家を輩出することを目指し活動する。また起業を支援するベンチャービルダーを普及させ、起業家支援のネットワークを構築するためにスタートアップ・スタジオ協会の設立理事に就任。「起業をなめからにする社会」を目指し活動している。<br>
              自身の母校でもある東京工業大学にて特任教授に就任。東工大を中心に主要研究大学のリソースを組み合わせ、世界に勝負できる大学発ディープテック・ベンチャーを連続的に生み出すためのプラットフォームを設計・運営している。</p>
              <p class='people__body' v-if='isEnglish'>With the aim of becoming a world-class venture builder, quantum was founded as an in-house start-up. He has experience in new business development with numerous large companies, accelerator programs, hands-on support for startups, and joint venture formation. He has also conducted research on soccer x AI using machine learning technology in an industry-academia collaboration and founded SPORTS AI in 2017, which specializes in sports data x machine learning. Experienced the divestiture of the soccer match prediction AI business which he had developed. In addition to serving as a mentor and judge for in-house entrepreneurship/entrepreneurship education programs at Hakuhodo Group and Kyoto University, he has translated the book "Startup Studio" (Nikkei BP) and supervised its publication, as well as actively working to produce more in-house ventures and in-house entrepreneurs from Japanese companies.<br>
              He was appointed as a specially-appointed professor at Tokyo Institute of Technology, which is also his alma mater. Combining the resources of Tokyo Institute of Technology and other major research universities, he designs and operates the platform for the continuous creation of university-launched deep-tech ventures that can compete on a global scale.</p>
            </div>
          </div>

          <div class='people'>
            <img src='/images/who/people/04.jpg' alt='' class='image'>
            <div class='people__text'>
              <p class='people__name' v-if='!isEnglish'>川下 和彦</p>
              <p class='people__name_en'>Kazuhiko Kawashita</p>
              <p class='people__position' v-if='!isEnglish'>quantum取締役 共同CEO </p>
              <p class='people__position' v-if='isEnglish'>Director and Co-CEO</p>
              <p class='people__body' v-if='!isEnglish'>株式会社博報堂にてマーケティング、PRから広告制作まで、多岐にわたるクリエイティブ業務を経験。2017年春よりquantumに参画し、製造、エンタメ、教育、福祉などの事業開発に従事。日常を旅するクルマイス「Wheeliy」や、タレントのオンラインマッチングサービス「BATTEKI!!」など様々な事業をローンチまで導いてきた。2020年春より、クリエイティブ統括役員を務め、広告創造技術を応用した手法を用いて、発想から実装までパートナー企業との事業創造に取り組む。各種webメディアで連載を持つほか、『コネ持ち父さん コネなし父さん』(ディスカヴァー・トゥエンティワン)、たむらようこ氏との共著『がんばらない戦略』（アスコム）などの著書を持つ。“口より手を動かす”、“批評するより批評されるものをつくる”が信条。</p>
              <p class='people__body' v-if='isEnglish'>After working for Hakuhodo Inc. in a wide range of creative fields from marketing and PR to advertisement production, He joined quantum in spring 2017 and has been engaged in business development in manufacturing, entertainment, education, welfare, and other fields. He has also developed "Wheeliy," a wheel chair that travels around in daily life, and “BATTEKI!!,” an online talent matching service. Since the spring of 2020, He has served as the executive officer in charge of creative management, working on business creation with partner companies from conception to implementation using methods that apply advertising creation technology.  In addition to writing a series of articles for various online media, he is the author of "Konemochi Tousan, Konenashi Tousan" (Discover 21) and "Gambaranai Senryaku" (Ascom), co-authored with Yoko Tamura. His mottoes are "Move your hands rather than your mouth" and "Create something to be criticized instead of criticizing."</p>
            </div>
          </div>

          <div class='people'>
            <img src='/images/who/people/03.jpg' alt='' class='image'>
            <div class='people__text'>
              <p class='people__name' v-if='!isEnglish'>伊東 和弘</p>
              <p class='people__name_en'>Kazuhiro Ito</p>
              <p class='people__position' v-if='!isEnglish'>quantum常務執行役員</p>
              <p class='people__position' v-if='isEnglish'>Managing Executive Officer</p>
              <p class='people__body' v-if='!isEnglish'>博報堂にて、営業職として自動車メーカー、家電メーカー、音楽レーベル、中央省庁などを担当した後、フリーランスを経て起業。ブランディング及びデジタル系のクリエイティブプロダクションを設立し、ファウンダー兼取締役として会社運営を経験する。quantumの前身となるTBWA\HAKUHODOのHuman-Centered Open Innovation事業部より参画し、高松、及部らと共にquantumの黎明期より現在まで、数多くの新規事業開発プロジェクトに携わってきた。現在は常務取締役として、社外の様々なステークホルダーとの連携にも精力的に取り組み、イノベーティブな事業の創出を推進する。高校より取り組んできたラグビーのスピリッツでもある「All for One, One for All」の言葉が、今も自らの行動指針。</p>
              <p class='people__body' v-if='isEnglish'>After working for HAKUHODO as a sales representative for car manufacturers, consumer electronics manufacturers, music labels, and central government ministries, he started his own business after working as a freelancer. He founded a branding and digital creative production company and managed the company as a founder and director. He has participated in the Human-Centered Open Innovation Division of TBWA HAKUHODO, the predecessor of quantum, and has been involved in many new business development projects with Takamatsu and Obe from the dawn of quantum to the present. Currently, as Managing Director, he is actively involved in collaboration with various stakeholders outside the company to promote the creation of innovative businesses. The phrase "All for One, One for All," which is also the spirit of rugby, a sport he has been involved in since high school, still guides his actions.</p>
            </div>
          </div>

          <div class='people'>
            <img src='/images/who/people/05.jpg' alt='' class='image'>
            <div class='people__text'>
              <p class='people__name' v-if='!isEnglish'>門田 慎太郎</p>
              <p class='people__name_en'>Shintaro Monden</p>
              <p class='people__position' v-if='!isEnglish'>CDO(Chief Design Officer)</p>
              <p class='people__position' v-if='isEnglish'>CDO(Chief Design Officer)</p>
              <p class='people__body' v-if='!isEnglish'>国内デザインファーム及び外資系PCメーカーにて、一点モノの家具から世界で数万台を売り上げるラップトップPCまで幅広い分野の製品デザインを担当したのち、quantumに参画。quantumのデザイン部門を統括し、プロダクト、グラフィック、UI/UXデザインなどの境域から幅広い分野の新規事業開発を牽引する。デザインリサーチ、コンセプト開発、実証実験、量産設計支援まで一連の製品開発を一気通貫に行うことを強みとしている。手掛けたプロダクトは、iF Design Gold、Cannes Lions Gold、RedDot design、Dezeen Awards project of the yearなど、数多くのアワードを受賞しているほか、ドイツのPinakothek der Moderne、デンマークのDesign Museum Danmarkのパーマネントコレクションにも選定されるなど、国内外から高い評価を集めている。</p>
              <p class='people__body' v-if='isEnglish'>After working for a Japanese design firm and a foreign-affiliated PC manufacturer, he designed a wide range of products from one-of-a-kind furniture to laptops that sold tens of thousands of units worldwide before joining quantum. He oversees quantum's design department and leads new business development in a wide range of fields, including product, graphic, and UI/UX design. His strength lies in his ability to provide integrated product development services, including design research, concept development, demonstration testing, and mass production design support. His products have won numerous awards, including iF Design, RedDot design, D&AD, Cannes Lions, and Good Design Award, and have been selected for the permanent collection of Pinakothek der Moderne in Munich, Germany, receiving high acclaims both domestically and internationally.</p>
            </div>
          </div>

          <div class='people'>
            <img src='/images/who/people/07.jpg' alt='' class='image'>
            <div class='people__text'>
              <p class='people__name' v-if='!isEnglish'>松倉 昌志</p>
              <p class='people__name_en'>Masashi Matsukura</p>
              <p class='people__position' v-if='!isEnglish'>quantum執行役員</p>
              <p class='people__position' v-if='isEnglish'>Executive Officer</p>
              <p class='people__body' v-if='!isEnglish'>TBWA\HAKUHODOでクリエイティブと技術の融合による新しい体験を作るクリエイティブテクノロジストとして、家電、家具、自動車、スポーツメーカー、飲料などの幅広い広告キャンペーンを担当し、2018年にquantumへ移籍。サービスとプロダクトの立案と開発を担うプロダクトマネージャーチームの責任者として、ハードウェアからサービスまで様々なプロダクトをゼロから企画し開発をリード。2022年4月からサービス、プロダクト開発を統括する執行役員として、quantumならではのクリエイティブ発想と実装力を武器に新しい事業の開発を推進。Cannes Lions、NY Festivals、NY ADC、OneShow、ADFEST、Spikes Asia、グッドデザイン賞など多数受賞。</p>
              <p class='people__body' v-if='isEnglish'>After working as a creative technologist at TBWA\HAKUHODO with a wide range of advertising campaigns for consumer electronics, furniture, automobiles, sporting goods manufacturers, beverages, etc., he moved to QUANTUM in 2018. As the head of the product manager team responsible for the planning and development of services and products, he plans and leads the development of various products from hardware to services from scratch. From April 2022, as the executive officer in charge of services and product development, he will be responsible for the development of new products with the creative ideas and implementation capabilities that only quantum can offer. He has won numerous awards including Cannes Lions, NY Festivals, NY ADC, OneShow, ADFEST, Spikes Asia, and Good Design Award.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='l-section__inner js-lazyclass'>
        <h2 class='type-center mt-[90px]'>member</h2>
        <div class='people__wrap people__wrap-member js-peoples'>
          <div class='people people-member' v-for="m in members" v-if="m && m.acf && m.acf.member_name">
            <img :src='m.acf.member_image' :alt='m.acf.member_name' class='image'>
            <div class='people__text'>
              <p class='people__name'>{{ m.acf.member_name }}</p>
              <p class='people__position' v-if="m.acf.member_position">{{ m.acf.member_position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section corporate'>
      <div class='l-section__inner js-lazyclass'>
        <h2>corporate data</h2>
        <div class='corporate__info l-table'>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>会社名</div>
            <div class='l-table__body head' v-if='isEnglish'>Company Name</div>
            <div class='l-table__body' v-if='!isEnglish'>株式会社quantum</div>
            <div class='l-table__body' v-if='isEnglish'>quantum Inc.</div>
          </div>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>設立日</div>
            <div class='l-table__body head' v-if='isEnglish'>Date of establishment</div>
            <div class='l-table__body' v-if='!isEnglish'>2016年4月1日</div>
            <div class='l-table__body' v-if='isEnglish'>April 1, 2016</div>
          </div>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>スタジオ<br>リーダーシップ</div>
            <div class='l-table__body head' v-if='isEnglish'>Studio Leadership</div>
            <div class='l-table__body' v-if='!isEnglish'>代表取締役社長 共同CEO　及部智仁<br>
              取締役 共同CEO　川下和彦<br>
              常務執行役員　伊東和弘<br>
              常務執行役員　門田慎太郎<br>
              執行役員　松倉昌志</div>
            <div class='l-table__body' v-if='isEnglish'>President and Co-CEO: Tomohito Oyobe<br>
              Director and Co-CEO: Kazuhiko Kawashita<br>
              Managing Executive Officer: Kazuhiro Ito<br>
              Managing Executive Officer:Shintaro Monden<br>
              Executive Officer:Masashi Matsukura
            </div>
          </div>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>顧問</div>
            <div class='l-table__body head' v-if='isEnglish'>Advisor</div>
            <div class='l-table__body' v-if='!isEnglish'>清水浩</div>
            <div class='l-table__body' v-if='isEnglish'>Yutaka Shimizu</div>
          </div>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>所在地</div>
            <div class='l-table__body head' v-if='isEnglish'>Address</div>
            <div class='l-table__body' v-if='!isEnglish'>〒107-6322　東京都港区赤坂5-3-1 赤坂Bizタワー 23F</div>
            <div class='l-table__body' v-if='isEnglish'>23F Akasaka Biz Tower 5-3-1 Akasaka, Minato-ku, Tokyo 107-6322, Japan</div>
          </div>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>人員数</div>
            <div class='l-table__body head' v-if='isEnglish'>Number of employees</div>
            <div class='l-table__body' v-if='!isEnglish'>40名（2022年4月1日現在）</div>
            <div class='l-table__body' v-if='isEnglish'>40 (as of April 1, 2022)</div>
          </div>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>業務内容</div>
            <div class='l-table__body head' v-if='isEnglish'>Business Description</div>
            <div class='l-table__body' v-if='!isEnglish'>・パートナー企業との新規事業開発やジョイントベンチャーの創出<br>
              ・共同事業やスタートアップへの投資とハンズオン支援<br>
              ・自社事業開発</div>
            <div class='l-table__body' v-if='isEnglish'>・Development of new businesses and creation of joint ventures with partner companies<br>
              ・ Investment in and hands-on support for joint ventures and startups<br>
              ・In-house business development
            </div>
          </div>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>関係会社</div>
            <div class='l-table__body head' v-if='isEnglish'>Affiliated companies</div>
            <div class='l-table__body' v-if='!isEnglish'><a href="https://www.hakuhodo.co.jp/" target="_blank" rel="noopener noreferrer">株式会社博報堂</a><br>quantum GLOBAL Inc.<br><a href="https://mirai-nihon-ventures.co.jp/" target="_blank" rel="noopener noreferrer">株式会社 Mirai Nihon Ventures</a></div>
            <div class='l-table__body' v-if='isEnglish'><a href="https://www.hakuhodo.co.jp/" target="_blank" rel="noopener noreferrer">Hakuhodo Inc.</a><br>quantum GLOBAL Inc.<br><a href="https://mirai-nihon-ventures.co.jp/" target="_blank" rel="noopener noreferrer">Mirai Nihon Ventures Inc.</a></div>
          </div>
          <div class='l-table__group'>
            <div class='l-table__body head' v-if='!isEnglish'>加盟協会</div>
            <div class='l-table__body head' v-if='isEnglish'>Member of</div>
            <div class='l-table__body'>
              <div v-if='!isEnglish'>
                <a href="https://jvca.jp/" target="_blank" rel="noopener noreferrer">一般社団法人 日本ベンチャーキャピタル協会 会員（CVC会員）</a><br>
                <a href="https://startup-studio.jp/" target="_blank" rel="noopener noreferrer">一般社団法人 スタートアップスタジオ協会 設立理事</a><br>
              </div>
              <div v-if='isEnglish'>
                <a href="https://jvca.jp/" target="_blank" rel="noopener noreferrer">Japan Venture Capital Association</a><br>
                <a href="https://startup-studio.jp/" target="_blank" rel="noopener noreferrer">STARTUP STUDIO UNION</a><br>
              </div>
             
            </div>
          </div>
          <div class='l-table__group iso-group'>
            <div class='l-table__body head'><img src='/images/who/security_img.png' alt='' class='securityimg'></div>
            <div class='l-table__body'>
              <p>IS86392/ISO(JISQ)27001</p>
            </div>
          </div>



        </div>

      </div>
    </section>

    <contact-link background='gray'></contact-link>
  </div>
</template>

<script>
import Init from '../../javascripts/init';
import MainVisual from '../../components/partial/MainVisual';
import { Cubic, gsap } from 'gsap';
import _each from 'lodash/each'
import ContactLink from '../../components/partial/ContactLink';
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    MainVisual,
    ContactLink
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}who we are`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.' : 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、 新しいプロダクトやサービスを創り出すスタートアップスタジオです。' },
        this.keywords
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {

      gsap.delayedCall(0.1, () => {
        Init.setup(this.$store)
        this.setupPeoples()
        this.setOfficeImage()
      })

    })
  },

  async asyncData({ app, store, params }) {
    const members = await app.$axios.get(store.getters.apiPath({
      type: 'member',
    }))
    console.log(members.data)
    return {
      members: members.data,
    };
  },
  methods: {
    setupPeoples() {
      let wrap = document.querySelector('.js-peoples')
      let peoples = document.querySelectorAll('.js-peoples .people');
      gsap.fromTo(peoples, {
        opacity: 0,
        y: 20
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: Cubic.easeOut,
        stagger: 0.08,
        scrollTrigger: {
          trigger: wrap,
          start: 'top 50%',
          markers: false
        }
      });
    },

    setOfficeImage() {
      let images = document.querySelectorAll('.js-officeimage');
      _each(images, (elm, i) => {
        gsap.fromTo(elm, {
          opacity: 0,
          y: 20
        }, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: Cubic.easeOut,
          scrollTrigger: {
            trigger: elm,
            start: 'top 50%'
          }
        })
      })

    }
  }
};
</script>

<style lang='scss' scoped>
.contents {
  display: block;
  padding-top: 140px;
  padding-bottom: 110px;
  @include mq_sp {
    padding-top: percentage(math.div(54px, $spWidth));
    padding-bottom: percentage(math.div(0px, $spWidth));
  }
  .l-section__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 90px;
    @include mq_sp {
      display: block;
      margin-bottom: percentage(math.div(120px, $spWidth));
    }
    &.type-right {
      justify-content: flex-end;
    }

    // Our Team
    &.ourteam {
      margin-bottom: 0;
      .contents__textarea {
        padding-bottom: 0;
        position: relative;
        z-index: 1;
      }
    }
  }
  &__textarea {
    width: percent(math.div(630px, $innerWidth));
    padding: percent(math.div(50px, $innerWidth)) percent(math.div(45px, $innerWidth));
    @include mq_sp {
      width: 100%;
      padding: 0;
    }
    h2 {
      font-size: 44px;
      line-height: 1;
      @include roboto-light;
      margin-bottom: percent(math.div(20px, 630px));
      @include mq_sp {
        text-align: center;
        margin-bottom: percentage(math.div(40px, $spInner));
      }
    }
    p {
      font-size: 16px;
      @include noto-light;
      line-height: 1.8;
      text-align: justify;
      @include mq_sp {
        @include spfontsize(14px);
      }
    }
  }
  &__imagearea {
    @include lazyappear();
    line-height: 0;
    img {
      width: 100%;
      will-change: transform;
    }
    &.q {
      width: percent(math.div(180px, $innerWidth));
      margin-left: percent(math.div(80px, $innerWidth));
      @include mq_sp {
        width: percentage(math.div(135px, $spInner));
        margin: 0 auto percentage(math.div(40px, $spInner));
      }
    }
    &.illust {
      width: percent(math.div(680px, $innerWidth));
      margin-top: 5px;
      @include mq_sp {
        width: 100%;
        margin-top: percentage(math.div(80px, $spInner));
      }
    }
  }
  .appear {
    .contents__imagearea {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
}

// People -----
.peoples {
  background: $bggray;
  padding: 120px 0;
  @include mq_sp {
    padding: percentage(math.div(100px, $spWidth)) 0 percentage(math.div(70px, $spWidth));
  }
  .l-section__inner {
    @include mq_sp {
      width: 100%;
    }
  }
  .people__wrap {
    margin: 0 -10px;
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    @include mq_sp {
      margin-left: -5px;
      margin-right: -5px;
      display: block;
      margin-top: percentage(math.div(50px, $spWidth));
    }

    &-member {
      @include mq_sp {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto percentage(math.div(30px, $spWidth));
        margin-top: percentage(math.div(50px, $spWidth));
        width: percentage(math.div(300px, $spWidth));
      }
    }
  }
  .people {
    padding: 0 10px;
    margin-bottom: 30px;
    width: percent(math.div(350px, $innerWidth));
    @include mq_sp {
      padding: 0;
      margin: 0 auto percentage(math.div(30px, $spWidth));
      width: percentage(math.div(300px, $spWidth));
    }
    .image {
      display: block;
      margin-bottom: 16px;
      width: 100%;
      line-height: 0;
      will-change: transform;
      @include mq_sp {
        margin: 0 auto percentage(math.div(10px, 187.5px));
        width: percentage(math.div(187.5px, 300px));
      }
    }
    &__name {
      font-size: 16px;
      @include noto-light;
      @include mq_sp {
        @include spfontsize(13px);
        line-height: 1.4;
        margin:0 auto;
        width: percentage(math.div(187.5px, 300px));
      }
    }
    &__name_en {
      font-size: 14px;
      @include noto-light;
      @include mq_sp {
        //margin-left: percentage(30px / 187.5px);
        @include spfontsize(10px);
        margin:0 auto;
        width: percentage(math.div(187.5px, 300px));
      }
    }
    &__position {
      font-size: 12px;
      @include noto-light;
      color: $gray;
      @include mq_sp {
        //margin-left: percentage(30px / 187.5px);
        @include spfontsize(8px);
        line-height: 1.2;
        margin:0 auto;
        width: percentage(math.div(187.5px, 300px));
      }
    }
    &__body {
      font-size: 12px;
      @include noto-light;
      text-align: justify;
      word-break: break-all;
      margin-top: 10px;
      width: percentage(math.div(300px, 350px));
      @include mq_sp {
        margin-top: percentage(math.div(20px, 300px));
        //margin-left: percentage(30px / 187.5px);
        width: 100%;//percentage(140px / 187.5px);
      }
    }
    &-member {
      width: 25%;
      padding: 0 5px;
      @include mq_sp {
        width: 50%;
      }
      .people__name {
        @include mq_sp {
          width: 100%;
          margin-right: 0;
          margin-left: 0;
        }
      }
      .people__position {
        opacity: 0.8;
        @include mq_sp {
          width: 100%;
          margin-right: 0;
          margin-left: 0;
        }
      }
      .image {
        width: 100%;
        @include mq_sp {
          margin-right: 0;
          margin-left: 0;
        }
      }
    }
  }
}

// Office
.office {
  padding-bottom: 130px;
  background: $bggray;
  @include mq_sp {

  }
  .image-group-column2_1 {
    margin-bottom: percent(math.div(15px, $innerWidth));
  }
}

.office-image {
  margin-top: 70px;
  
  img {
    width: 100%;
  }
  p {
    font-size: 16px;
    margin-top: 10px;
    @include mq_sp {
      font-size: 12px;
      margin: 0 auto 8%;
      width: 80%;
    }
  }
}
// Corporate
.corporate {
  padding: 150px 0 70px;
  @include mq_sp {
    padding: percentage(math.div(100px, $spWidth)) 0 percentage(math.div(80px, $spWidth));
  }
  .l-section__inner {
    @include mq_sp {
      width: 100%;
    }
  }
  h2 {
    margin-bottom: 50px;
    line-height: 1.2;
    @include mq_sp {
      text-align: center;
      margin-bottom: percentage(math.div(40px, $spWidth));
    }
  }
  &__info {
    width: percent(math.div(650px, $innerWidth));
    margin: 0 0 0 auto;
    @include mq_sp {
      margin: 0;
      width: 100%;
    }
    .l-table__body.head {
      /*padding-right: percent(50px / 650px);
      white-space: nowrap;*/
      width: 30%;
      @include mq_sp {
        white-space: normal;
        vertical-align: middle;
        width: percentage(math.div(170px, $spWidth));
        padding-right: 0;
        padding-left: percentage(math.div(30px, $spWidth));
      }
    }
    .l-table__body {
      @include mq_sp {
        width: percentage(math.div(280px, $spWidth));
        padding-right: percentage(math.div(20px, $spWidth));
      }
      p {
        margin-bottom: 20px;
        @include mq_sp {
          margin-bottom: percentage(math.div(20px, 280px));
        }
      }
    }
  }
  .gssn-group,
  .iso-group {
    align-items: center;
    @include mq_sp {
      flex-direction: column;
      .l-table__body {
        padding: 0 percentage(math.div(30px, $spWidth));
        width: 100%;
        &.head {
          padding-top: percentage(math.div(20px, $spWidth));
          border: none;
        }
      }
    }
  }
  .gssn-group{
    .l-table__body {
      padding-top: 0;
      &.head {
        padding-top: 0;
      }
    }
  }
  .gssn-note{
    margin-bottom:0!important;
    margin-top:10px;
  }
  .gssn {
    width: 96px;
    display: block;
    margin: 20px auto 0;
    @include mq_sp {
      width: percentage(math.div(96px, $spWidth));
      margin: 0 auto percentage(math.div(20px, $spWidth));
    }
  }

  .iso-group {
    @include mq_sp {
      margin-top: percentage(math.div(20px, $spWidth));
      .l-table__body {
        text-align: left;
        display: none;
      }
      .head {
        display: block;
      }
    }
  }
  .securityimg {
    width: 138px;
    padding-right: 30px;
    @include mq_sp {
      width: percentage(math.div(138px, $spInner));
      margin-bottom: percentage(math.div(0px, $spInner));
    }
  }
}
</style>