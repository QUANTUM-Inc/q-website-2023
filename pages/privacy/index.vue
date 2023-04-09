<template>
  <section class='l-section privacy'>
    <div class='l-section__inner js-lazyclass'>
      <h2>privacy policy</h2>


      <div class='privacy__set'>
        <h3 v-if='!isEnglish'>個人情報取扱いに関する基本方針</h3>
        <h3 v-if='isEnglish'>Basic Policy on Handling Personal Information</h3>

        <p class='privacy__body' v-if='!isEnglish'>株式会社quantumは、自ら収集した個人情報、得意先各社・媒体各社・協力会社各社からお預かりした個人情報、当社および関係会社の役職員の個人情報に関して、法律・業界基準・社内ルール等を遵守して、適切に取り扱って参ります。</p>
        <p class='privacy__body' v-if='isEnglish'>quantum Inc will comply with the law, industry standards, and internal rules, etc., and handle appropriately the personal information we collect ourselves, the personal information we receive from our clients, media companies, and partner companies, and the personal information of the executives and employees of our company and affiliated companies.</p>
      </div>

      <div class='privacy__set'>
        <h3 v-if='!isEnglish'>当社が取扱う個人情報</h3>
        <h3 v-if='isEnglish'>Personal Information Handled by the Company</h3>

        <p class='privacy__body' v-if='!isEnglish'>当社は、統計的に処理された個人情報を取り扱うことを前提としておりますが、以下に示すような個人が特定される可能性のある情報を取扱う場合があります。</p>
        <p class='privacy__body' v-if='isEnglish'>Although we assume that we handle statistically processed personal information, we may handle information that may identify individuals, as shown below.</p>
        <ol>
          <li v-if='!isEnglish'>アンケート調査やグループインタビュー等の各種研究開発、調査活動を通じて収集される情報の中で個人を特定することが可能な情報</li>
          <li v-if='isEnglish'>Information that can be used to identify individuals in information collected through various research and development and survey activities, such as questionnaires and group interviews</li>

          <li v-if='!isEnglish'>得意先各社および媒体各社によって預託されるキャンペーン応募者等の情報の中で個人を特定することが可能な情報</li>
          <li v-if='isEnglish'>Information that can be used to identify individuals in the information of campaign applicants entrusted to us by our clients and media companies.</li>

          <li v-if='!isEnglish'>当社が運営するWEB会員組織の個人情報</li>
          <li v-if='isEnglish'>personal information of web membership organizations operated by the Company</li>

          <li v-if='!isEnglish'>その他の当社の事業によって収集される情報の中で個人を特定することが可能な情報</li>
          <li v-if='isEnglish'>Information that can be used to identify individuals in other information collected through the Company's business.</li>

          <li v-if='!isEnglish'>当社、関係会社および当社と業務を共に行う協力会社の役職員の個人情報</li>
          <li v-if='isEnglish'>Personal information of officers and employees of the Company, its affiliates, and partner companies with which the Company conducts business.</li>
        </ol>
      </div>

      <div class='privacy__set'>
        <h3 v-if='!isEnglish'>個人情報保護にあたっての基本原則</h3>
        <h3 v-if='isEnglish'>Basic Principles for the Protection of Personal Information</h3>

        <p class='privacy__body' v-if='!isEnglish'>当社は、個人情報を取り扱う上で、以下の基本原則を明確にし、これを遵守します。</p>
        <p class='privacy__body' v-if='isEnglish'>In handling personal information, the Company will clarify and comply with the following basic principles.</p>

        <h4 v-if='!isEnglish'>1. 関連法規等の遵守</h4>
        <h4 v-if='isEnglish'>1. Compliance with Relevant Laws and Regulations</h4>

        <p class='privacy__body' v-if='!isEnglish'>個人情報に関する法令、規則、契約、社内ルール等を遵守します。</p>
        <p class='privacy__body' v-if='isEnglish'>We will comply with all laws, regulations, contracts, and internal rules related to personal information.</p>


        <h4 v-if='!isEnglish'>2. 本人からの個人情報の適正な取得および利用</h4>
        <h4 v-if='isEnglish'>2. Appropriate Acquisition and use of Personal Information from the Individual</h4>

        <p class='privacy__body' v-if='!isEnglish'>本人からの個人情報の取得にあたっては、あらかじめその利用目的、第三者への提供可能性の有無とその場合の目的をご説明します。また、利用目的や提供相手に変更がある場合は、それを本人にお知らせし、同意を頂けない場合は、同意を頂いている範囲内での利用に留めます。情報の一部ないし全部に関する利用拒否のお申し出を頂いた場合は、それに応じます。また、情報の正確性の確保に努めるとともに、開示、訂正、削除の要求があった場合は、それに応じます。</p>
        <p class='privacy__body' v-if='isEnglish'>When acquiring personal information from the individual, we will explain in advance the purpose of use and whether or not the information may be provided to a third party, and if so, the purpose. If there is any change in the purpose of use or the party to which the information will be provided, we will notify the person in question of the change, and if the person does not give consent, we will use the information only within the scope of the consent given. If we receive a request to refuse the use of some or all of the information, we will comply with the request. In addition, we will make every effort to ensure the accuracy of the information and respond to requests for disclosure, correction, or deletion.</p>

        <h4 v-if='!isEnglish'>3. 取引上お預かりする個人情報の適正性の確認、適正な利用と安全管理</h4>
        <h4 v-if='isEnglish'>3. Confirmation of the Appropriateness of Personal Information Entrusted to us in the Course of Business, Appropriate Use and Safety Management</h4>


        <p class='privacy__body' v-if='!isEnglish'>当社がビジネス遂行上お預かりする得意先各社、媒体各社からお預かりする個人情報については、その入手方法、利用許諾範囲の確認を行い、お取引先の要請と当社の社内ルールに則り、適正な利用を行います。</p>
        <p class='privacy__body' v-if='isEnglish'>With regard to the personal information we receive from our clients and media companies in the course of our business, we will confirm the method of acquisition and the scope of permission for use, and use it appropriately in accordance with the requests of our clients and our internal rules.</p>


        <h4 v-if='!isEnglish'>4. 役職員の教育</h4>
        <h4 v-if='isEnglish'>4. Education of Officers and Employees</h4>

        <p class='privacy__body' v-if='!isEnglish'>当社役職員に対し、個人情報保護の重要性、法律上の要請、管理体制、取扱いルール、違反時の措置を理解させる教育啓発活動を定期的に実施し、個人情報の適正な取扱いと各種規制・ルールの遵守を推進します。</p>
        <p class='privacy__body' v-if='isEnglish'>We will regularly educate our officers and employees on the importance of personal information protection, legal requirements, management systems, handling rules, and measures to be taken in case of violations, and promote the proper handling of personal information and compliance with various regulations and rules.</p>

        <h4 v-if='!isEnglish'>5. 情報取扱管理体制の確立</h4>
        <h4 v-if='isEnglish'>5. Establishment of Information Handling Management System</h4>


        <p class='privacy__body' v-if='!isEnglish'>個人情報の保護を行うために、社内管理および責任体制を明確にし、個人情報に関する管理責任者を選定します。</p>
        <p class='privacy__body' v-if='isEnglish'>In order to protect personal information, we will clarify our internal management and responsibility system, and select a person responsible for the management of personal information.</p>

        <h4 v-if='!isEnglish'>6. 情報の取扱い明確化</h4>
        <h4 v-if='isEnglish'>6. Clarification of Information Handling</h4>


        <p class='privacy__body' v-if='!isEnglish'>個人情報の閲覧、利用、保管、廃棄、返却など個人情報が安全かつ適切に取扱われるためのルールを定め、管理責任者のもとで、これを遵守します。</p>
        <p class='privacy__body' v-if='isEnglish'>We will establish rules for the safe and appropriate handling of personal information, including the viewing, use, storage, disposal, and return of personal information, and will comply with these rules under the supervision of the person responsible for management.</p>

        <h4 v-if='!isEnglish'>7. 不正アクセスに関する対策</h4>
        <h4 v-if='isEnglish'>7. Measures Against Unauthorized Access</h4>


        <p class='privacy__body' v-if='!isEnglish'>不正なアクセスによる個人情報の窃盗、紛失、改竄、破壊を防ぐために、情報システム、情報管理体制ならびにその他の施策を適正に構築します。</p>
        <p class='privacy__body' v-if='isEnglish'>In order to prevent the theft, loss, falsification, or destruction of personal information due to unauthorized access, we will establish appropriate information systems, information management systems, and other measures.</p>

        <h4 v-if='!isEnglish'>8. 情報処理委託時の安全性の確保</h4>
        <h4 v-if='isEnglish'>8. Ensuring Safety when Outsourcing Information Processing</h4>

        <p class='privacy__body' v-if='!isEnglish'>個人情報の処理を外部に委託する場合には、社内ルールに則り、情報の安全管理が確保されると確認された委託先を選定し、適切な監督を実施します。</p>
        <p class='privacy__body' v-if='isEnglish'>When we outsource the processing of personal information to a third party, we will select a third party that has been confirmed to ensure the safe management of information in accordance with our internal rules, and we will implement appropriate supervision.</p>

        <h4 v-if='!isEnglish'>9. 問題発生時の即時対応体制の確立</h4>
        <h4 v-if='isEnglish'>9. Establishment of an Immediate Response System in the Event of a Problem</h4>


        <p class='privacy__body' v-if='!isEnglish'>万一問題が発生したときは、遅滞なくかつ正確に状況を把握し、適切な判断と対応を行う組織体制を構築します。</p>
        <p class='privacy__body' v-if='isEnglish'>In the unlikely event of a problem occurring, we will establish an organizational structure to accurately assess the situation without delay and make an appropriate decision and response.</p>

        <h4 v-if='!isEnglish'>10. 継続的改善</h4>
        <h4 v-if='isEnglish'>10. Continuous Improvement</h4>


        <p class='privacy__body' v-if='!isEnglish'>管理状況のモニタリングを通じて、また外部の環境変化に応じて、継続的に各種改善を図ります。</p>
        <p class='privacy__body' v-if='isEnglish'>We will continuously make various improvements through monitoring of the management status and in response to changes in the external environment.</p>
      </div>


      <div class='privacy__set'>
        <h3 v-if='!isEnglish'>利用規約</h3>
        <h3 v-if='isEnglish'>Terms of Use</h3>

        <p class='privacy__body' v-if='!isEnglish'>このウェブサイトは株式会社quantumが運営しています。以下の各事項をご了承の上、当ウェブサイトをご利用ください。</p>
        <p class='privacy__body' v-if='isEnglish'>This website is operated by quantum Corporation. Please read and agree to the following terms and conditions before using this website.</p>

        <h4 v-if='!isEnglish'>1. 著作権について</h4>
        <h4 v-if='isEnglish'>1. Copyright</h4>
        <ol>
          <li v-if='!isEnglish'>当社ウェブサイト及び当社ウェブサイト上に掲載される個々の文章、写真、映像、音楽、音声、その他の著作物（以下、総称して「コンテンツ」といいます）に関する著作権は、当社または原著作者その他の権利者に帰属します。</li>
          <li v-if='isEnglish'>The copyright to the Company's website and all text, photographs, images, music, sound, and other copyrighted material (collectively, the "Content") on the Company's website belongs to the Company, the original author, or other rights holders.</li>


          <li v-if='!isEnglish'>個人的な利用を目的として印字や保存等する場合、その他著作権法により認められる場合を除き、コンテンツを当社、原著作者またはその他の権利者の許諾を得ることなく、複製、公衆送信、改変、切除、お客様のウェブサイトへの転載等する行為は著作権法により禁止されていますので、事前に当社にご連絡上、許諾を得ていただくようお願いいたします。なお、肖像、第三者の著作物・商標等が含まれている場合、当社が不適切と判断する場合等、ご利用をお断りする場合もあります。</li>
          <li v-if='isEnglish'>Except for printing or storing the Contents for personal use or as otherwise permitted under the Copyright Act, the duplication, public transmission, alteration, removal, or reprinting of the Contents on a customer's website without the permission of the Company, the original author, or other right holders is prohibited under the Copyright Act. Therefore, please contact us in advance to obtain our permission. In addition, we may refuse the use of the site if it contains portraits, copyrighted works or trademarks of third parties, or if we deem it inappropriate.</li>


          <li v-if='!isEnglish'>当社の許諾を得てコンテンツを利用する場合、当社指定の著作権表示を行ってください。当社の事前の了承なく、著作権表示を変更、削除することはできません。</li>
          <li v-if='isEnglish'>When using the contents with our permission, please display the copyright notice specified by us. You may not change or delete the copyright notice without the prior consent of the Company.</li>
        </ol>

        <h4 v-if='!isEnglish'>2. 商標について</h4>
        <h4 v-if='isEnglish'>2. Trademarks</h4>

        <p class='privacy__body' v-if='!isEnglish'>当社ウェブサイト及び当社ウェブサイト上に掲載される個々の商標・ロゴマーク、商号に関する権利は、当社または個々の権利の所有者に帰属します。<br>商標法その他の法律により認められる場合を除き、これらを当社の許諾を得ることなく使用等する行為は商標法等により禁止されていますので、事前に当社にご連絡の上、許諾を得ていただくようお願いいたします。</p>
        <p class='privacy__body' v-if='isEnglish'>The rights to the Company's website and to the trademarks, logos, and trade names appearing on the Company's website belong to the Company or to the owners of the respective rights.<br>The use of these trademarks, logos, and trade names without the permission of the Company is prohibited by the Trademark Law and other laws, except where permitted by the Trademark Law or other laws.</p>


        <h4 v-if='!isEnglish'>3. ウェブサイトに関するお問い合せ</h4>
        <h4 v-if='isEnglish'>3. Inquiries about the website</h4>

        <ol>
          <li v-if='!isEnglish'>当社は、コンテンツ、その他のウェブサイトで提供される情報等（以下、総称して「コンテンツ等」といいます）の内容に関し、その正確性、有用性、確実性その他いかなる保証もするものではありません。コンテンツ等のご利用により万一何らかの損害が発生したとしても、当社は一切責任を負いません。</li>
          <li v-if='isEnglish'>The Company does not guarantee the accuracy, usefulness, certainty, or any other aspect of the content or other information provided on the website (hereinafter collectively referred to as "content, etc."). In no event shall the Company be liable for any loss or damage arising from the use of the content.</li>


          <li v-if='!isEnglish'>当社は、ウェブサイトの構成、利用条件、URLおよびコンテンツ等を、予告なしに変更または中止することがあります。</li>
          <li v-if='isEnglish'>The Company reserves the right to change or discontinue the structure, terms of use, URL, and contents of the website without prior notice.</li>


          <li v-if='!isEnglish'>当社は、ウェブサイトの運営を予告なしに中断または中止することがあります。</li>
          <li v-if='isEnglish'>The Company may suspend or discontinue the operation of the website without notice.</li>
        </ol>

        <h4 v-if='!isEnglish'>4. リンクについて</h4>
        <h4 v-if='isEnglish'>4. About Links</h4>

        <ol>
          <li v-if='!isEnglish'>当社のサイトへのリンクは、当社の関連する事業および業務などに関連のあるサイトからに限り、事前の当社からの承諾を受けたことを条件に許諾させていただきます。当社と関連する事業に関わるウェブサイトであっても、事前の当社からの承諾を得ることなく、このウェブサイトへのリンクを張ることはできません。リンクを希望する場合は事前にご連絡ください。</li>
          <li v-if='isEnglish'>Links to the Company's website may be permitted only from websites related to the Company's related businesses and operations, provided that the Company has received prior approval from the Company. Even if the website is related to the business of the Company, you may not link to this website without obtaining prior approval from the Company. If you wish to link to this website, please contact us in advance.</li>


          <li v-if='!isEnglish'>このウェブサイトからもしくはこのウェブサイトへリンクを張っている当社以外（株式会社quantum）のウェブサイトは当社の管理下にあるものではありません。その内容について、またそれらを利用されたことによって生じたいかなる損害についても、当社は責任を負いません。</li>
          <li v-if='isEnglish'>The websites of other companies (quantum Inc) linked to or from this website are not under the control of the Company. quantum assumes no responsibility for the content of such websites or for any damages resulting from the use of such websites.</li>


          <li>
            <p v-if='!isEnglish'>以下のリンク、またはそのおそれのあるリンクはお断りいたします。</p>
            <p v-if='isEnglish'>The following links, or links that may lead to such links, are not permitted.</p>
            <ul>
              <li v-if='!isEnglish'>当社またはその関係会社、それらの役員または社員を誹謗・中傷するサイトからのリンク</li>
              <li v-if='isEnglish'>Links from sites that slander or defame the Company, it's affiliated companies, their officers or employees.</li>

              <li v-if='!isEnglish'>公序良俗に反するサイト等、当社の信用、品位を損なうサイトからのリンク</li>
              <li v-if='isEnglish'>Links from sites that are offensive to public order and morals or that damage the reputation or dignity of the Company.</li>

              <li v-if='!isEnglish'>フレームリンク等、当社ウェブサイトの明確性が損なわれる形のリンク</li>
              <li v-if='isEnglish'>Links from sites that damage the credibility or dignity of the Company, such as sites that are offensive to public order and morals.</li>

              <li v-if='!isEnglish'>当社と何らかの提携または協力関係にあるものと誤認を生じさせ、または当社がリンク元のサイトを認知もしくは支持しているとの誤認を生じさせるリンク</li>
              <li v-if='isEnglish'>Links that create the misconception that there is some kind of alliance or cooperative relationship with the Company, or that the Company recognizes or supports the site from which the link originates.</li>

              <li v-if='!isEnglish'>その他当社が不適切と判断するリンク</li>
              <li v-if='isEnglish'>Other links that the Company deems inappropriate.</li>
            </ul>
          </li>


          <li v-if='!isEnglish'>当社は、上記（3）のリンクについては、当社が一旦許諾した場合といえども、削除を要請する場合があります。</li>
          <li v-if='isEnglish'>The Company reserves the right to request the deletion of any link described in (3) above, even if the Company has already granted permission.</li>
        </ol>


        <h4 v-if='!isEnglish'>5. アイデア等のご提案について</h4>
        <h4 v-if='isEnglish'>5. About Idea Proposals</h4>

        <p class='privacy__body' v-if='!isEnglish'>当社では、広告やコミュニケーションに関して、独自の研究および開発、企画や戦略の立案等を行っております。一般の方からいただく新しい技術、デザイン、広告およびマーケティング等に関するアイデア、メモ、図画、コンセプトその他のご提案は、当社が一般に募集することを告示した場合を除き、原則として受け付けておりません。<br>なお、上記の当社の方針にも関わらず、万一、ご提案をいただいた場合でも、当社は、お客様より送付いただいたアイデア等に関し、お客様が以下の点にご了承の上、送付されたものとみなします。あらかじめご了承ください。</p>
        <p class='privacy__body' v-if='isEnglish'>The Company conducts its own research and development, planning and strategic planning for advertising and communication. In principle, we do not accept any ideas, notes, drawings, concepts, or other proposals from the general public regarding new technologies, designs, advertising, marketing, etc., unless we have notified the public that we are soliciting such proposals. Even in the unlikely event that we do receive a proposal despite our policy above, we will assume that you have agreed to the following points before sending us your idea. Please be aware of this in advance.</p>


        <ul>
          <li v-if='!isEnglish'>送付いただいたアイデア等に関し、当社が秘密保持の義務を負わないこと</li>
          <li v-if='isEnglish'>The Company is under no obligation to maintain the confidentiality of the idea, etc. sent by the Customer.</li>


          <li v-if='!isEnglish'>送付いただいたアイデア等に関し、当社が検討、評価、採用等をする義務を負わないこと</li>
          <li v-if='isEnglish'>The Company is under no obligation to consider, evaluate, or adopt the idea, etc. sent to the Company.</li>

          <li v-if='!isEnglish'>送付いただいたアイデア等の全部または一部と同一または類似の商品・サービス等が、当社から発表・公表された場合であっても、当社は送付されたお客様やその他第三者に対して、対価の支払いその他いかなる責任を負わないこと。</li>
          <li v-if='isEnglish'>The Company shall not be obligated to review, evaluate, or adopt the idea,  sent to the Company. - The Company shall not be liable for any compensation or any other responsibility to the customer who sent the idea, or any other third party, even if the Company announces or publishes a product or service that is the same or similar in whole or in part to the idea, sent to the Company.</li>


          <li v-if='!isEnglish'>送付いただいたアイデア等を当社が自由に利用できること。あわせて、それらのアイデア等に関し、著作権その他いかなる権利等を行使しないこと</li>
          <li v-if='isEnglish'>The Company shall be free to use the ideas, sent to it, and shall not exercise any copyright or any other rights.</li>
        </ul>


        <h4 v-if='!isEnglish'>6. ソフトウェアのダウンロードについて</h4>
        <h4 v-if='isEnglish'>6. Software Download</h4>

        <p class='privacy__body' v-if='!isEnglish'>皆様が当ウェブサイトのリンク先のウェブサイトからソフトウェアをダウンロードする場合は、当該ソフトウェアの使用許諾に関する条件を正しく守っていただきますようお願いいたします。また、当該ソフトウェアのインストールおよび利用に際しては、当社はいかなる責任も負いません。</p>
        <p class='privacy__body' v-if='isEnglish'>If you download a software from a website linked to this website, please follow the terms and conditions of the license agreement for that software. The Company assumes no responsibility whatsoever for the installation or use of such software.</p>

        <h4 v-if='!isEnglish'>7. ウェブサイトに関するお問い合せ</h4>
        <h4 v-if='isEnglish'>7. Inquiries about the website</h4>

        <p class='privacy__body' v-if='!isEnglish'>当社ウェブサイトやリンク等に関するお問い合せは、<a href='mailto:info@quantum.ne.jp' target='_blank'>こちら</a>から当社までご連絡ください。（リンクをクリックすると、既定の電子メールプログラムが起動します。）</p>
        <p class='privacy__body' v-if='isEnglish'>If you have any questions about our website or links to it, please <a href='mailto:info@quantum.ne.jp' target='_blank'>click here</a> to contact us. (Clicking on the link will launch your default e-mail program.)</p>
      </div>




    </div>
    <contact-link></contact-link>
  </section>
</template>

<script>
import Init from '../../javascripts/init';
import ContactLink from '../../components/partial/ContactLink';
export default {
  name: 'index.vue',
  components: {
    ContactLink
  },
  created() {

  },
  head() {
    return {
      title: `${this.$store.state.meta.name}privacy policy`,
      meta: [{hid: 'description',
        name: 'description',
        content: this.isEnglish ? 'quantum is a startup studio that creates new products and services in all areas of business development, from conception to implementation.' : 'quantumは、発想から実装まで、事業開発の全てを活動領域とし、新しいプロダクトやサービスを創り出すスタートアップスタジオです。' },
        this.keywords]
    };
  },
  mounted() {
    Init.setup(this.$store)
  },
};
</script>

<style lang='scss' scoped>

</style>