import { Fragment } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Blog() {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog</title>
      </Head>
      <Header />
      <main>
        <div role="gridcell">
            <h5 className="font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-7xl lg:leading-12 mt-20 mx-5">
            What is a trust?
            </h5>

            <p className="mx-5 mt-5 font-sans text-md leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 ">
            A trust is not a company nor an organisation, but a relationship that you establish with someone, whether it be a family member, relative or friend, or a professional, whom you trust and feel comfortable with in transferring your assets to, for the purposes of holding your assets for the benefit of your loved ones. 
            </p>
            
            <h5 className="font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-7xl lg:leading-12 mt-10 mx-5">
            Who are the parties involved in establishing a trust? 
            </h5>

            <p className="mx-5 mt-5 font-sans text-md leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 ">
            You, who will be transferring assets into the trust, are called the “settlor”. The person or professional whom you are transferring your assets to is called the “trustee”. Your loved ones, who will receive benefits from your trust, are called “beneficiaries”. 
            </p>

            <h5 className="font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-7xl lg:leading-12 mt-10 mx-5">
            I hear people mentioning bare or simple trust and discretionary trust? What is the difference? 
            </h5>

            <p className="mx-5 mt-5 font-sans text-md leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 ">
            A bare or simple trust is established if you transfer some assets to a trustee to hold on your behalf. Your trustee will basically listen to what you say and act upon your instructions in relation to how your assets should be managed. Your trustee in these circumstances is effectively your nominee. Although your assets are held in the name of your trustee, such assets still belong to you and your estate in the unfortunate event of you leaving this world. Your assets in a bare trust are therefore not bulletproof from creditors. 
            </p>

            <h5 className="font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-7xl lg:leading-12 mt-10 mx-5">
            Discretionary Trust
            </h5>

            <p className="mx-5 mt-5 font-sans text-md leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 mb-10">
            A discretionary trust on the other hand is established if you transfer your assets to a trustee and you then lose all control over such assets, except for certain powers reserved to you. Your trustee will have the absolute discretion on deciding how the transferred assets should be managed and to whom should the assets be distributed to. Assets in a discretionary trust can be protected from creditors if the trust documents are well drafted.<br></br><br></br>

            You might wonder how your trustee might manage the trust asset and whether he will manage in line with your intention.  <br></br><br></br>

            Although you no longer have any say over the trust assets (except for powers reserved to you), you can give your trustee some guidance through a letter of wishes on how the assets should be managed and distributed. For example, in the letter of wishes, you can specify to whom should the trust assets be distributed to in the unfortunate event of you leaving this world and on what conditions, if any, should they receive their distributions. However, please note that your letter of wishes is not legally binding on your trustee. Your trustee could exercise his discretion not to follow your wishes if he considers that it is not in the best interests of the beneficiaries. <br></br><br></br>

            Hope this newsletter can give you a better understanding of establishing a trust. Stay tuned and look out for our next newsletter!

            </p>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
