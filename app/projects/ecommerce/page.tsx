import Project, { TProject } from "@/components/project/Project";
import homepageImage from "@/public/ecommerce/homepage.png";
import productDetails1Image from "@/public/ecommerce/product-details-1.png";
import productDetails2Image from "@/public/ecommerce/product-details-2.png";
import searchPageImage from "@/public/ecommerce/search.png";
import contactImage from "@/public/ecommerce/contact-us.png";
import ordersImage from "@/public/ecommerce/orders.png";

const ecommerce_project: TProject = {
  project_name: "Ecommerce (University Project)",
  project_details: [
    "I picked this as my university dissertation so I could improve my skills in web development. For this project I went through a complete development life cycle; during which I learnt about the necessity of design. Having to go through multiple iterations before finding a design I was satisfied with.",
    "I created both the frontend and backend systems, as well as the PostgreSQL database. The frontend system uses Next.js, with the design utilising Tailwind CSS. The backend was created in Express. I opted to use TypeScript over JavaScript as I prefer a typed based language.",
    "Below is my plan that I set out for my dissertation.",
    "My idea is to create a fully comprehensive e-commerce platform. This means that I would create an online shopping platform, that will allow customers to create accounts, place orders and then track these orders, up until delivery is complete. While in the backend an inventory system keeps track of the total stock, and orders that have been placed. With an increasing number of purchases being made online I believe there’s a strong market for this platform to exist.",
    "The system will require two external dependencies:",
    [
      "Payment providers (due to the complex security required).",
      "Delivery couriers for delivering the physical products (interaction with delivery couriers will still exist, so that the delivery status can be tracked through the website).",
    ],
    " ",
    "The online shopping website will be how customers can purchase products and browse for items to buy. Customers can also interact with support straight through the website, using their customer account. A customer account won’t be required, and guest checkouts will be supported, but there’ll be an encouragement to create an account. If an account is created, but previous orders with the same email address have been placed before, these orders will be imported into the newly created account.",
    "    The online shopping platform will include an admin dashboard that can:",
    [
      "Disallow the purchase of each individual product (e.g., stock for a product exists, but a recall is preventing it from being sold)",
      "Change prices for products.",
      "Apply sales and discounts to individual products, product types or site wide.",
      "Promo codes for orders during special promotions",
    ],
    "There will also be a support dashboard that can manage ticket requests from users, acting as a chat message between the support workers and the customer so that matters can be resolved all in the website, it will include helpful features to speed up support requests, like easily being able to see a list of all the purchases a user has made. ",
    " ",
    "The inventory management system will be a separate system, with no ties to the online shopping website. When an order is placed, the online website will interact with the inventory management system. This is a system for warehouses to keep track of stock and will adjust the stock as required. This would be an internal system that the customer would have no knowledge of. The plan is to build this as a web application, with the benefits of any processing power being offset to the cloud, reducing hardware costs, downtime and maintenance. I’d also like to make this an app so that warehouse workers won’t need to constantly return to computers when processing stock. This should increase productivity by eliminating the idle time when travelling to computers, it will also be more convenient for the warehouse workers.",
    "Preliminarily the management system will keep track of:",
    [
      "All products that are available",
      "Number of products that are available (Not currently in a customer’s order)",
      "Number of products that are reserved (In a customer’s order, but not checked out)",
      "Orders that have been placed, with a current status and delivery information.",
    ],
    " ",
    "The inventory management system will be designed / developed in a way that allows it to be incorporated into existing websites, it will have no dependency on the online shopping website I’ll create. This allows it to be sold as a separate product to businesses to increase its appeal. But if desired, businesses will be able to purchase the complete package, giving them a website that can take orders, and a system for their warehouses to use.",
  ],
  image_details: {
    srcs: [
      { alt: "Home page", img: homepageImage },
      { alt: "Product details", img: productDetails1Image },
      { alt: "Product details continued", img: productDetails2Image },
      { alt: "Search page", img: searchPageImage },
      { alt: "Contact us page", img: contactImage },
      { alt: "Orders page", img: ordersImage },
    ],
    animated: false,
    height: 1536,
    width: 1536,
  },
  project_btns: {
    github_links: [
      {
        display: "Front end",
        link: "https://github.com/AmzingTobias/chop-front-end",
      },
      {
        display: "Back end",
        link: "https://github.com/AmzingTobias/chop-back-end",
      },
    ],
  },
  use_row: false,
};

const EcommerceProjectPage = () => {
  return (
    <main className="w-full">
      <Project
        project_name={ecommerce_project.project_name}
        image_details={ecommerce_project.image_details}
        project_details={ecommerce_project.project_details}
        project_btns={ecommerce_project.project_btns}
        use_row={false}
      />
    </main>
  );
};

export default EcommerceProjectPage;