<template>
  <div class='careers--detail'>
    <template v-if="isEnglish">
      <div class="under-construction"><p>under construction</p></div>
    </template>
    <template v-else>
    <section class='l-section head'>
      <div class='l-section__inner js-lazyclass'>
        <h2>{{ occupation.name }}</h2>
        <h3 v-if="occupation.sub_name">{{ occupation.sub_name }}</h3>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>業務内容</h2>
            <p v-html="occupation.detail"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="occupation.members.length > 0">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>メンバー</h2>
          </div>
          <ul class="member-list">
            <li v-for="(m, i) in occupation.members" :key="i">
              <a :href="m.link" target="_blank" ref="noopener noreferrer">
                <img :src="m.img" />
                <p>{{ m.date }}</p>
                <p><small>{{ m.name }}</small></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="occupation.experience">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>この職種を通して得られる経験</h2>
            <p v-html="occupation.experience"></p>
          </div>
        </div>
      </div>
    </section>


    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>応募に必要なスキル</h2>
            <p v-html="occupation.skill"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="occupation.personality">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>歓迎する人柄</h2>
            <p v-html="occupation.personality"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="occupation.environment">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>quantumの働く環境</h2>
            <p v-html="occupation.environment"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="occupation.holiday">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>quantumの休日・休暇</h2>
            <p v-html="occupation.holiday"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section' v-if="occupation.workstyle">
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>働き方</h2>
            <p v-html="occupation.workstyle"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>契約形態</h2>
            <p v-html="occupation.contract"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>給与</h2>
            <p v-html="occupation.salary"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>選考プロセス</h2>
            <p v-html="occupation.selection"></p>
          </div>
        </div>
      </div>
    </section>

    <section class='l-section'>
      <div class='l-section__inner js-lazyclass'>
        <div class='l-section__body'>
          <div class='text-area'>
            <h2>応募方法</h2>
            <p>以下外部採用ページ「wantedly」よりエントリー、もしくは下記「応募する」ボタンよりお申し込みください。</p><br />
            <p class="link-apply"><span>wantedly<span>　 ⇒　</span></span><a :href="occupation.wantedlyLink" target="_blank" ref="noopener noreferrer">{{ occupation.wantedlyLink }}</a></p>
            <nuxt-link to="/careers/apply" class='btn-primary'>応募する</nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <contact-link :background="'gray'"></contact-link>
    </template>
  </div>
</template>

