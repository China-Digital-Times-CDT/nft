// All Section data goes here

let SectionData = {
  // Hero data three
  en: {
    newlylisted: 'Newly Listed',
    all: 'All',
    By: 'By',
    Price: 'Price',
    CurrentBid: 'Current Bid',
    PlaceBid: 'Place Bid',
    howitworks: 'How it works',
    becausetxt: `
    <p>We create archives for the valuable content from Chinese internet especially those content being <a href='#'>censored</a>.   We won&#39;t regard everything as valuable work unless it&#39;s proved to have artistic and engineering values, and get appraised by the community. </p>
    <h2 id="remuneration-pie">Remuneration Pie</h2>
    <p>We have proposed a general structure to distribute the income of a work into different groups of participants. </p>
    <p>Infrastructure: 10%
    Marketers: 20%
    Contributors: 30%
    Authors: 40%</p>
    <p>The reference can be adjusted depends on different projects. </p>
    <h2 id="types-of-projects">Types of projects</h2>
    <ol>
    <li>Evergreen: projects will never end but keep growing, we will have patrons to be named and present certificates</li>
    <li>NFT: projects generates a one-time work for publication</li>
    <li>Version-by-version: projects that release different version</li>
    </ol>
    <h2 id="why-using-git-">Why using Git?</h2>
    <p>We use Github.com or other similar versioning service(together with community) to engage engineering-savvy people 
    to particpate different projects because they tend to use such tools with consensus. Every work in our gallery will
    have a github repository(repo) as an open source to invite community memebers to witness or directly participate.</p>
    `
    ,
    mintnft: {
      contributors: 'Contributors',
      artimage: 'art image',
      username: 'UserName',
      repourl: 'Repo_Url',
      price: 'Price',
      title: 'Title',
      description: 'Description',
      royalties: 'Royalties',
      suggestion: ' Suggested: 0, 10%, 20%, 30%. Maximum is 70%',
      createnew: 'Create new NFT collection'
    },
    invoicedetails: {
      ordernumber: 'Your order number',
      total: 'Your order total is',
      valid: ', and will be valid for',
      time: '9 minutes',
      des1: '⚠ Once paid, please stay on this page until we confirm your order and present you with your vouchers',
      des2: 'You may want to bookmark this page for your records',
      paywith: 'Pay with Lightning',
      copyclipboard: '📋 Copy to Clipboard',
      openwallet: '📤 Open in Wallet'
    },
    productdetails: {
      certificate: 'Certficate',
      artifact: 'Artifacts(Files)',
      cover: 'Cover',
      title: 'Chinese Wailing Wall for Doctor Li',
      offer: 'Offer',
      historyoffer: 'History offers:',
      history1: '2022/05/01 Listed by XXXX for 8000',
      history2: '2022/03/28 Transfered to XXXX with 7000 Sat',
      history3: '2021/08/01 Minted with 1000 Sat',
    },
    products: [
      {
        id: 1,
        img: require("@/images/thumb/nft-1.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "One Tribe Black Edition",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "ZeniconStudio",
        authorLink: "author",
        name: "art",
        price: "14.20",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "1.32 ETH",
        category: "artworks",
      },
      {
        id: 2,
        img: require("@/images/thumb/nft-22.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "Operation Jade Fury",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "CanvaNetwork",
        authorLink: "author",
        name: "art",
        price: "10.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "0.32 ETH",
        category: "artworks",
      },
      {
        id: 3,
        img: require("@/images/thumb/nft-4.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "Unboxing The Compass",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "MoveNetwork",
        authorLink: "author",
        name: "music",
        price: "10.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "1.30 ETH",
        category: "music",
      },
      {
        id: 4,
        img: require("@/images/thumb/nft-5.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "Rendering by the Water",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "RukiStudio",
        authorLink: "author",
        name: "music",
        price: "13.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "2.30 ETH",
        category: "music",
      },
      {
        id: 5,
        sort: "recent",
        img: require("@/images/thumb/nft-6.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "Divine Opulence",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "DvisionNetwork",
        authorLink: "author",
        name: "collectibles",
        price: "8.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "1.44 ETH",
        category: "collectibles",
      },
      {
        id: 6,
        img: require("@/images/thumb/nft-7.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "Sacral Metatron Cube",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "KamranMedia",
        authorLink: "author",
        name: "collectibles",
        price: "11.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "1.33 ETH",
        category: "collectibles",
      },
      {
        id: 7,
        img: require("@/images/thumb/nft-8.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "Girl warming up to a bed acrobat",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "JisanMedia",
        authorLink: "author",
        name: "metaverses",
        price: "10.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "2.33 ETH",
        category: "metaverses",
      },
      {
        id: 8,
        img: require("@/images/thumb/nft-3.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "Women Eyes Modern Art",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "RifiUnited",
        authorLink: "author",
        name: "metaverses",
        price: "12.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "3.33 ETH",
        category: "metaverses",
      },
    ],
    footerData: {
      content: "The world's first and largest digital marketplace for CDToken.",
      footerList: [
        {
          id: 1,
          title: 'CDTokenEnglish',
          navList: [
            {
              title: 'explore',
              path: 'explore'
            }
          ]
        },
        {
          id: 2,
          title: 'My Account',
          navList: [
            {
              title: 'Profile',
              path: 'profile'
            }
          ]
        },
        {
          id: 3,
          title: 'Company',
          navList: [
            {
              title: 'Blog',
              path: 'blog'
            },
            {
              title: 'Contact',
              path: 'contact'
            },
            {
              title: 'Career',
              path: 'career'
            },
          ]
        }
      ],
      footerListTwo: [
        {
          title: 'Explore',
          path: 'explore'
        },
        {
          title: 'Activity',
          path: 'activity'
        },
        {
          title: 'Login',
          path: 'login'
        }
      ]
    },
    usrActivity: {
      youractivity: ' Your Activity',
      adam: "adam",
      Bob: "Bob",
      Alice: "Alice",
      Carol: "Carol",
      dateText: "4d ago",
      title1: 'received upvote in github issues <a href="item-details" class="btn-link fw-medium">#5543</a>',
      title2: 'just minted <a href="item-details" class="btn-link fw-medium">a new NFT</a>based on github discussion <a href="item-details" class="btn-link fw-medium">#5543</a>',
      title3: 'purchased a listing <a href="item-details" class="btn-link fw-medium">#A2CE3</a> for CDT 3000',
      title4: 'Carl commit merged into repo <a href="item-details" class="btn-link fw-medium">#7243</a>',
    },

    streamData: [
      {
        id: 4,
        name: "Adam",
        img: require("@/images/thumb/avatar-1.jpg"),
        title:
          'received upvote in github issues <a href="item-details" class="btn-link fw-medium">#5543</a>',
        dateText: "4d ago",
      },
      {
        id: 3,
        name: "Bob",
        img: require("@/images/thumb/avatar-2.jpg"),
        title:
          'just minted <a href="item-details" class="btn-link fw-medium">a new NFT</a>based on github discussion <a href="item-details" class="btn-link fw-medium">#5543</a>',
        dateText: "4d ago",
      },
      {
        id: 2,
        name: "Alice",
        img: require("@/images/thumb/avatar-3.jpg"),
        title:
          'purchased a listing <a href="item-details" class="btn-link fw-medium">#A2CE3</a> for CDT 3000',
        dateText: "4d ago",
      },
      {
        id: 1,
        name: "Carol",
        img: require("@/images/thumb/avatar-3.jpg"),
        title:
          'Carl commit merged into repo <a href="item-details" class="btn-link fw-medium">#7243</a>',
        dateText: "4d ago",
      },
    ],

    heroDataThree: {
      title: '404 Economy: Preserve valuable information that censors dont want us to see',
      content: 'CDToken, NFT Marketplace without any technical knowledge'
    },
    copyTitle: 'Copyright © 2022 CDToken.',
    // Header data
    headerData: {
      btnText: 'Connect Wallet',
      inputPlaceholderText: 'Search item here...',
      menuList: {
        title: 'Home',
        path: '/',
      },
      menuList2: {
        title: 'How it works',
        path: '/how'
      },
      menuList3: {
        title: 'Gallery',
        path: 'explore'
        // navList: [
        //   {
        //     id: 1,
        //     title: 'Newly listed',
        //     path: '/explore'
        //   },
        //   {
        //     id: 2,
        //     title: 'Top valued',
        //     path: '/topvalued'
        //   },
        // ]
      },
      menuList4: {
        title: 'Login',
        path: '/login'

        // navList: [
        //   {
        //     id: 1,
        //     title: 'My wallet*',
        //     path: '/dashboard'
        //   },
        //   {
        //     id: 2,
        //     title: 'Mint NFT*',
        //     path: '/mintnft'
        //   },
        // ]
      },
      menuList5: {
        title: 'My Panel',
        navList: [
          {
            id: 1,
            title: 'My wallet*',
            path: '/dashboard'
          },
          {
            id: 2,
            title: 'Mint NFT*',
            path: '/mintnft'
          },
          {
            id: 3,
            title: 'Log out',
            path: '/'
          },
        ]
      }
    },
    // Hero btn data
    btnDataFour: [
      {
        btnClass: 'btn-lg btn-grad',
        title: 'Contribute',
        path: 'login',
        external: false
      },
      {
        btnClass: 'btn-lg btn-outline-dark',
        title: 'Community',
        path: 'https://github.com/China-Digital-Times-CDT/nft/discussions',
        external: true

      }
    ],
    btnDataHome: [
      {
        title: 'Bid it'
      },
      { title: 'Community', }
    ],
    // footer data

    loginData: {
      img: require('@/images/thumb/remote.png'),
      emailaddress: 'Email address',
      password: 'Password',
      rememberme: 'Remember me',
      forgotpassword: 'Forgot Password',
      orloginwidth: '- or login with -',
      title: 'Welcome',
      subTitle: '',
      btnText: 'Login Now',
      haveAccountText: "Don't have an account",
      btnTextTwo: 'Sign Up',
      btnTextLink: 'register',

      btns: [
        {
          title: 'Github',
          btnClass: 'bg-cyan-100 text-cyan t-btn',
          icon: 'ni-github',
          path: 'dashboard'
        },]
    },
    // register data
    registerData: {
      img: require('@/images/thumb/remote-2.png'),
      title: 'Sign Up',
      subTitle: 'Fill up the below fields to create an account',
      termText: 'By signing up, you agree to our Terms and conditions and Privacy Policy',
      btnText: 'Create an Account',
      haveAccountText: "Already have an account",
      btnTextTwo: 'Login',
      btnTextLink: 'login',
      btns: [
        {
          title: 'Github',
          btnClass: 'bg-cyan-100 text-cyan t-btn',
          icon: 'ni-github',
          path: 'github.com/login/oauth/'
        },]
    },
    userActivityItems: {
      mainTitle: 'Activity',
      allData: [
        {  //Adam received upvote in github issues #2343,   Bob just minted a new NFT based on github discussion #5343,Alice purchased a listing #A2CE3 for CDT 3000
          id: 1,
          title: 'Adam',
          subTitle1: 'received upvote in github issues',
          subTitle2: '',
          newNFT: '',
          issueLink: '#5343',
          nftItem: '',
          repoLink: '',
          img: require('@/images/thumb/avatar-1.jpg'),
          timeText: '07/06/2022, 12:40'
        },
        {  //Adam received upvote in github issues #2343,   Bob just minted a new NFT based on github discussion #5343,Alice purchased a listing #A2CE3 for CDT 3000
          id: 1,
          title: 'Adam',
          subTitle1: 'received upvote in github issues',
          subTitle2: '',
          newNFT: '',
          issueLink: '#2343',
          nftItem: '',
          repoLink: '',
          img: require('@/images/thumb/avatar-1.jpg'),
          timeText: '05/07/2022, 12:40'
        },
        {
          id: 2,
          title: 'Bob',
          subTitle1: 'just minted',
          subTitle2: 'based on github discussion',
          newNFT: 'a new NFT',
          issueLink: '#5343',
          nftItem: '',
          repoLink: '',
          img: require('@/images/thumb/avatar-2.jpg'),
          timeText: '05/05/2022, 11:34'
        },
        {
          id: 3,
          title: 'Alice',
          subTitle1: 'purchased a listing',
          subTitle2: 'for CDT 3000',
          newNFT: '',
          issueLink: '',
          nftItem: '#A2CE3',
          repoLink: '',
          img: require('@/images/thumb/avatar-3.jpg'),
          timeText: '05/05/2022, 11:31'
        },
        {
          id: 4,
          title: 'Carol',
          subTitle1: 'Carol’s commit merged into repo',
          subTitle2: '',
          newNFT: '',
          issueLink: '',
          nftItem: '',
          repoLink: '#7234',
          img: require('@/images/thumb/avatar-3.jpg'),
          timeText: '05/04/2022, 11:34'
        },
      ],
    },
    createSingleData: {
      btnText: 'Manage collectible type',
      path: 'create',
      title: 'Create single collectible'
    },
    // payment method data
    paymentMethodData: {
      title: 'Dashboard',
      paymentMethodTabNav: [
        {
          id: 1,
          isActive: 'active',
          title: 'Balances',
          slug: 'balances-tab',
          bsTarget: '#balances'
        },

      ],
      // edit profile tab mobile
      paymentMethodTabNavMobile: [
        {
          id: 1,
          isActive: 'active',
          title: 'Balances',
          slug: 'balances-tab-mobile',
          bsTarget: '#balances-mobile'
        },
      ],
    },


    // prepaid-eth data
    prepaidData: {
      title: 'ETH Balance',
      content: 'Balances can be withdrawn in ETH at anytime',
      contentTwo: 'To increase your balance, send ETH to your deposit address below. ETH will be valued at USD market value at time of purchase. Gas fees will be subtracted from withdrawal amounts.',
      depositaddress: 'Deposit Address',
      donotsend: 'Do not send Nifties to this address',
      copy: 'copy',
      newdeposits: 'New deposits will be credited after 6 confirmations',
      withdraw: 'Withdraw',
      Mintnewwork: 'Mint new work',
      balances: [
        {
          id: 1,
          title: 'Balance',
          price: '2 ETH',
          priceTwo: '$330.00 USD'
        },
        {
          id: 2,
          title: 'Holds',
          price: '2 ETH',
          priceTwo: '$330.00 USD'
        }
      ]
    },
    purchaseAndSaleData: {
      mainTitle: 'Your Activity',
      purchaseData: [
        {
          id: 1,
          title: 'You received <a href="item-details" class="btn-link fw-medium">issue #2343</a> from github',
          dateText: '4d ago'
        },
        {
          id: 2,
          title: 'You just minted <a href="item-details" class="btn-link fw-medium">a new NFT</a> github discusstion<a href="#" class="btn-link fw-medium">#5343</a>',
          dateText: '5d ago'
        },
        {
          id: 3,
          title: 'You purchased a listing <a href="item-details" class="btn-link fw-medium">#A2E3</a> for CDT 3000',
          dateText: '5d ago'
        },
        {
          id: 4,
          title: 'You raied Pull Request <a href="item-details" class="btn-link fw-medium">#3653</a>',
          dateText: '5d ago'
        },
        {
          id: 5,
          title: 'You purchased a listing <a href="item-details" class="btn-link fw-medium">#A2D6</a> for CDT 3000',
          dateText: '6d ago'
        },
        {
          id: 6,
          title: 'You just minted <a href="item-details" class="btn-link fw-medium">a new NFT</a> github discusstion<a href="#" class="btn-link fw-medium">#5343</a>',
          dateText: '6d ago'
        },
        {
          id: 7,
          title: 'You bought <a href="item-details" class="btn-link fw-medium">Le Anime</a> from <a href="#" class="btn-link fw-medium">Alex</a> for <span class="fw-medium">$12.00</span>',
          dateText: '6d ago'
        },
        {
          id: 8,
          title: 'You just minted <a href="item-details" class="btn-link fw-medium">a new NFT</a> github discusstion<a href="#" class="btn-link fw-medium">#5343</a>',
          dateText: '7d ago'
        },

      ],
    },

    // collection data
    collectionData: {
      title: 'Top Valued',
      collectionList: [
        {
          id: 1,
          title: 'Save Hong Kong Online',
          price: '$26,220',
          img: require('@/images/thumb/nft-item1.png'),
          itemNum: '23445',
          path: '',
          bidding: '<a class="btn-link fw-medium">Current Bidding:</a> 2000 CDT (or 0.01 BTC, or 200 USD) (?)',
          created: '<a class="btn-link fw-medium">Created:</a> 2021-07-06by(<a class="btn-link fw-medium">Adam</a>)',
          distribution: '<a class="btn-link fw-medium">Distribution:</a> (10% to marketers, 20% CDT, 30% to community, 40% authors fund)',
          description: '<a class="btn-link fw-medium">Description:</a> On December 30th, 2019, before the world was aware of the threat of COVID-19, a Chinese doctor Li Wenliang issued the first warning about the deadly coronavirus and then received a letter of admonition from the police...'
        },
        {
          id: 2,
          title: 'Censorship Graph',
          price: '$24,497',
          img: require('@/images/thumb/nft-item2.png'),
          itemNum: '23446',
          path: '',
          bidding: '<a class="btn-link fw-medium">Current Bidding:</a> 2000 CDT (or 0.01 BTC, or 200 USD) (?)',
          created: '<a class="btn-link fw-medium">Created:</a> 2021-07-06by(<a class="btn-link fw-medium">Adam</a>)',
          distribution: '<a class="btn-link fw-medium">Distribution:</a> (10% to marketers, 20% CDT, 30% to community, 40% authors fund)',
          description: '<a class="btn-link fw-medium">Description:</a> On December 30th, 2019, before the world was aware of the threat of COVID-19, a Chinese doctor Li Wenliang issued the first warning about the deadly coronavirus and then received a letter of admonition from the police...'
        },
        {
          id: 3,
          title: 'The Voices of May',
          price: '$24,497',
          img: require('@/images/thumb/nft-item3.png'),
          itemNum: '23447',
          path: '',
          bidding: '<a class="btn-link fw-medium">Current Bidding:</a> 2000 CDT (or 0.01 BTC, or 200 USD) (?)',
          created: '<a class="btn-link fw-medium">Created:</a> 2021-07-06by(<a class="btn-link fw-medium">Adam</a>)',
          distribution: '<a class="btn-link fw-medium">Distribution:</a> (10% to marketers, 20% CDT, 30% to community, 40% authors fund)',
          description: '<a class="btn-link fw-medium">Description:</a> On December 30th, 2019, before the world was aware of the threat of COVID-19, a Chinese doctor Li Wenliang issued the first warning about the deadly coronavirus and then received a letter of admonition from the police...'
        },
      ]
    },
    logoData: [
      {
        imgClass: 'logo-dark',
        style: "width:500px; height:200px",
        logoImg: require('@/images/logo-black.jpg'),
        path: '/home'
      },
      {
        imgClass: 'logo-light',
        logoImg: require('@/images/logo-white.png'),
        style: "width: 500px; height:200px;",
        path: '/home'
      }
    ],


  },
  ja: {
    newlylisted: '新上市',
    all: '全部的',
    By: '憑',
    Price: '價錢',
    CurrentBid: '現價投標',
    PlaceBid: '招標',
    howitworks: '工作原理',
    becausetxt: '我们的社区邀请、收集和整理在中国互联网上被审查的内容',
    mintnft: {
      contributors: '貢獻者',
      artimage: '藝術形象',
      username: '用戶名',
      repourl: 'Repo_Url',
      price: '價錢',
      title: '職稱',
      description: '說明',
      royalties: '特許權使用費',
      suggestion: '建議:0，10%，20%，30%。 最高稅率爲七成',
      createnew: '創建新的 NFT 集合'
    },
    invoicedetails: {
      ordernumber: '您的訂單編號',
      total: '您的訂單總數是',
      valid: ', 及有效期爲12年。',
      time: '9分鐘',
      des1: '⚠ 付款後，請保留本頁，直到我們確認您的訂單並出示您的憑單爲止。',
      des2: '您可能想將此頁簽入到您的記錄中',
      paywith: '閃電支付',
      copyclipboard: '📋 複製到剪貼板',
      openwallet: '📤 打開錢包'
    },
    productdetails: {
      certificate: '證件',
      artifact: '文物(檔案)',
      cover: '封面說明',
      title: '李醫生的中國哭牆',
      offer: '發盤',
      historyoffer: '歷史提供:',
      history1: '2022/05/01由XXXX以8000英鎊計列',
      history2: '2022/03/28調至XXXX,星期六有7000人',
      history3: '2021/08/01以1000個星期六鑄造',
    },

    products: [
      {
        id: 1,
        img: require("@/images/thumb/nft-1.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "一族黑色版",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "ZeniconStudio",
        authorLink: "author",
        name: "art",
        price: "14.20",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "1.32 ETH",
        category: "artworks",
      },
      {
        id: 2,
        img: require("@/images/thumb/nft-22.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "玉怒行動",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "CanvaNetwork",
        authorLink: "author",
        name: "art",
        price: "10.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "0.32 ETH",
        category: "artworks",
      },
      {
        id: 3,
        img: require("@/images/thumb/nft-4.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "打開指南針",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "MoveNetwork",
        authorLink: "author",
        name: "music",
        price: "10.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "1.30 ETH",
        category: "music",
      },
      {
        id: 4,
        img: require("@/images/thumb/nft-5.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "水邊的渲染",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "RukiStudio",
        authorLink: "author",
        name: "music",
        price: "13.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "2.30 ETH",
        category: "music",
      },
      {
        id: 5,
        sort: "recent",
        img: require("@/images/thumb/nft-6.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "水邊渲染",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "DvisionNetwork",
        authorLink: "author",
        name: "collectibles",
        price: "8.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "1.44 ETH",
        category: "collectibles",
      },
      {
        id: 6,
        img: require("@/images/thumb/nft-7.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "薩克拉瑪塔特龍魔方",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "KamranMedia",
        authorLink: "author",
        name: "collectibles",
        price: "11.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "1.33 ETH",
        category: "collectibles",
      },
      {
        id: 7,
        img: require("@/images/thumb/nft-8.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "女孩向牀上的雜技演員熱身",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "JisanMedia",
        authorLink: "author",
        name: "metaverses",
        price: "10.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "2.33 ETH",
        category: "metaverses",
      },
      {
        id: 8,
        img: require("@/images/thumb/nft-3.png"),
        imgLg: require("@/images/thumb/nft-lg2.jpg"),
        title: "女人眼中的現代藝術",
        content:
          'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
        author: "RifiUnited",
        authorLink: "author",
        name: "metaverses",
        price: "12.00",
        metaText: "Not for sale",
        metaTextTwo: "500 editions",
        metaTextThree:
          'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
        currentPrice: "3.33 ETH",
        category: "metaverses",
      },
    ],
    footerData: {
      content: "世界上第一個也是最大的CD Token數碼市場。",
      footerList: [
        {
          id: 1,
          title: 'CD託肯',
          navList: [
            {
              title: '探尋',
              path: 'explore'
            }
          ]
        },
        {
          id: 2,
          title: '我的帳戶',
          navList: [
            {
              title: '概況',
              path: 'profile'
            }
          ]
        },
        {
          id: 3,
          title: '連隊',
          navList: [
            {
              title: '網誌',
              path: 'blog'
            },
            {
              title: '聯絡人',
              path: 'contact'
            },
            {
              title: 'Career',
              path: '職業'
            },
          ]
        }
      ],
      footerListTwo: [
        {
          title: 'Explore',
          path: 'explore'
        },
        {
          title: 'Activity',
          path: 'activity'
        },
        {
          title: 'Login',
          path: 'login'
        }
      ]
    },
    usrActivity: {
      youractivity: '你的活動',
      adam: "阿達",
      Bob: "鮑勃",
      Alice: "愛麗絲",
      Carol: "卡羅爾",
      dateText: "四天前",
      title1: '在"github"問題上獲得上票 <a href="item-details" class="btn-link fw-medium">#5543</a>',
      title2: '剛鑄造的 <a href="item-details" class="btn-link fw-medium">新版NFT</a>基於github的討論 <a href="item-details" class="btn-link fw-medium">#5543</a>',
      title3: '購買目錄 <a href="item-details" class="btn-link fw-medium">#A2CE3</a> CDT3000用',
      title4: 'Carl committee 合併爲 repo <a href="item-details" class="btn-link fw-medium">#7243</a>',
    },

    heroDataThree: {
      title: '404 Economy: Preserve valuable information that censors dont want us to see',
      content: 'CDToken, NFT Marketplace without any technical knowledge'
    },
    copyTitle: '版權所有©2022 CD Token。',
    // Header data
    headerData: {
      btnText: 'Connect Wallet',
      inputPlaceholderText: 'Search item here...',
      menuList: {
        title: '主頁',
        path: '/',
      },
      menuList2: {
        title: '工作原理',
        path: '/how'
      },
      menuList3: {
        title: '畫廊',
        path: 'explore'
        // navList: [
        //   {
        //     id: 1,
        //     title: 'Newly listed',
        //     path: '/explore'
        //   },
        //   {
        //     id: 2,
        //     title: 'Top valued',
        //     path: '/topvalued'
        //   },
        // ]
      },
      menuList4: {
        title: '登入',
        path: '/login'

        // navList: [
        //   {
        //     id: 1,
        //     title: 'My wallet*',
        //     path: '/dashboard'
        //   },
        //   {
        //     id: 2,
        //     title: 'Mint NFT*',
        //     path: '/mintnft'
        //   },
        // ]
      },
      menuList5: {
        title: '我的小組',
        navList: [
          {
            id: 1,
            title: '我的錢包*',
            path: '/dashboard'
          },
          {
            id: 2,
            title: '薄荷綠 NFT*',
            path: '/mintnft'
          },
          {
            id: 3,
            title: '註銷',
            path: '/'
          },
        ]
      }
    },
    // Hero btn data
    btnDataFour: [
      {
        btnClass: 'btn-lg btn-grad',
        title: 'Contribute',
        path: 'login',
        external: false
      },
      {
        btnClass: 'btn-lg btn-outline-dark',
        title: 'Community',
        path: 'https://github.com/China-Digital-Times-CDT/nft/discussions',
        external: true

      }
    ],
    btnDataHome: [
      {

        title: '叫吧'

      },
      { title: '社區', }

    ],
    // footer data

    loginData: {
      img: require('@/images/thumb/remote.png'),
      title: '歡迎!',
      emailaddress: '電子郵件地址',
      password: '口令',
      rememberme: '記得我',
      forgotpassword: '記住我',
      orloginwidth: '- 或登入「稅務易」帳戶。 -',
      subTitle: '',
      btnText: '立即登入',
      haveAccountText: "沒有帳戶",
      btnTextTwo: '報名',
      btnTextLink: 'register',
      btns: [
        {
          title: 'Github',
          btnClass: 'bg-cyan-100 text-cyan t-btn',
          icon: 'ni-github',
          path: 'dashboard'
        },]
    },
    // register data
    registerData: {
      img: require('@/images/thumb/remote-2.png'),
      title: 'Sign Up',
      subTitle: 'Fill up the below fields to create an account',
      termText: 'By signing up, you agree to our Terms and conditions and Privacy Policy',
      btnText: 'Create an Account',
      haveAccountText: "Already have an account",
      btnTextTwo: 'Login',
      btnTextLink: 'login',
      btns: [
        {
          title: 'Github',
          btnClass: 'bg-cyan-100 text-cyan t-btn',
          icon: 'ni-github',
          path: 'github.com/login/oauth/'
        },]
    },
    userActivityItems: {
      mainTitle: '活動',
      allData: [
        {  //Adam received upvote in github issues #2343,   Bob just minted a new NFT based on github discussion #5343,Alice purchased a listing #A2CE3 for CDT 3000
          id: 1,
          title: 'Adam',
          subTitle1: 'received upvote in github issues',
          subTitle2: '',
          newNFT: '',
          issueLink: '#5343',
          nftItem: '',
          repoLink: '',
          img: require('@/images/thumb/avatar-1.jpg'),
          timeText: '07/06/2022, 12:40'
        },
        {  //Adam received upvote in github issues #2343,   Bob just minted a new NFT based on github discussion #5343,Alice purchased a listing #A2CE3 for CDT 3000
          id: 1,
          title: 'Adam',
          subTitle1: 'received upvote in github issues',
          subTitle2: '',
          newNFT: '',
          issueLink: '#2343',
          nftItem: '',
          repoLink: '',
          img: require('@/images/thumb/avatar-1.jpg'),
          timeText: '05/07/2022, 12:40'
        },
        {
          id: 2,
          title: 'Bob',
          subTitle1: 'just minted',
          subTitle2: 'based on github discussion',
          newNFT: 'a new NFT',
          issueLink: '#5343',
          nftItem: '',
          repoLink: '',
          img: require('@/images/thumb/avatar-2.jpg'),
          timeText: '05/05/2022, 11:34'
        },
        {
          id: 3,
          title: 'Alice',
          subTitle1: 'purchased a listing',
          subTitle2: 'for CDT 3000',
          newNFT: '',
          issueLink: '',
          nftItem: '#A2CE3',
          repoLink: '',
          img: require('@/images/thumb/avatar-3.jpg'),
          timeText: '05/05/2022, 11:31'
        },
        {
          id: 4,
          title: 'Carol',
          subTitle1: 'Carol’s commit merged into repo',
          subTitle2: '',
          newNFT: '',
          issueLink: '',
          nftItem: '',
          repoLink: '#7234',
          img: require('@/images/thumb/avatar-3.jpg'),
          timeText: '05/04/2022, 11:34'
        },
      ],
    },
    createSingleData: {
      btnText: 'Manage collectible type',
      path: 'create',
      title: 'Create single collectible'
    },
    // payment method data
    paymentMethodData: {
      title: '儀表板',
      paymentMethodTabNav: [
        {
          id: 1,
          isActive: 'active',
          title: 'Balances',
          slug: 'balances-tab',
          bsTarget: '#balances'
        },

      ],
      // edit profile tab mobile
      paymentMethodTabNavMobile: [
        {
          id: 1,
          isActive: 'active',
          title: 'Balances',
          slug: 'balances-tab-mobile',
          bsTarget: '#balances-mobile'
        },
      ],
    },


    // prepaid-eth data
    prepaidData: {
      title: 'ETH餘額',
      content: '餘額可隨時在ETH內提取',
      contentTwo: '爲了增加餘額,請將ETH寄到下面的存款地址。 ETH在購買時將按美元市價估值。 煤氣費將從提取金額中扣除。',
      depositaddress: '存款地址',
      donotsend: '別把五十多歲的人送到這個地址',
      copy: '抄寫',
      newdeposits: '新存款經6次確認後會被記入貸方帳戶',
      withdraw: '撤消',
      Mintnewwork: '造新作品',
      balances: [
        {
          id: 1,
          title: '餘額',
          price: '2 ETH',
          priceTwo: '$330.00 USD'
        },
        {
          id: 2,
          title: '持倉位',
          price: '2 ETH',
          priceTwo: '$330.00 USD'
        }
      ]
    },
    // purchases and sale data
    purchaseAndSaleData: {
      mainTitle: '你的活動',
      purchaseData: [
        {
          id: 1,
          title: '在"github"問題上獲得上票 <a href="item-details" class="btn-link fw-medium">#5543</a>',
          dateText: '四天前'
        },
        {
          id: 2,
          title: '剛鑄造的 <a href="item-details" class="btn-link fw-medium">新版NFT</a>基於github的討論 <a href="item-details" class="btn-link fw-medium">#5543</a>',
          dateText: '四天前'
        },
        {
          id: 3,
          title: '購買目錄 <a href="item-details" class="btn-link fw-medium">#A2CE3</a> CDT3000用',
          dateText: '四天前'
        },
        {
          id: 4,
          title: 'Carl committee 合併爲 repo <a href="item-details" class="btn-link fw-medium">#7243</a>',
          dateText: '四天前'
        },
        {
          id: 5,
          title: '在"github"問題上獲得上票 <a href="item-details" class="btn-link fw-medium">#5543</a>',
          dateText: '四天前'
        },
        {
          id: 6,
          title: '剛鑄造的 <a href="item-details" class="btn-link fw-medium">新版NFT</a>基於github的討論 <a href="item-details" class="btn-link fw-medium">#5543</a>',
          dateText: '四天前'
        },
        {
          id: 7,
          title: '購買目錄 <a href="item-details" class="btn-link fw-medium">#A2CE3</a> CDT3000用',
          dateText: '四天前'
        },
        {
          id: 8,
          title: 'Carl committee 合併爲 repo <a href="item-details" class="btn-link fw-medium">#7243</a>',
          dateText: '四天前'
        },

      ],
    },
    // collection data
    collectionData: {
      title: '最高價值',
      collectionList: [
        {
          id: 1,
          title: '香港档案',
          price: '$26,220',
          img: require('@/images/thumb/nft-item1.png'),
          itemNum: '23445',
          path: '',
          bidding: '<a class="btn-link fw-medium">現正招標:</a> 2000 CDT (或 0.01 BTC,或 200 USD) (?)',
          created: '<a class="btn-link fw-medium">創建:</a> 2021-07-06憑(<a class="btn-link fw-medium">Adam</a>)',
          distribution: '<a class="btn-link fw-medium">分佈 :</a> (10%給市場營銷人員，20%給CDT，30%給社區，40%給作者基金)',
          description: '<a class="btn-link fw-medium">說明:</a> 在全世界都知道新冠肺炎威脅的2019年12月30日,中國醫生李文亮首次對致命的新冠肺炎發出警告後,接到了警方的訓誡信。'
        },
        {
          id: 2,
          title: '审查地图',
          price: '$24,497',
          img: require('@/images/thumb/nft-item2.png'),
          itemNum: '23446',
          path: '',
          bidding: '<a class="btn-link fw-medium">現正招標:</a> 2000 CDT (或 0.01 BTC,或 200 USD) (?)',
          created: '<a class="btn-link fw-medium">創建:</a> 2021-07-06憑(<a class="btn-link fw-medium">Adam</a>)',
          distribution: '<a class="btn-link fw-medium">分佈 :</a> (10%給市場營銷人員，20%給CDT，30%給社區，40%給作者基金)',
          description: '<a class="btn-link fw-medium">說明:</a> 在全世界都知道新冠肺炎威脅的2019年12月30日,中國醫生李文亮首次對致命的新冠肺炎發出警告後,接到了警方的訓誡信。'
        },
        {
          id: 3,
          title: '五月之声',
          price: '$24,497',
          img: require('@/images/thumb/nft-item3.png'),
          itemNum: '23447',
          path: '',
          bidding: '<a class="btn-link fw-medium">現正招標:</a> 2000 CDT (或 0.01 BTC,或 200 USD) (?)',
          created: '<a class="btn-link fw-medium">創建:</a> 2021-07-06憑(<a class="btn-link fw-medium">Adam</a>)',
          distribution: '<a class="btn-link fw-medium">分佈 :</a> (10%給市場營銷人員，20%給CDT，30%給社區，40%給作者基金)',
          description: '<a class="btn-link fw-medium">說明:</a> 在全世界都知道新冠肺炎威脅的2019年12月30日,中國醫生李文亮首次對致命的新冠肺炎發出警告後,接到了警方的訓誡信。'
        },
      ]
    },
    logoData: [
      {
        imgClass: 'logo-dark',
        style: "width:500px; height:200px",
        logoImg: require('@/images/logo-black.jpg'),
        path: '/home'
      },
      {
        imgClass: 'logo-light',
        logoImg: require('@/images/logo-white.png'),
        style: "width: 500px; height:200px;",
        path: '/home'
      }
    ],
  }

}

export default SectionData
