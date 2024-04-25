import CarouselBox from "../CarouselBox";
import "./index.css";

const carouselList = [
  {
    id: 1,
    heading: "State of Markets",
    description:
      "The market Captalisation of indian stocks crossed USS4.5 trillion in january",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713970648/2-21-23-Cannabit-new-legal-markets-1024x1024_wkox78.jpg",
  },
  {
    id: 2,
    heading: "The Central Capex Surge",
    description:
      "The last few years have seen avery substantial step up in captial",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713970718/main-1901_b48jdn.jpg",
  },
  {
    id: 3,
    heading: "Direct Taxes and Business Cycle",
    description:
      "The share of direct taxes in total tax collections of the Central government ",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713970781/6_pfaixq.svg",
  },
  {
    id: 4,
    heading: "Banking Monitor",
    description:
      "Credit growth has remained broadly stable in recent weeks at just",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713970825/online_banking-economy-bank-computer-monitor-512_lul8ku.png",
  },
  {
    id: 5,
    heading: "Bitcoin",
    description: "A Bitcoin trading platform is only one component of Kraken.",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713970859/71cu980UfuL._AC_UF894_1000_QL80_DpWeblab__xkjquj.jpg",
  },
  {
    id: 6,
    heading: "Bitmart",
    description: "Massive variety of 1000+ cryptocurrencies for trading.",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713970941/q-5m8NrzoaAuTcCDK9x6LSl-QlUegzG9Bt36b_HXMy_XnAjD-2T9mGtkbHQRkq7G264_wh4yrh.png",
  },
  {
    id: 7,
    heading: "Cash App",
    description: "Money transfer service that focuses on smartphones. ",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713970979/GACEmIbWAAAYUEO_htaslo.jpg",
  },
  {
    id: 8,
    heading: "US Market",
    description:
      "US Business Activity Growth Slows In April. The latest rise in output was...",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713971074/NYSE-kte--621x414_LiveMint_gxamuu.jpg",
  },
  {
    id: 9,
    heading: "Adani Stocks",
    description:
      "Adani stocks now have prominent investor base.Amid intense scrutiny...",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713971130/649afcb5867d960019d93090_nj18ym.jpg",
  },
  {
    id: 10,
    heading: "Rupee Trades",
    description: "Rupee trades in narrow range against US dollar..",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713971208/1681255278640_lqlk9v.jpg",
  },
  {
    id: 11,
    heading: "Sensex",
    description: "Sensex, Nifty inch higher on firm global market trends",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713971258/f005f06e-5a63-43de-a6e5-649734d9505d_2-sixteen_nine_fm71qr.jpg",
  },
  {
    id: 12,
    heading: "USFDA",
    description: "Zydus unit gets 10 observations from USFDA after inspection",
    image:
      "https://res.cloudinary.com/dv9pez6sa/image/upload/v1713971306/lupin-gets-usfda-nod-for-generic-cancer-treatment-drug_pab1cg.jpg",
  },
];
const MoreButtons = () => {
  return (
    <div className='list-container'>
      {carouselList.map((each, index) => (
        <CarouselBox
          key={index}
          heading={each.heading}
          image={each.image}
          description={each.description}
        />
      ))}
    </div>
  );
};
export default MoreButtons;
