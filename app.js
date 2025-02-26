import React from "react";
import ReactDOM from "react-dom/client";


const data = [
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "418308",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "oeep8b6afbcw6eczqkf8",
        locality: "E Block",
        areaName: "Kidwai Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.2,
        totalRatingsString: "5.1K+",
        promoted: true,
        sla: {
          deliveryTime: 39,
          lastMileTravel: 5.6,
        },
        availability: {
          nextCloseTime: "2025-02-03 23:59:00",
          opened: true,
        },
      },
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "311304",
        name: "The Pizza Yum",
        cloudinaryImageId: "boxwna70bmcrcm9hnahc",
        locality: "Yashoda Nagar",
        areaName: "Kidwai Nagar Market",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Beverages"],
        avgRating: 4.0,
        totalRatingsString: "11K+",
        veg: true,
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.7,
        },
        availability: {
          nextCloseTime: "2025-02-04 00:00:00",
          opened: true,
        },
      },
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "703002",
        name: "Desi Tadka",
        cloudinaryImageId: "ee9592aa1cc103086a37aa05fc146ed9",
        locality: "Sector -1 factory area",
        areaName: "Ashok Nagar Harsh Nagar",
        costForTwo: "₹500 for two",
        cuisines: ["North Indian", "Chinese", "Pastas", "Salads"],
        avgRating: 4,
        parentId: "393990",
        totalRatingsString: "49",
        promoted: true,
        sla: {
          deliveryTime: 61,
          lastMileTravel: 8.9,
        },
        availability: {
          nextCloseTime: "2025-02-03 23:00:00",
          opened: true,
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
      },
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "497308",
        name: "Roti and Boti",
        cloudinaryImageId: "ng0klgnsfki2xro1pgwx",
        locality: "Yashoda Nagar",
        areaName: "Kidwai Nagar Market",
        costForTwo: "₹150 for two",
        cuisines: ["North Indian", "Snacks"],
        avgRating: 3.6,
        totalRatingsString: "32",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 1.7,
        },
        availability: {
          nextCloseTime: "2025-02-03 23:45:00",
          opened: true,
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
      },
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "86108",
        name: "Shri Bhojnalaya Restaurant & Sweets",
        cloudinaryImageId: "6a13f6db2fbd7485ceba7199ae0c9f57",
        locality: "Mirpur",
        areaName: "Vijay Nagar",
        costForTwo: "₹250 for two",
        cuisines: [
          "Sweets",
          "Chinese",
          "South Indian",
          "Bakery",
          "Snacks",
          "Desserts",
        ],
        avgRating: 4.4,
        totalRatingsString: "11K+",
        promoted: true,
        sla: {
          deliveryTime: 50,
          lastMileTravel: 8.9,
        },
        availability: {
          nextCloseTime: "2025-02-03 23:59:00",
          opened: true,
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹30",
        },
      },
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "857558",
        name: "Mom's Curry",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/28/a19e4b97-5cd8-4931-8c2e-608abe08e5eb_857558.jpg",
        locality: "Yashoda Nagar",
        areaName: "Chawla Market",
        costForTwo: "₹100 for two",
        cuisines: ["French", "Snacks", "Burgers"],
        avgRating: 3.8,
        totalRatingsString: "77",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 1.7,
        },
        availability: {
          nextCloseTime: "2025-02-04 00:00:00",
          opened: true,
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
      },
    },
  },

  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "991184",
        name: "Hot Pizza King",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/7/6/78cff6d0-9456-4216-909c-56d8d311241c_377c9729-c480-4c33-bae7-493b13b3aab0.jpg",
        locality: "Lal Bangla",
        areaName: "Lal Bangla",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        veg: true,
        parentId: "8966",
        avgRatingString: "4.1",
        totalRatingsString: "16",
        promoted: true,
        adTrackingId:
          "cid=24732286~p=0~adgrpid=24732286#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=991184~eid=90262a30-5287-4f5f-9a6a-8d6b2a5a43b0~srvts=1738576864281~collid=83631",
        sla: {
          deliveryTime: 48,
          lastMileTravel: 9.2,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "9.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-02-04 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "24732286",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=991184&source=collection&query=Pizza",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "875003",
        name: "Pizza Cafe",
        cloudinaryImageId:
          "FOOD_CATALOG/IMAGES/CMS/2024/8/5/18bca296-a814-45e6-b15a-ef2fe56acb76_80f2dd92-e013-4ddf-90dc-e6e30059d62f.jpg",
        locality: "Naubasta Galla mandi",
        areaName: "Chawla Market",
        costForTwo: "₹200 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        veg: true,
        parentId: "719",
        avgRatingString: "4.3",
        totalRatingsString: "42",
        promoted: true,
        adTrackingId:
          "cid=24699379~p=1~adgrpid=24699379#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=875003~eid=8bf2caed-d304-441f-a60d-db9d66766026~srvts=1738576864281~collid=83631",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-02-03 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "24699379",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=875003&source=collection&query=Pizza",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "1017055",
        name: "Domino's Pizza",
        cloudinaryImageId: "d3dcf25529b780071e99443e0fff16d2",
        locality: "Kidwai Nagar",
        areaName: "NAUBASTA",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.5,
        parentId: "2456",
        avgRatingString: "4.5",
        totalRatingsString: "34",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-02-03 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=1017055&source=collection&query=Pizza",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },

  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "113214",
        name: "Pizza Cave",
        cloudinaryImageId: "ih3lep6epevw8zpzyjto",
        locality: "Lal Bangla",
        areaName: "Lal Bangla",
        costForTwo: "₹200 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.4,
        parentId: "8184",
        avgRatingString: "4.4",
        totalRatingsString: "31K+",
        promoted: true,
        adTrackingId:
          "cid=24719239~p=7~adgrpid=24719239#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=113214~eid=6422a75f-c066-4b18-9a0f-e14e648a37c3~srvts=1738576864281~collid=83631",
        sla: {
          deliveryTime: 48,
          lastMileTravel: 9.5,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "9.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-02-03 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.9",
            ratingCount: "328",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "24719239",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=113214&source=collection&query=Pizza",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
]

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/cheese-burger-with-lettuce-and-cheese-2697ld.png?size=2"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const stylecard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { data } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime,address} =
    data.card.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.card.info.cloudinaryImageId
        }
      />
      <h3>{ address }</h3>
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>  
      <h4>{avgRating}</h4>
      <h4>RS:{costForTwo}</h4>
      <h4>{data.card.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="res-container">

       

        {data.map((t) => (
        
          <RestaurantCard data={t} />
        
        ))}

        {/* <RestaurantCard data={data[1]} />
        
        <RestaurantCard data={data[2]} />
        <RestaurantCard data={data[3]} />
        <RestaurantCard data={data[4]} />
        <RestaurantCard data={data[5]} />
        <RestaurantCard data={data[6]} />
        <RestaurantCard data={data[7]} />
        <RestaurantCard data={data[8]} />
        <RestaurantCard data={data[9]} /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
