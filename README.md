# wad

## Project




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Relevant Packages

```
npm install talkjs --save
npm install vue-router
npm install firebase
npm install bootstrap-icons
npm install @vue/cli-service
npm install @vuepic/vue-datepicker
npm install @vue-stripe/vue-stripe
npm install -g sass

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Account Information 

```
You can create your own account and play around with it by uploading listings or commissions as it is fully functional for any new users! 
The accounts below are our accounts. 


Email: yimeng@gmail.com
Password:  123456

Email: zipcy@gmail.com
Password: password

Email: 
Password: 

```

### Note 

```
1. As we will have to pay to implement Stripe API flexibly, the price for listing can only be one of the following:  50, 100, 150 , 200 

2. If you want to run Stripe API on localhost instead of our deployed site, you have to go to buyPage.vue in views folder. Under created(), replace 'https://curious-frangollo-807bf4.netlify.app/buy/' in this.cancelURL with '{your_localhost}/buy/' and 'https://curious-frangollo-807bf4.netlify.app/success/' with '{your_localhost}/success/' 

3. You have to put the .env file that is separately attached into the root directory for APIs to work. 

```


