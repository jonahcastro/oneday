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
                What does OneDay see in the current trust industry?
            </h5>

            <p className="mx-5 mt-5 font-sans text-md leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 ">
                Given our experience in the trust industry, we see that people consider trusts as: <br></br><br></br>

                - an estate planning tool for the wealthy individuals as the starting price to establish a trust and the threshold in maintaining a trust is generally high<br></br><br></br>

                - inconvenient and time consuming as there will usually be multiple in-person/virtual meetings and calls with the service providers to finalise trust documents<br></br><br></br>

                The above factors have generally deterred many people from approaching or considering establishing trusts. <br></br><br></br>

                OneDay believes that trust is a very useful estate planning tool and that it should be made accessible to as many people as possible. 


            </p>
            
            <h5 className="font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-7xl lg:leading-12 mt-10 mx-5">
                What is OneDay planning to do?
            </h5>

            <p className="mx-5 mt-5 font-sans text-md leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 ">
            OneDay will be launching an online platform providing everyone accessibility to establish and execute trusts in an affordable, quick and secured manner. <br></br><br></br>

            Particularly, we understand that time is of the essence and sometimes it is difficult to juggle around time.  By signing up to OneDay trust plans, you do not need to worry anymore about spending time commuting or scheduling appointments as you can conveniently establish your trusts from your home or anywhere else you like and at any time. 


            </p>

            <h5 className="font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-7xl lg:leading-12 mt-10 mx-5">
                After I sign up to a OneDay trust plan and sign my trust deed, what do I do next? Do I need to look for a trustee?  
            </h5>

            <p className="mx-5 mt-5 font-sans text-md leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 mb-20">
                We think from your perspective and try to align everything for you, alleviating your stress and workload. OneDay not only provides you with trust documents, we also help you establish your trusts. <br></br><br></br>

                In order to effectively establish your trust, you will need to transfer initial funds to the trustee of your trust, otherwise, your trust is just a standby trust where no assets are being managed. By signing up to our trust plans, you do not need to look for a trustee because OneDay will act as the licensed and regulated trustee for your trust. <br></br><br></br>

                Hence, after you sign your trust deed generated through our OneDay platform, all you need to do is to transfer initial funds (e.g. currencies such as USD, CAD, HKD and SGD or stablecoins such as USDC and BUSD) to OneDay to effectively establish your trust. <br></br><br></br>

                OneDay will not be holding your funds. Instead, your currencies will be kept with world leading financial institutions and your stablecoins with our partner custodian that is licensed, regulated and has insurance coverage over US$500M. So you can rest assured that your funds are secured and protected at all times. <br></br><br></br>

                We adopt a multi-party signature (for accounts held with financial institutions) and multi-party computation (for accounts held with our partner custodian) processes so that no one individual could take control of your funds at all times and most importantly, there will always be someone to manage your trust funds. We will issue a further newsletter with more detailed information on how our trust accounts are managed. Look out for our newsletters!


            </p>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