<script>
import Init from '../../javascripts/init';
import Logo from '../../components/Logo';
import { Cubic, gsap } from 'gsap';
import _each from 'lodash/each'
import ContactLink from '../../components/partial/ContactLink';
export default {
  name: 'index.vue',
  scrollToTop: true,
  components: {
    ContactLink,
    Logo
  },
  head() {
    return {
      title: `${this.$store.state.meta.name}careers`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a start-up studio within Hakuhodo Inc. group. As venture builders specializing in new business creation, we have created many new businesses since our establishment, mainly through co-founding with our partners.' : 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、 新しいプロダクトやサービスを創り出すスタートアップスタジオです。' },
        this.keywords
      ]
    };
  },
  computed: {
    occupation() {
      return this.occupations[this.key]
    }
  },
  data () {
    return {
      key: this.$route.query.occupation,
      occupations: {
        va: {
          name: 'venture architect',
          sub_name: '',
          detail: `− クライアントと共に将来の事業立ち上げにむけた戦略立案、組織設計、顧客ニーズ分析や業務設計、事業採算を検討し、実行に移すための仕組みづくりを推進する。<br />
            − プロジェクト全体のスコープを定め、チーム組成およびスケジュール設計を実施する。<br />
            − アイディエーションやワークショップ、ユーザー調査、コンセプト検証を通じ、目指すべきビジョンや具体的なビジネスアイデアを創発する。<br />
            − プロダクトマネージャーやアートディレクター、エンジニアと共に、製品・サービスに対して機能やデザイン、実装技術などの提案を行い、
            アイデアの妥当性を検証するために必要な実証実験の設計と実装を行う。<br />
            −プロジェクトメンバーとともに、サービスの要求事項を定め、アジャイル型のプロダクト開発を推進する<br />
            − ビジネスを開発・推進する上で必要なリソースの試算（ビジネスプランの策定）を行い、資金調達を含め、ステークホルダーに対して
            リソース調達に向けた各種提案・調整・交渉を行う。`,
          members: [
            {
              img: '/images/careers/detail/member_ryohei_yamamori.jpg',
              date: 'Jan 19, 2023',
              name: '1/q ｜ #3 Ryohei Yamamori (venture architect)',
              link: 'https://note.com/quantum_studio/n/n6447d7ac19c7',
            },
            // {
            //   img: '/images/careers/detail/member_satoru_nakamura.jpg',
            //   date: 'July 25, 2020',
            //   name: '1/q ｜ #6 Satoru Nakamura (venture architect)'
            // }
          ],
          experience: `− アイディエーションからローンチ・グロースまで、『０⇒１』・『１⇒１０』・『１０⇒１００』フェーズ（プロダクトを作り上げ、ビジネスを成長させること）をそれぞれ経験できる。<br />
            − PdMやエンジニア、デザイナー等 専門人材とのビジネス共創が可能な環境で、ソフトウェアのみならず、ハードウェアを含めたリアルプロダクトの開発も可能なリソースを有している。（提案可能なソリューションの幅が広がる）<br />
            − 大手ナショナルクライアントがパートナーになるケースが多く、社会的なインパクトを持ったビジネス構築に携わることが出来る。<br />
            − 博報堂ネットワークを活用して、クリエイティブ開発に携わる機会を豊富に得られる（社内にもクリエイティブ人材が豊富にいるため、ナレッジを蓄積できる）<br />
            − venture architectは、コンサルファーム出身者、事業会社出身者、広告会社出身者など、出身業界が多様性に富んでおり、お互いの長所を活かし合い、相互にサポートしあいながら仕事を進めることが出来る。<br />
            − 新規事業立ち上げプロジェクトのリーダーとして、プロジェクトを主導する権限と責任が付与される。<br />
            − JV(ジョイント・ベンチャー)設立時に、代表取締役として実際のビジネスの舵取りを行うポジションに付くことが出来る。`,
          skill: `<b>必須スキル</b><br />
            − 社内外のエンジニアやデザイナー、プロダクトマネージャー等、プロジェクトメンバーのリソースを適切に把握し、プロジェクト管理ができること。<br />
            − マーケットのリサーチや、ユーザーのインタビュー結果をもとに必要とされるサービス・プロダクトを企画できること。<br />
            − プロダクトの長期ビジョンの重要性を理解した上で、利用者からのフィードバックをもとにプロダクト−サービスの改善案が企画できること。<br />
            − 各種ステークホルダーの意思決定に必要な資料を作成できること。<br /><br />

            <b>歓迎するスキル</b><br />
            − 事業会社における事業投資や起業経験、新規事業開発の経験<br />
            −コンサルティングファーム・ベンチャーキャピタルにおいて、事業開発に掛かるアドバイザリー業務に従事した経験`,
          personality: `− 自ら事業を創出することに強い興味があり、新しいことに対して好奇心旺盛で、主体的・能動的にアクションできること。オンライン／対面や、同期／非同期のコミュニケーションを使い分け、効率的にチームやステークホルダーとコミュニケーションができること。<br />
            − 粘り強く物事に取り組める方<br />
            − 「利他」の精神を持ち、縁の下の力持ちとして業務に従事することに喜びを感じる方<br />
            − 様々な利害の異なる立場の関係者と良好なコミュニケーションをとることで、効率よく業務を進めたご経験のある方<br />
            − 業務全般に関して、自ら率先してアクションを起こし、課題解決に繋げることができる方<br />
            − 当社のビジョンや事業領域に興味や関心がある方<br />
            − 既存の枠に囚われることなく、新しい価値創造に取り組める方`,
          environment: `・リモートワークと赤坂オフィス出社のブレンドワークをセルフコントロール（各人がパフォーマンスを最大限に発揮できる体制を構築）<br />
            ・コアタイム無しのフレックスタイム制度もしくは裁量労働制（パフォーマンス高くゴールを目指す）<br />
            ・月1回の全員会実施（ナレッジ共有や外部講師による講演）<br />
            ・有志で集う月1回のqFRIDAY（少しプライベート寄りの時間でコミュニケーションを図る）<br />
            ・有志で集う読書会（現在は新規開発に関する本で読書会実施中）<br />
            ・ｑClub（一部補助金あり。完全プライベートでコミュニケーション促進）`,
          holiday: `アウトプットと同じぐらいインプットも大切にする。<br />
            ・土、日、祝日、年末年始<br />
            ・バースデイ休暇、フリーバカンス休暇、看護休暇、慶弔休暇`,
          contract: `正社員（入社後最低6ヶ月間は契約社員となります）`,
          salary: `経験、能力等を考慮し、当社規定により支給いたします。`,
          selection: `quantumでは以下のプロセスに参加いただいております。<br />
            なお、ポジションや選考状況によってプロセスは変更になる可能性がありますのであらかじめご了承ください。<br />
            カジュアル面談（ご希望に応じて実施）→人事面談→現場社員との面談→組織上長との面談→内定となった際、人事担当者によるオファー面談<br />
            ※カジュアル面談からオファー面談までの期間は、応募者のみなさんそれぞれに合わせた動き方をしますので一概には言えませんが、1ヶ月〜2ヶ月を予定しております。`,
          wantedlyLink: 'https://www.wantedly.com/projects/920925'
        },
        pm: {
          name: 'product manager',
          sub_name: '',
          detail: `− 産業および消費者の既成概念分析<br />
            − 事業ビジョン策定<br />
            − プロダクトアイデア開発<br />
            − サービスワイヤーフレーム、コールドモック作成<br />
            − 実証実験計画の策定と計画、実施<br />
            − ユーザーインタビューの実施と、ファインディングス、要求仕様の策定<br />
            − サービス、システム開発のプロダクトマネジメント<br />
            − ユーザーフィードバックの分析とプロダクト改善、グロース計画立案と実施`,
          members: [
            {
              img: '/images/careers/detail/member_shunnosuke_suzuki.jpg',
              date: 'Dec 7, 2022',
              name: '1/q ｜ #1 Shunnosuke Suzuki (product manager)',
              link: 'https://note.com/quantum_studio/n/n470c301677e1',
            },
            {
              img: '/images/careers/detail/member_hirotaka_izumi.jpg',
              date: 'Feb 3, 2023',
              name: '1/q ｜ #4 Hirotaka Izumi (product manager)',
              link: 'https://note.com/quantum_studio/n/n48969037eefc',
            },
          ],
          experience: `− quantumのPdMは、プロダクトアイディエーションから、提供価値設計、顧客体験設計、システム横断設計、全てを満たす解を見出し実践します。<br />
            非常に難易度が高くクリエイティブな業務ですが他社では得られない経験となるでしょう。すなわち広義のプロダクトマネジメントトライアングルを実践する環境があります。<br /><br />
            − 超上流からプロダクト開発に携わることができます。quantumは事業の種段階からパートナーと並走する機会が多いです。複数方向性からプロダクトアイデアを企画する経験、アイデア自体の仮説検証、PoC、MVP開発、事業化支援など多くのダイナミックな経験が得られます。<br /><br />
            − 大手ナショナルクライアントがパートナーになるケースが多く、社会的なインパクトを持ったプロダクト開発に初期段階ならびに上流から携われる。<br /><br />
            − 事業会社出身のメンバー、コンサルファーム出身のメンバーも多いため、ビジネス側ナレッジ（VAの側、D&E側）を蓄積できる。<br /><br />
            − PdMは皆エンジニアリング経験があり、チームコミュニケーションに長けたメンバーが多いのが特徴。プロジェクトマネージャー、SE、テクニカルディレクターなどの職種との親和性が高い。`,
          skill: `<b>必須スキル</b><br />
            − Webサービス、デジタルプロダクトのプロダクトマネジメント経験<br />
            − Webサービス、Webアプリケーションの仕組みの理解と、強い興味関心<br />
            − エンジニアやデザイナー、パートナーと協業して事業の成功に導くコミュニケーション能力<br /><br />
            <b>歓迎するスキル</b><br />
            − 定性および定量でのユーザー分析の経験、Webアプリケーションの開発経験（自らコーディングしての開発）<br />`,
          personality: `− 自ら事業を創出することに強い興味があり、新しいことに対して好奇心旺盛で、主体的・能動的にアクションできること。オンライン／対面や、同期／非同期のコミュニケーションを使い分け、効率的にチームやステークホルダーとコミュニケーションができること。<br />
            − 粘り強く物事に取り組める方<br />
            − 「利他」の精神を持ち、縁の下の力持ちとして業務に従事することに喜びを感じる方<br />
            − 様々な利害の異なる立場の関係者と良好なコミュニケーションをとることで、効率よく業務を進めたご経験のある方<br />
            − 業務全般に関して、自ら率先してアクションを起こし、課題解決に繋げることができる方<br />
            − 当社のビジョンや事業領域に興味や関心がある方<br />
            − 既存の枠に囚われることなく、新しい価値創造に取り組める方`,
          environment: `・リモートワークと赤坂オフィス出社のブレンドワークをセルフコントロール（各人がパフォーマンスを最大限に発揮できる体制を構築）<br />
            ・コアタイム無しのフレックスタイム制度もしくは裁量労働制（パフォーマンス高くゴールを目指す）<br />
            ・月1回の全員会実施（ナレッジ共有や外部講師による講演）<br />
            ・有志で集う月1回のqFRIDAY（少しプライベート寄りの時間でコミュニケーションを図る）<br />
            ・有志で集う読書会（現在は新規開発に関する本で読書会実施中）<br />
            ・ｑClub（一部補助金あり。完全プライベートでコミュニケーション促進）`,
          holiday: `アウトプットと同じぐらいインプットも大切にする。<br />
          ・土、日、祝日、年末年始<br />
          ・バースデイ休暇、フリーバカンス休暇、看護休暇、慶弔休暇`,
          contract: `正社員（入社後最低6ヶ月間は契約社員となります）`,
          salary: `経験、能力等を考慮し、当社規定により支給いたします。`,
          selection: `quantumでは以下のプロセスに参加いただいております。<br />
            なお、ポジションや選考状況によってプロセスは変更になる可能性がありますのであらかじめご了承ください。<br />
            カジュアル面談（ご希望に応じて実施）→人事面談→現場社員との面談→組織上長との面談→内定となった際、人事担当者によるオファー面談<br />
            ※カジュアル面談からオファー面談までの期間は、応募者のみなさんそれぞれに合わせた動き方をしますので一概には言えませんが、1ヶ月〜2ヶ月を予定しております。`,
          wantedlyLink: 'https://www.wantedly.com/projects/908186'
        },
        intern_graphic: {
          name: 'internship for students',
          sub_name: '',
          detail: `− ポスター、チラシ、ロゴなどの作成からwebデザイン、映像など新規事業開発に関わる様々な媒体のグラフィックデザイン作業のお手伝いを
            お願いいたします。<br />
            − また上記に伴うリサーチをなどをお願いすることもあります。`,
          members: [
            {
              img: '/images/careers/detail/member_tomomi_koseki.jpg',
              date: 'Dec 23, 2022',
              name: '1/q ｜ #2 Tomomi Koseki (art director)',
              link: 'https://note.com/quantum_studio/n/nf81ad48e34a4',
            },
          ],
          experience: `− 新規事業に関わる0→1過程の上流の段階からのデザインに関われます。<br />
            −グラフィックデザインスキルが身につきます。<br />
            − アートディレクターとはもちろん、プロダクトデザイナーやUI/UXデザイナーと協業する経験が得られます。`,
          skill: `<b>必須スキル</b><br />
            グラフィックデザインソフト: Adobe Photoshop, Illustrator の基本操作、またそれらを使用した基礎的なグラフィックデザインスキル。<br /><br />
            <b>歓迎スキル</b><br />
            Adobe Premier, Aftereffects, XD, Figma<br />
            ※最低６ヶ月は就業をお願いしたいです（1年以上勤務可能な方は歓迎です）。`,
          personality: ``,
          environment: ``,
          workstyle: `−シフト制<br />
            − 完全リモートワーク<br />
            − 20時間以内/1週　※週に1回定例会議に出席いただきます。`,
          holiday: `土、日、祝日、年末年始、その他シフトによる`,
          contract: `弊社グループ会社の博報堂キャプコへ派遣登録をしていただき派遣社員として参画いただきます。`,
          salary: `経験、能力等を考慮し、当社規定により支給いたします。時給制となります。`,
          selection: `quantumでは以下のプロセスに参加いただいております。<br />
            なお、ポジションや選考状況によってプロセスは変更になる可能性がありますのであらかじめご了承ください。<br />
            人事＋現場社員面談→組織上長との面談→内定となった際、人事担当者よりご連絡`,
          wantedlyLink: 'https://www.wantedly.com/projects/1239213'
        },
        intern_ml: {
          name: 'internship for students',
          sub_name: '機械学習・画像認識のエンジニア',
          detail: `− スポーツにおけるデータ活用により、日本のスポーツ市場の成長を目指すべく、自然言語処理や画像処理の技術を用いたプロダクトの開発に
            取り組んでいただきます。<br />
            − 大学教授ならびにquantumのPDM社員が手掛けるAIサービス開発のお手伝いをお願いします。<br />
            − 具体的には以下の業務を開発段階に応じて実施していただきます。<br />
            映像解析技術の要素開発：画像認識、時系列解析、機械学習、組込最適化等…国内外の研究機関・企業と連携して先端技術の研究開発`,
          members: [
            {
              img: '/images/careers/detail/member_takenori_kubo.jpg',
              date: 'July 25, 2020',
              name: '1/q ｜ #4 Takenori Kubo (product manager)',
              link: '',
            },
            {
              img: '/images/careers/detail/member_takahiro_izumi.jpg',
              date: 'July 25, 2020',
              name: '1/q ｜ #5 Takahiro Izumi (product manager)',
              link: '',
            }
          ],
          experience: `− ０⇒１だけでなく１⇒１０，１０⇒１００も体験することができます。<br />
            − 急成長するAI市場において、新たな技術革新にチャレンジできます。<br />
            − 在籍のエンジニアと共に新たなスキルを学び、技術者としての経験を積み、成長するのに最適な環境です。<br />
            − 常に最先端の技術に触れ挑戦することができます。`,
          skill: `− サッカーに詳しいこと<br />
            − 論文(英語含む)が読めること<br />
            − 論文に書いていることを自身で実装できること<br />
            ※望ましい開発言語：Python、C++<br />
            ※AIの知識がありますのみでは採用出来かねます。`,
          personality: ``,
          workstyle: `−シフト制<br />
            − 完全リモートワーク<br />
            − 20時間以内/1週　※週に1回定例会議に出席いただきます。`,
          holiday: `土、日、祝日、年末年始、その他シフトによる`,
          contract: `弊社グループ会社の博報堂キャプコへ派遣登録をしていただき派遣社員として参画いただきます。`,
          salary: `経験、能力等を考慮し、当社規定により支給いたします。時給制となります。`,
          selection: `quantumでは以下のプロセスに参加いただいております。<br />
            なお、ポジションや選考状況によってプロセスは変更になる可能性がありますのであらかじめご了承ください。<br />
            人事＋現場社員面談→組織上長との面談→内定となった際、人事担当者よりご連絡`,
          wantedlyLink: 'https://www.wantedly.com/projects/1239213'
        },
        finance: {
          name: '財務',
          sub_name: '',
          detail: `− 業績管理(予算、実見策定、予実管理、各種分析レポート策定含む)<br />
            − 内部/外部監査及び税務調査対応-決算業務(月次、四半期、年次、連結)<br />
            − 各種伝票処理-キャッシュフロー管理など<br />
            ※人事なども含め5名のメンバーが在籍する「スタジオオペレーション」に配属。<br />
            基本的には一人一役が任されていますが、お互いの業務を助け合う「越境」も大切にしています。<br />
            加えて博報堂グループの経理担当や顧問税理士の方にも質問できるバックアップ体制があるので、ご安心ください。`,
          members: [],
          experience: `− 様々な情報を当社やグループ会社の役員に提示する機会もあり、経営に踏み込んで活躍ができる。<br />
          − 自ら経営課題に対し提案することも可能なので、会社、事業への影響力も強く感じられる。`,
          skill: `必須スキル<br />
          − 財務系業務の経験をお持ちの方（管理会計等を想定）<br />
          − 年次決算業務の経験をお持ちの方<br />
          ※業界経験は不問です。<br />
          ※社会人経験10年以上の方も歓迎いたします。<br /><br />
          歓迎するスキル<br />
          − 年次決算までの決算業務を完結できる(もしくはメインで実行したことがある）方<br />
          − 裁量権を持って働きたい方-簿記1級`,
          personality: `− 自ら事業を創出することに強い興味があり、新しいことに対して好奇心旺盛で、主体的・能動的にアクションできること。<br />
            − オンライン／対面や、同期／非同期のコミュニケーションを使い分け、効率的にチームやステークホルダーとコミュニケーションができること。<br />
            − 粘り強く物事に取り組める方<br />
            − 「利他」の精神を持ち、縁の下の力持ちとして業務に従事することに喜びを感じる方<br />
            − 様々な利害の異なる立場の関係者と良好なコミュニケーションをとることで、効率よく業務を進めたご経験のある方<br />
            − 業務全般に関して、自ら率先してアクションを起こし、課題解決に繋げることができる方<br />
            − 当社のビジョンや事業領域に興味や関心がある方<br />
            − 既存の枠に囚われることなく、新しい価値創造に取り組める方`,
          environment: `・リモートワークと赤坂オフィス出社のブレンドワークをセルフコントロール（各人がパフォーマンスを最大限に発揮できる体制を構築）<br />
            ・コアタイム無しのフレックスタイム制度もしくは裁量労働制（パフォーマンス高くゴールを目指す）<br />
            ・月1回の全員会実施（ナレッジ共有や外部講師による講演）<br />
            ・有志で集う月1回のqFRIDAY（少しプライベート寄りの時間でコミュニケーションを図る）<br />
            ・有志で集う読書会（現在は新規開発に関する本で読書会実施中）<br />
            ・ｑClub（一部補助金あり。完全プライベートでコミュニケーション促進）`,
          holiday: `アウトプットと同じぐらいインプットも大切にする。<br />
          ・土、日、祝日、年末年始<br />
          ・バースデイ休暇、フリーバカンス休暇、看護休暇、慶弔休暇`,
          contract: `正社員（入社後最低6ヶ月間は契約社員となります）`,
          salary: `経験、能力等を考慮し、当社規定により支給いたします。`,
          selection: `quantumでは以下のプロセスに参加いただいております。<br />
            なお、ポジションや選考状況によってプロセスは変更になる可能性がありますのであらかじめご了承ください。<br />
            カジュアル面談（ご希望に応じて実施）→人事面談→現場社員との面談→組織上長との面談→内定となった際、人事担当者によるオファー面談<br />
            ※カジュアル面談からオファー面談までの期間は、応募者のみなさんそれぞれに合わせた動き方をしますので一概には言えませんが、1ヶ月〜2ヶ月を予定しております。`,
          wantedlyLink: 'https://www.wantedly.com/projects/1239213'
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      gsap.delayedCall(0.1, () => {
        Init.setup(this.$store)
      })

    })
  },
  methods: {
  }
};
</script>

