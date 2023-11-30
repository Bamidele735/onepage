import React from "react";
import XseedLogo from "../../../assects/Annotation 2023-11-28 210835.png";
import ethLogo from "../../../assects/ethIcon.png";
import usdcLogo from "../../../assects/bnb.png";
import Image from "next/image";
import styles from "./nodePayment.module.css";
import Counter from "../../../components/counter";
import TermsAndCondition from "../termsAndCondition";
import Submit from "../submit";
export default function Payment() {
  return (
    <div className={styles.Payment}>
      <section className={styles.nodeSold}>
        <Image src={XseedLogo} alt="XseedLogo" width={500} height={500} />
        <div className={styles.paymentInput}>
          <div>
            <p>Nodes Sold</p>
            <input type="text" placeholder="121" />
          </div>{" "}
          <div>
            <p>Nodes Sold</p>
            <input type="text" placeholder="121" />
          </div>{" "}
          <div>
            <p>Nodes Sold</p>
            <input type="text" placeholder="121" />
          </div>
        </div>
      </section>
      <section className={styles.nodePayment}>
        <h4>Select payment method</h4>
        <div
          className={`${styles.PaymentDropdown} hs-dropdown relative inline-flex`}
        >
          <div id="hs-dropdown-default" className={styles.hs_droppdown}>
            <div className={styles.dropdownDiv}>
              <Image
                src={ethLogo}
                alt="chainLogo"
                className={styles.chainLogo}
                width={500}
                height={500}
              />
              <div className={styles.TokenSection}>
                <p>Token</p>
                <Image
                  src={usdcLogo}
                  className={styles.NetworkLogo}
                  alt="XseedLogo"
                  width={500}
                  height={500}
                />
              </div>{" "}
              <div className={styles.NetworkSection}>
                <header>Network</header>
                <p>Ethereum</p>
              </div>
            </div>
            <svg
              className="hs-dropdown-open:rotate-180 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
            aria-labelledby="hs-dropdown-default"
          >
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              href="#"
            >
              Newsletter
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              href="#"
            >
              Purchases
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              href="#"
            >
              Downloads
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
              href="#"
            >
              Team Account
            </a>
          </div>
        </div>
        <Counter />
        <div className={styles.Balance_section}>
          <section>
            <p>Balance</p>
            <p>-USDC</p>
          </section>{" "}
          <section>
            <p>Total</p>
            <p> 80,000 USDC </p>
          </section>
        </div>
        <TermsAndCondition />
        <Submit />
      </section>
    </div>
  );
}
