import React from "react";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";

const RefundPolicy = () => {
  return (
    <>
      <Navbar2 />
      <div className="text-center bg-accent shadow shadow-3 ">
        <h1 className="display-1 py-md-5 py-4 fw-bolder text-white">
          Refund Policy
        </h1>
      </div>
      <div className="container p-md-5 my-3">
        <h1>REFUND & CANCELLATION POLICY</h1>
        <p>
          Thank you for purchasing our information retrieval services. We want
          to ensure you have a smooth and satisfactory experience with our
          platform. Here’s our policy on refunds and cancellations.
        </p>

        <h2>REFUNDS</h2>
        <p>
          We offer a 48-hour money-back guarantee. If for any reason you are not
          completely satisfied with our services, you can contact us within 48
          hours (2 days) of your purchase to request a refund.
        </p>
        <p>
          The 48-hour period starts on the day the service is purchased,
          irrespective of when you start using it.
        </p>
        <p>
          To request a refund, please send us an email at{" "}
          <a href="mailto:support@WheelSpectraPro.com">
            support@WheelSpectraPro.com
          </a>{" "}
          with the subject “Refund Request.” In the body of the email, include
          your full name, the email address used to purchase the service, your
          order number, and the reason for your refund request.
        </p>
        <p>
          After we receive your refund request, our team will review it and
          process the refund if the request is approved. This can take up to 7
          business days, but under normal circumstances should only take 2
          business days. The refund will be made via the original payment method
          used for the purchase.
        </p>
        <p>
          Please note that if you have violated any terms of service, such as by
          filing a chargeback, or if the service has been used inappropriately,
          you may not be eligible for a refund.
        </p>

        <h2>SUBSCRIPTIONS AND CANCELLATIONS</h2>
        <p>
          We offer various subscription membership packages, and you are free to
          cancel your subscription at any time. To cancel your subscription,
          simply log into your account and navigate to the ‘My Account’ section
          on your dashboard. Follow the prompts to cancel your subscription.
        </p>
        <p>No penalty or fee will be charged for cancellations.</p>
        <p>
          After cancellation, you will continue to have access to the services
          until the end of your current billing period. Once the subscription
          period ends, your account will no longer be billed, and access to the
          subscription services will be revoked.
        </p>
        <p>
          You will be responsible for all charges incurred for any services used
          before the effective cancellation date.
        </p>

        <h2>CHANGES TO THIS POLICY</h2>
        <p>
          We reserve the right to revise our Refund and Cancellation Policy at
          any time. Changes will not be retroactive. The most current version of
          the policy will govern our processing of refunds and cancellations and
          will be available on this page. If you have any questions or concerns
          regarding our refund and cancellation policy, please reach out to us
          via our Contact Us page or at{" "}
          <a href="mailto:support@WheelSpectraPro.com">
            support@WheelSpectraPro.com
          </a>
          . We value your business and strive to ensure you are satisfied with
          our services. Thank you for choosing our information retrieval
          services.
        </p>

        <p>© Copyright 2023 WheelSpectraPro, All rights reserved.</p>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;
