# Search Engine
This is a real time search engine that shows what people searched for the most.

## Notes
  In this project, I implemented a real-time search feature with analytics to track the most searched items. To ensure user data remains distinct, I separated visitor data by capturing the user agent, allowing for anonymous usage without mixing data.

   For background processing, I utilized Active Jobs to handle the creation and management of analytics. To support real-time scalability, I propose integrating Redis with Active Jobs for improved performance and queue management.



## Live Link
[Live Link](https://realtimesearch-ja93.onrender.com/)

## Built With

- Ruby on Rails
- Postgresql
- stimulus Js


## Getting Started

To get a local copy up and running follow these simple example steps.

- git clone https://github.com/assadounto/realtime-search

- cd search-engine


### Prerequisites
To start please have the following running
- Ruby
- Rails
- PostgresSQL


### Setup

Install gems with:

```
bundle install
```

Setup database with:

```
rails db:create
rails db:migrate
```

Start server with:

```
rails server
```

Open ```http://localhost:3000/``` in your browser.


### Run tests

Install npm with:

```
npm i
```

Install rspec with:

```
bundle install
```

and

```
rails generate rspec:install
```

run the test with:

```
rspec spec
```



## Author

👤 **Rich Adu**

- GitHub: [@assadounto](https://github.com/assadounto)
- Twitter: [@adukyerer](https://twitter.com/adukyerer)



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/assadounto/realtime-search).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

- Credits go to Emil and rest of team at [HelpJuice](https://www.Helpjuice.com)


## 📝 License

This project is [MIT](./LICENCE) licensed.