import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="container hero --flex-dir-column">
        <div className="hero-text">
          <h1>The fastest way to bnuy and sell Bitcoin</h1>
          <p>
            One of the key features of cryptocurrencies is the use of a distributed ledger technology called a blockchain. The blockchain
            is a public ledger of all transactions that have ever been made in the cryptocurrency network. Each block in the chain
            contains a cryptographic hash of the previous block, timestamp, and transaction data. This makes the blockchain tamper-proof
            and highly secure...
          </p>
          <a href="#" className="--btn --btn-primary">
            Get Started
          </a>
        </div>
        <div className="hero-img">
          <Image src="/crypto.png" alt="mobile-crypto" width="225" height="450" priority />
        </div>
      </div>
    </section>
  );
};

export default Hero;