<style lang='scss' scoped>
.careers--detail {
  .head {
    padding-top: 136px;
    .l-section__inner {
      display: block;
    }
    @include mq_sp {
      padding-top: percentage(math.div(100px, $spWidth));
    }
    h2 {
      font-size: 44px;
      @include mq_sp {
        text-align: center;
        @include spfontsize(35px);
      }
    }
    h3 {
      font-size: 22px;
      @include mq_sp {
        text-align: center;
        margin-top: 15px;;
        @include spfontsize(16px);
      }
    }
  }

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
      margin-bottom: percentage(math.div(90px, $spWidth));
    }
    &.type-right {
      justify-content: flex-end;
    }
    .text-area {
      h2 {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 30px;
        big {
          font-size: 32px;
        }
        @include mq_sp {
          font-size: 20px;
        }
      }
      p {
        font-size: 16px;
        @include mq_sp {
          @include spfontsize(14px);
        }
      }
      .link-apply {
        display: flex;
        margin-bottom: 60px;
        span {
          span {
            @include mq_sp {
              display: none;
            }
          }
        }
        a {
          &::after {
            position: absolute;
            display: block;
            content: '';
            line-height: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: #999999;
            @include ease-out-cubic($animationTime);
            transform-origin: 0 0;
            transform: scale(0, 0);
          }
          &:hover {
            &::after {
              transform: scale(1, 1);
            }
          }
          @include mq_sp {
            display: block;
            font-size: 13px;
          }
        }
        @include mq_sp {
          display: block;
        }
      }
    }
    .l-section__body {
      margin-top: 0;;
    }
  }
  .member-list {
    list-style: none;
    display: flex;
    li {
      margin-right: 20px;
      a {
        display: block;
        transition: opacity 0.4s ease;
        &:hover {
          opacity: 0.8;
        }
      }
      img {
        max-width:340px;
        display: block;
        margin-bottom: 25px;
        @include mq_sp {
          width: 100%;
          max-width: 100%;
          margin-bottom: 15px;
        }
      }
      p {
        font-size: 20px;
        small {
          font-size: 16px;
        }
        @include mq_sp {
          @include spfontsize(16px);
          small {
            @include spfontsize(13px);
          }
        }
      }
      @include mq_sp {
        margin-right: 0;
      }
    }
    @include mq_sp {
      display: block;
      li {
        margin-bottom: 20px;;
      }
    }
  }
}
</style>