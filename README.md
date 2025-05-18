# 🧠 Blog Dashboard

This project is a Blog Dashboard application built using React.
The goal is to visualize statistical charts and a blog list based on data retrieved from JSON files.


📦 Used Libraries
✅ Runtime Dependencies
Library	Description
react	JavaScript library for building user interfaces
react-dom	Entry point to the DOM for React
chart.js	Popular charting library for rendering charts using <canvas>
react-chartjs-2	React wrapper for Chart.js to make integration easy
react-infinite-scroll-component	Enables infinite scrolling by loading more content as the user scrolls


1. 📊 Chart Section (Top area)
3 different statistical indicators based on the summary.json data:

Number of blogs per category

Number of blogs per month (last 6 months)

Number of views per category

2. 📝 Blog List (Bottom area)
Blog list displayed in card format using data from blogs.json

Only 12 blogs are shown on initial load

As the user scrolls down, the next 12 blogs are loaded dynamically (infinite scroll)

3. 📱 Responsive Design
Responsive layout is implemented

The design adapts well to different screen sizes (mobile, tablet, desktop)

A container max-width limit of 1200px is applied to keep content centered and readable on large screens


