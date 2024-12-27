import React from "react";
import { FaUser, FaGavel, FaEnvelope, FaDollarSign, FaFileInvoice, FaRedo } from "react-icons/fa";

export const steps = [
  {
    icon: React.createElement(FaUser),
    title: "User Registration",
    description:
      "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
  },
  {
    icon: React.createElement(FaGavel),
    title: "Role Selection",
    description:
      'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
  },
  {
    icon: React.createElement(FaEnvelope),
    title: "Winning Bid Notification",
    description:
      "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
  },
  {
    icon: React.createElement(FaDollarSign),
    title: "Commission Payment",
    description:
      "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
  },
  {
    icon: React.createElement(FaFileInvoice),
    title: "Proof of Payment",
    description:
      "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
  },
  {
    icon: React.createElement(FaRedo),
    title: "Reposting Items",
    description:
      "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
  },
];

export const values = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
  },
  {
    id: 3,
    title: "Community",
    description:
      "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
  },
  {
    id: 4,
    title: "Customer Focus",
    description:
      "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
  },
];

export const howItWorks = [
  { title: "Post Items", description: "Auctioneer posts items for bidding." },
  { title: "Place Bids", description: "Bidders place bids on listed items." },
  {
    title: "Win Notification",
    description: "Highest bidder receives a winning email.",
  },
  {
    title: "Payment & Fees",
    description: "Bidder pays; auctioneer pays 5% fee.",
  },
];
