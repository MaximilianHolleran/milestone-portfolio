# Project Milestone-Portfolio

Created By:

| Max | Moe | Luis | Andres |

A group project including all of our portfolios and past projects

## Tech Usage

**CSS Framework:** Bootstrap

**Stack:** MongoDB, Express, NodeJS

**Server-Side Rendering:** Is this VITE or JSX

**Node Modules:** dotenv, vite-express

## Routes

| Method | Path            | Purpose                                        |
| ------ | --------------- | ---------------------------------------------- |
| GET    | `/`             | Home page                                      |
| GET    | `/api/reviews`  | Live reviews page                              |
| POST   | `/api/reviews`  | Create new review                              |
| GET    | `/reviews/:id`  | Details on single review                       |
| PATCH  | `/reviews/:id`  | Update a single review                         |
| DELETE | `/reviews/:id`  | Delete a particular review                     |
| ---    | ---             | ---                                            |
| GET    | `/api/contacts` | Contactss page                                 |
| POST   | `/api/contacts` | Create new contact                             |
| GET    | `/contacts/:id` | Details on single (or taken) contact           |
| PATCH  | `/contacts/:id` | Update single contact status to married        |
| DELETE | `/contacts/:id` | Delete a particular contact (forever </3)      |
| GET    | `*`             | 404 page (matches any route not defined above) |

## Database

### contacts

| Field    | Type      |
| -------- | --------- |
| \_id     | Object ID |
| name     | String    |
| portrait | String    |
| socials  | String    |
| resume   | String    |
| email    | String    |

### reviews

| Field   | Type      |
| ------- | --------- |
| \_id    | Object ID |
| author  | String    |
| stars   | Number    |
| email   | String    |
| content | String    |

## Planning

### User Stories

Andres and Max hit it from the back and it was lovely

Moe and Luis hit it from the front

## Notes

#### Extra notes:

Milestone project 2

ReviewForm - review form submit

contact - contact form submit, social links,

gallery - mp1 games, with gifs of games and hover over gifs to be able to click on the github and to be able to go to netlify link, description of game

navbar - does what it sounds like

home - animated cyberpunk aesthetic
