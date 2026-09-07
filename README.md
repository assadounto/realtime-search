<div align="center">

# Real-Time Search Analytics 🔎

### Rails search experience with analytics for trending queries

A Ruby on Rails application that records search activity and surfaces the terms people search for most.

[Live Demo](https://realtimesearch-ja93.onrender.com/)

</div>

---

## What It Demonstrates

This project explores two connected problems:

1. Delivering a responsive search experience.
2. Capturing useful analytics around what users search for.

Search activity is associated with anonymous visitor context so analytics can be collected without requiring every visitor to create an account.

## Tech Stack

- Ruby on Rails 7.2
- Ruby
- PostgreSQL
- SQLite for supported local workflows
- Hotwire / Turbo
- Stimulus
- Active Job
- RSpec
- Docker
- Render

## Key Ideas

- Real-time search interaction
- Search analytics
- Trending-query visibility
- Anonymous visitor separation
- Background-job architecture
- Production deployment configuration
- Rails testing with RSpec

## Background Processing

Analytics work is designed around Rails Active Job. For higher-throughput production workloads, the queue layer can be backed by a dedicated system such as Redis-based workers.

## Local Setup

```bash
git clone https://github.com/assadounto/realtime-search.git
cd realtime-search
bundle install
rails db:create
rails db:migrate
rails server
```

Open `http://localhost:3000`.

## Tests

```bash
bundle exec rspec
```

## Deployment

The repository includes Docker and Render configuration for deployment workflows.

## Author

**Richmond Adu-Kyere**

- GitHub: [@assadounto](https://github.com/assadounto)
- LinkedIn: [Richmond Adu-Kyere](https://www.linkedin.com/in/richmond-adu-kyere-911693236)
