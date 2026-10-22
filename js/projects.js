/* Edit this list to add or change projects. Images live in the img/ folder. */
window.PROJECTS=[
 {
  "t": "Competitor Sales Analysis",
  "cat": "Sales",
  "c": "#7C5CFF",
  "art": "dash",
  "hook": "Are we really beating the competition, and where are we losing?",
  "sum": "Internal and competitor sales in one Power BI report, with a star schema, DAX KPIs, AI visuals and bookmarks for a guided story.",
  "built": [
   "Combined several international sales CSV files and merged them with the main sales table to build the competitor dataset",
   "Cleaned it in Power Query: nulls, data types and formats",
   "Fixed a broken Sales to Geography relationship with a Country + ZipCode key on both sides",
   "Modeled a star schema across Sales, Products, Manufacturer, Geography and Date, plus a custom DAX date table",
   "Wrote DAX for revenue, previous-year sales, % growth, market share and units sold",
   "Added an AI Key Influencers page to show what drives revenue"
  ],
  "kpi": [
   [
    "$51.47M",
    "total revenue"
   ],
   [
    "67.63%",
    "year-over-year growth"
   ],
   [
    "19.63%",
    "Sintec market share"
   ],
   [
    "143K",
    "units sold"
   ]
  ],
  "tools": [
   [
    "powerbi",
    "Power BI"
   ],
   [
    "dax",
    "DAX"
   ],
   [
    "pq",
    "Power Query"
   ]
  ],
  "imgs": [
   "p1_1.webp",
   "p1_2.webp",
   "p1_3.webp",
   "p1_4.webp"
  ],
  "caps": [
   "Competitor sales overview with market share",
   "Key influencers and top segments",
   "Star schema data model",
   "Cleaning data in Power Query"
  ],
  "gh": "https://github.com/Abdelrahmanzezo/Case-study-Competitor-Sales-Analysis-in-Power-BI",
  "cs": "https://www.datascienceportfol.io/abdulrahman_mohamed/projects/7"
 },
 {
  "t": "Healthcare Data in Power BI",
  "cat": "Healthcare",
  "c": "#00D1FF",
  "art": "hbar",
  "hook": "What keeps patients in hospital longer, and what does it cost?",
  "sum": "New York state hospital discharge data for elective hip replacement, explored in Power BI to find efficiency gaps between hospitals.",
  "built": [
   "Cleaned and structured data for 151 hospitals and 26,000+ discharges",
   "Compared hospitals on length of stay (LOS) and cost per discharge",
   "Found the hospitals with the highest LOS and cost to benchmark against",
   "Ran a root cause analysis on severity of illness, hospital size and patient age",
   "Built an interactive dashboard that highlights high-cost hospitals, LOS trends and the effect of patient disposition"
  ],
  "kpi": [
   [
    "151",
    "hospitals"
   ],
   [
    "26K+",
    "discharges analyzed"
   ],
   [
    "2.65 days",
    "average length of stay"
   ],
   [
    "$21K",
    "average cost per discharge"
   ]
  ],
  "tools": [
   [
    "powerbi",
    "Power BI"
   ],
   [
    "dax",
    "DAX"
   ],
   [
    "pq",
    "Power Query"
   ]
  ],
  "imgs": [
   "p2_1.webp",
   "p2_2.webp",
   "p2_3.webp",
   "p2_4.webp"
  ],
  "caps": [
   "Hospital profile",
   "LOS comparison and key influencers",
   "Benchmarking view",
   "Report home page"
  ],
  "gh": "https://github.com/Abdelrahmanzezo/Case-Study-Analyzing-Healthcare-Data-in-Power-BI",
  "cs": "https://www.datascienceportfol.io/abdulrahman_mohamed/projects/6"
 },
 {
  "t": "Sales Performance and E-Commerce",
  "cat": "E-commerce",
  "c": "#FF4D8D",
  "art": "area",
  "hook": "Where is e-commerce growing faster than the rest of the industry?",
  "sum": "Industry sales benchmarked against e-commerce platforms to find trends, growth gaps and ways to improve.",
  "built": [
   "Collected and modeled the data in Snowflake",
   "Cleaned and prepared it in Power Query",
   "Built DAX measures for net sales, target and net profit",
   "Designed dashboard pages for the overview, net sales over the years and market share across competitors",
   "Recommended improvement strategies from the gaps found. The repo also includes the project presentation (PPTX)"
  ],
  "kpi": [
   [
    "$883.05M",
    "net sales"
   ],
   [
    "$653.82M",
    "target sales"
   ],
   [
    "$327.63M",
    "net profit"
   ],
   [
    "15%",
    "revenue increase from the strategies"
   ]
  ],
  "tools": [
   [
    "snowflake",
    "Snowflake"
   ],
   [
    "powerbi",
    "Power BI"
   ],
   [
    "dax",
    "DAX"
   ],
   [
    "pq",
    "Power Query"
   ]
  ],
  "imgs": [
   "p3_1.webp",
   "p3_2.webp",
   "p3_3.webp"
  ],
  "caps": [
   "Overview: net sales, target and profit",
   "Net sales over the years",
   "Market share across competitors"
  ],
  "gh": "https://github.com/Abdelrahmanzezo/Sales-Performance-Analysis-and-E-commerce-benchmarketing",
  "cs": "https://www.datascienceportfol.io/abdulrahman_mohamed/projects/5"
 },
 {
  "t": "Customer Churn Analysis",
  "cat": "Telecom",
  "c": "#FFB020",
  "art": "funnel",
  "hook": "Why are Databel customers leaving, and who is next?",
  "sum": "A churn deep dive for Databel, a fictitious telecom provider, built in Power BI to show who leaves and why.",
  "built": [
   "Overview page with churn rate, total customers and the reasons behind churn",
   "Churn rate by segment: consumption patterns and unlimited data plans",
   "DAX measures for average service calls, extra data charges, international charges and churn rate",
   "Age-group bins to compare customers and churned customers in each group",
   "Extra views on contract type and payment method"
  ],
  "kpi": [
   [
    "26.86%",
    "churn rate"
   ],
   [
    "6,687",
    "customers"
   ],
   [
    "1,796",
    "churned customers"
   ],
   [
    "8%",
    "potential retention gain"
   ]
  ],
  "tools": [
   [
    "powerbi",
    "Power BI"
   ],
   [
    "excel",
    "Excel"
   ]
  ],
  "imgs": [
   "p4_1.webp",
   "p4_2.webp",
   "p4_3.webp",
   "p4_4.webp",
   "p4_5.webp"
  ],
  "caps": [
   "Overview",
   "Insights",
   "Churn demographics",
   "Contract type",
   "Extra charges"
  ],
  "gh": "https://github.com/Abdelrahmanzezo/Customer-Churn-Analysis-in-Power-BI",
  "cs": "https://www.datascienceportfol.io/abdulrahman_mohamed/projects/0"
 },
 {
  "t": "HR Analytics: Attrition and Performance",
  "cat": "HR",
  "c": "#18C99B",
  "art": "heat",
  "hook": "Who is leaving the company, and why?",
  "sum": "An HR report on the Atlas Lab dataset that tracks attrition and performance across the company.",
  "built": [
   "Modeled the data with a snowflake schema",
   "Explored the data to find attrition trends and patterns",
   "Wrote DAX measures to answer the core business questions",
   "Designed a four-page report: overview, attrition, demographics and performance tracker"
  ],
  "kpi": [
   [
    "1,470",
    "employees"
   ],
   [
    "16.1%",
    "attrition rate"
   ],
   [
    "237",
    "inactive employees"
   ],
   [
    "5%",
    "retention improvement supported"
   ]
  ],
  "tools": [
   [
    "powerbi",
    "Power BI"
   ],
   [
    "dax",
    "DAX"
   ],
   [
    "pq",
    "Power Query"
   ]
  ],
  "imgs": [
   "p5_1.webp",
   "p5_2.webp",
   "p5_3.webp",
   "p5_4.webp"
  ],
  "caps": [
   "Overview",
   "Attrition",
   "Demographics",
   "Performance tracker"
  ],
  "gh": "https://github.com/Abdelrahmanzezo/HR-Aanalytics-Employee-Attrition-Performance",
  "cs": "https://www.datascienceportfol.io/abdulrahman_mohamed/projects/1"
 },
 {
  "t": "SQL Challenges and Solutions",
  "cat": "SQL",
  "c": "#4DA3FF",
  "art": "code",
  "hook": "Can one clean query replace ten messy ones?",
  "sum": "My solutions to SQL problems from CodeSignal, LeetCode and HackerRank, saved as 60+ query files.",
  "built": [
   "Window functions, aggregations, joins, CASE statements and CTEs",
   "Exploration queries on a sales table: distinct values, grouping and filtering",
   "Investigation-style puzzles such as suspect investigation and security breach",
   "Problems on dates, countries, books, grades and net income"
  ],
  "kpi": [
   [
    "60+",
    "query files"
   ],
   [
    "3",
    "practice platforms"
   ]
  ],
  "tools": [
   [
    "sql",
    "SQL"
   ]
  ],
  "imgs": [
   "p6_1.webp",
   "p6_2.webp",
   "p6_3.webp"
  ],
  "caps": [
   "From the repo: top 5 average grades",
   "From the repo: exploring a sales table",
   "From the repo: net income"
  ],
  "gh": "https://github.com/Abdelrahmanzezo/SQL-practice-code-signal-",
  "cs": "https://www.datascienceportfol.io/abdulrahman_mohamed/projects/2"
 },
 {
  "t": "Bicycle Sales and Rental Analysis",
  "cat": "Excel",
  "c": "#FF8A3D",
  "art": "pivot",
  "hook": "When do people rent bikes the most, and what changes with the season?",
  "sum": "An Excel dashboard on the Seoul bicycle rental dataset: pivot tables, four charts and slicers that filter everything.",
  "built": [
   "Explored and prepared the Seoul bicycle rental dataset",
   "Built the pivot tables behind every chart, with a Dashboard sheet and a Quick Report sheet",
   "Four charts: average rentals per month, rentals by season through 2018, holiday against no holiday, and each season's share of rentals",
   "Slicers for year, season, holiday and month filter the whole dashboard",
   "The repo holds six Excel workbooks in total, including bike sales, a store dashboard, coffee orders and food prices"
  ],
  "kpi": [
   [
    "37%",
    "of rentals happen in summer"
   ],
   [
    "982",
    "peak monthly average (June)"
   ],
   [
    "4",
    "slicers: year, season, holiday, month"
   ],
   [
    "6",
    "Excel workbooks in the repo"
   ]
  ],
  "tools": [
   [
    "excel",
    "Excel"
   ]
  ],
  "imgs": [
   "p7_1.webp"
  ],
  "caps": [
   "Rental Bikes Dashboard in Excel, with slicers for year, season, holiday and month"
  ],
  "gh": "https://github.com/Abdelrahmanzezo/Excel_Data_Analysis",
  "cs": "https://www.datascienceportfol.io/abdulrahman_mohamed/projects/4"
 },
 {
  "t": "Python Data Analysis Projects",
  "cat": "Python",
  "c": "#9D87FF",
  "art": "scatter",
  "hook": "What do the numbers say before the chart does?",
  "sum": "13 Jupyter notebooks that take real datasets from cleaning to charts and findings.",
  "built": [
   "Covid-19 in India, Netflix titles, Spotify tracks, Diwali sales, house prices and student performance",
   "Smartwatch and sleep data: calories against steps, activity and sleep patterns",
   "Startup expansion and food price analyses",
   "Cleaning, transforming and visualizing with Pandas, NumPy, Matplotlib, Seaborn and scikit-learn"
  ],
  "kpi": [
   [
    "13",
    "notebooks"
   ],
   [
    "5",
    "core libraries"
   ]
  ],
  "tools": [
   [
    "python",
    "Python"
   ]
  ],
  "imgs": [
   "p8_1.webp",
   "p8_2.webp",
   "p8_3.webp",
   "p8_4.webp",
   "p8_5.webp",
   "p8_6.webp",
   "p8_7.webp"
  ],
  "caps": [
   "A few charts from the notebooks",
   "Smartwatch: calories vs steps",
   "Food prices by item",
   "Spotify: loudness vs energy",
   "Netflix: releases per year",
   "Covid-19: top states by active cases",
   "Diwali sales by age group"
  ],
  "gh": "https://github.com/Abdelrahmanzezo/Data-Analysis-projects",
  "cs": "https://www.datascienceportfol.io/abdulrahman_mohamed/projects/3"
 }
];
