// All Section data goes here
let SectionData = {

  // Hero data three
  heroDataThree: {
    title: 'CDToken discover rare artworks',
    content: 'CDToken, NFT Marketplace without any technical knowledge'
  },
  copyTitle: 'Copyright © 2022 CDToken.',
  // Header data
  headerData: {
    btnText: 'Connect Wallet',
    inputPlaceholderText: 'Search item here...',
    menuList: {
      title: 'Home',
      navList: [
        {
          id: 1,
          title: 'Welcome',
          path: '/'
        },
      ]
    },
    menuList2: {
      title: 'CDToken',

    },
    menuList3: {
      title: 'Pages',
      navList: [
        {
          id: 1,
          title: 'Dashboard',
          path: '/dashboard'
        },
        {
          id: 2,
          title: 'Create single',
          path: '/create-single'
        },
      ]
    },
    menuList4: {
      title: 'User Panel',

    }
  },
  // Hero btn data
  btnDataFour: [
    {
      btnClass: 'btn-lg btn-grad',
      title: 'Register Now',
      path: 'register'
    },
    {
      btnClass: 'btn-lg btn-outline-dark',
      title: 'Create Store',
      path: 'create-single'
    }
  ],
  // footer data
  footerData: {
    content: "The world's first and largest digital marketplace for CDToken.",
    footerList: [
      {
        id: 1,
        title: 'CDToken',
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
            title: 'About',
            path: 'about-us'
          },
          {
            title: 'Blog',
            path: 'blog'
          },
          {
            title: 'Contact',
            path: 'contact'
          },
          {
            title: 'Careers',
            path: 'about-us'
          }
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
  loginData: {
    img: require('@/images/thumb/remote.png'),
    title: 'Welcome!',
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
        path: 'github.com/login/oauth/'
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
        issueLink: '#2343',
        nftItem: '',
        repoLink: '',
        img: require('@/images/thumb/avatar.jpg'),
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
  // purchases and sale data
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
}

export default SectionData
