const availableRooms = [
  {
    roomID: 1, // primary key of the room table ?
    type: "deluxe",
    name: "Deluxe Suite",
    bed: "One King Bed",
    view: "Hudson River View",
    areaSqFeet: 770,
    price: 1000,
    details: [
      {
        name: "Bedroom",
        description: "Comfortable and spacious bed with quality mattress and pillows with Flat-screen TV",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3p_50M9q-yVFTTcFszqJk8HgN-8nbXjXRMk69_MGtTg&s"
      },
      {
        name: "Kitchen",
        description: "Fully equipped kitchenette with appliances such as a stove, microwave, refrigerator, and dishwasher.",
        image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/12/17/0/1-340-2015_ChagasKitchen_c.JPG.rend.hgtvcom.966.1449.suffix/1418832463872.jpeg"
      },
      {
        name: "Bathroom",
        description: "Private bathroom with a shower & bathtub with Toiletries such as shampoo, conditioner and soap.",
        image: "https://www.thespruce.com/thmb/_VPskZY02V-oej8R-P_FEqSFBls=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/master-bathroom-design-ideas-4129362-hero-d896a889451341dfaa59c5b2beacf02d.jpg"
      }
    ],
    images: [
      {
        id: 1,
        name: "Bedroom",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3p_50M9q-yVFTTcFszqJk8HgN-8nbXjXRMk69_MGtTg&s'
      },
      {
        id: 2,
        name: "Living Area",
        image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/20/0/HUHH2018-Urban_Duplex-Penthouse-NYC_5.jpg.rend.hgtvcom.966.644.suffix/1524246223442.jpeg',
      },
      {
        id: 3,
        name: "Kitchen",
        image: 'https://www.brilliantkitchens.com.au/images/deluxe%20kitchen_pull-out%20pantries%20and%20undermount%20sink.jpg?crc=127099957',
      },
    ],
  },
  {
    roomID: 4,
    type: "junior",
    name: "Junior Suite",
    bed: "One King Bed",
    view: "City View",
    areaSqFeet: 420,
    price: 500,
    details: [
      {
        name: "Bedroom",
        description: "Comfortable and spacious bed with quality mattress and pillows with Flat-screen TV",
        image: "https://media.istockphoto.com/id/1148202428/photo/luxury-bedroom-interior.jpg?s=612x612&w=0&k=20&c=vZF8d7QvaXqljapoz9PbuQq2Xs9rTAWPi4K1wnKn7Bk="
      },
      {
        name: "Kitchen",
        description: "Fully equipped kitchenette with appliances such as a stove, microwave, refrigerator, and dishwasher.",
        image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/12/17/0/1-340-2015_ChagasKitchen_c.JPG.rend.hgtvcom.966.1449.suffix/1418832463872.jpeg"
      },
      {
        name: "Bathroom",
        description: "Private bathroom with a shower & bathtub with Toiletries such as shampoo, conditioner and soap.",
        image: "https://www.thespruce.com/thmb/_VPskZY02V-oej8R-P_FEqSFBls=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/master-bathroom-design-ideas-4129362-hero-d896a889451341dfaa59c5b2beacf02d.jpg"
      }
    ],
    images: [
      {
        id: 1,
        name: "Bedroom",
        image: "https://media.istockphoto.com/id/1148202428/photo/luxury-bedroom-interior.jpg?s=612x612&w=0&k=20&c=vZF8d7QvaXqljapoz9PbuQq2Xs9rTAWPi4K1wnKn7Bk=",
      },
      {
        id: 2,
        name: "Living Area",
        image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/6/24/0/IO_Kerrie-Kelly_Stylish-Retreat-06.jpg.rend.hgtvcom.966.644.suffix/1624556760070.jpeg",
      },
      {
        id: 3,
        name: "Kitchen",
        image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/12/17/0/1-340-2015_ChagasKitchen_c.JPG.rend.hgtvcom.966.1449.suffix/1418832463872.jpeg',
      },
    ],
  },
  {
    roomID: 5,
    type: "deluxe",
    name: "Deluxe Room",
    bed: "One Regular Bed",
    view: "Community Park View",
    areaSqFeet: 220,
    price: 175,
    details: [
      {
        name: "Bathroom",
        description: "Private bathroom with a shower & bathtub with Toiletries such as shampoo, conditioner and soap.",
        image: "https://www.thespruce.com/thmb/_VPskZY02V-oej8R-P_FEqSFBls=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/master-bathroom-design-ideas-4129362-hero-d896a889451341dfaa59c5b2beacf02d.jpg"
      }
    ],
    images: [
      {
        id: 1,
        name: "Bedroom",
        image: "http://www.hallamhotel.com/images/room.jpg",
      }
    ],
  },
];

export default availableRooms;