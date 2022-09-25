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
          <div className="px-4 lg:mt-48 lg:px-40">
            <h5 className="mx-5 mt-20 font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-4xl lg:leading-12">
              I am starting to think of my estate planning. Should I prepare a
              will or a trust?
            </h5>

            <p className="text-md mx-5 mt-5 font-sans leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 ">
              Wills and trusts serve different purposes and have their own
              unique characteristics. They can coexist together.<br></br>
              <br></br>
              The first estate planning tool that generally comes to people’s
              mind is a Will. Wills allow people to specify their post-mortem
              arrangements on how their assets should be dealt with. In a simple
              Will, you can arrange for the following:<br></br> <br></br>
              1) appoint specific person(s) as your executor(s), who will be
              responsible for applying for the relevant grant of administration
              or equivalent documents (if applicable) at the place where your
              assets are situated and administer and distribute your assets at
              the relevant time and in accordance with your Will.<br></br>
              <br></br>
              2) appoint specific person(s) as your beneficiary(ies), who will
              receive your assets. These beneficiaries can be any person (e.g.
              family members, relatives or friends) and organisations (e.g.
              charities and universities). <br></br>
              <br></br>
              One thing to keep in mind when preparing your Will is that your
              Will only deals with assets held under your name. If you have any
              assets that are jointly held with other persons (e.g. joint bank
              account or real estates held as joint tenants with right of
              survivorship), insurance policies with designated beneficiaries or
              trusts, then these assets are not considered as assets held under
              your name and will not be dealt with in accordance with your Will.
            </p>

            <h5 className="mx-5 mt-10 font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-4xl lg:leading-12">
              If I already have a Will in place, then why do I need to set up a
              trust?
            </h5>

            <p className="text-md mx-5 mt-5 font-sans leading-5  text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7 ">
              Trusts offer a number of benefits and can definitely help with
              your estate planning. One of the benefits is that trusts can avoid
              probate (i.e. your executor(s) do not need to take a lengthy
              process, which could take at least 6 months or more, to apply for
              a grant of administration or equivalent documents (if applicable))
              because assets held under your trust do not belong to you.
              <br></br>
              <br></br>
              If you have named your loved ones as beneficiaries under your Will
              and trust, your loved ones would generally receive the trust
              assets quicker than the assets to be distributed under your Will.{" "}
              <br></br>
              <br></br>
              Check out <a href="http://www.onedaywhen.io/blog/what-is-trust" className="underline">here</a> for more information on what a trust is
              and who the parties are.
            </p>

            <h5 className="mx-5 mt-10 font-display text-3xl font-bold leading-8 text-purple md:text-5xl lg:text-4xl lg:leading-12">
              If my loved ones can receive assets under a trust quicker than
              under a Will, then why don’t I just set up a trust?
            </h5>

            <p className="text-md mx-5 mt-5 mb-20 font-sans  leading-5 text-secondary md:text-lg lg:mx-10 lg:mt-10 lg:leading-7">
              Although it is more likely for a trust to give your loved ones
              quicker access to your assets, a Will is also important.
              Generally, you will not transfer all assets into your trust
              because if you do so, you might not have sufficient money to
              support yourself. So, you might still have a bank account holding
              some of your money. As this bank account is still held under your
              name, a Will would be helpful for you to specify how you wish the
              money held in your bank account to be distributed post-mortem,
              especially if the money is significant. Apart from the bank
              account, there may be some personal items (e.g. watch, car or
              paintings) that you still own and do not wish to transfer into
              your trust. Your Will can deal with such personal items. <br></br>
              <br></br>
              Given the above, there is no conflict in preparing a Will and
              setting up a trust. Both estate planning tools are as equally
              important as the other.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
