// All Section data goes here
let SectionData = {

  // Hero data three
  heroDataThree: {
    title: 'CDToken discover rare artworks by world class',
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
      path: 'create'
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
  },
}

export default SectionData
