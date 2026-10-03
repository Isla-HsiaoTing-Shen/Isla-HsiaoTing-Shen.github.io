/* =========================================================
   Site content. Edit this file to update the website.
   - Text goes inside "double quotes"
   - Separate items with a comma ,
   - Wrap text in ==like this== to highlight it
   - Leave a field empty "" to hide it
   ========================================================= */

window.SITE_DATA = {

  /* ---------- Profile ---------- */
  profile: {
    name: "Isla Shen",
    role: "Business Analyst | Data Analyst | Digital Marketing",
    summary:
      "I'm a Master of IT graduate from UTS moving into business and data analysis. I turn business questions into clear requirements, then into data pipelines, models and dashboards people can act on. Before IT, I worked in digital marketing, where I learned to read performance data and keep sales teams aligned on what it meant.",
    email: "islashen17@gmail.com",
    linkedin: "https://www.linkedin.com/in/isla-shen-1b2047298/",
    github: "https://github.com/Isla-HsiaoTing-Shen",
  },

  /* ---------- Skills ---------- */
  skills: [
    { group: "Business analysis", items: ["Requirements elicitation", "Business process analysis", "Stakeholder engagement", "Solution validation", "Root cause analysis"] },
    { group: "Data", items: ["SQL", "Python", "ETL pipelines"] },
    { group: "Reporting", items: ["Power BI", "Tableau", "Looker Studio", "Excel"] },
    { group: "Cloud & systems", items: ["Azure SQL", "Salesforce (Force.com)", "REST APIs"] }
  ],

  /* ---------- Projects (top item shows first) ---------- */
  projects: [
    {
      title: "RentWise NSW: Suburb Suitability Analysis Tool",
      context: "Independent project",
      question: "Where in Sydney can a renter afford to live without giving up what matters to them?",
      highlights: [
        "Built a weighted, persona-based scoring model that ranks ==28 Sydney suburbs== on affordability and liveability.",
        "Integrated ==4 NSW government data sources== through an ETL/ELT pipeline, loading ==600,000+ records== into a 9-table Azure SQL warehouse with documented source-to-target mappings.",
        "Found and fixed a pipeline defect that was silently dropping ==40,000 records==, then documented data lineage and validation rules so results can be reproduced."
      ],
      tools: ["Python", "pandas", "Azure SQL", "Streamlit", "OpenStreetMap API"],
      powerbi: "",
      links: [
        { label: "View code on GitHub", url: "https://github.com/Isla-HsiaoTing-Shen/RentWise" }
      ]
    }
    ,{
      title: "FreshMart Rewards: Loyalty Member Churn Analysis",
      context: "Personal project · In progress · Simulated supermarket loyalty data",
      question: "Member churn is rising. Which members are at risk, and how can we win them back with effective offers?",
      highlights: [
        "Designed a 10-table PostgreSQL database and loaded ==4M+== rows with reproducible SQL scripts",
        "Defined churn with data, not guesswork: only ==17%== of members return after 8 weeks away, so churn = 8 weeks without a purchase",
        "Showed monthly churn rose ==~50%== (2.4% → 3.5%) and drilled down to ==3 stores== in Brisbane North where churn tripled from Sep 2025",
        "Built RFM segments and identified ==427== high-value at-risk members, representing ==~$860K== in annual revenue",
        "Spotted a reverse-causality trap in offer data that would have led to a misleading recommendation"
      ],
      tools: ["SQL", "PostgreSQL", "Git"],
      powerbi: "",
      links: [
        { label: "View code on GitHub", url: "https://github.com/Isla-HsiaoTing-Shen/freshmart-rewards-analysis" }
      ]
    }
    /* ===== Template: copy into the list above =====
    ,{
      title: "Project title",
      context: "Personal project",
      question: "What business question does this answer?",
      highlights: [
        "What you did, how, and the result (e.g. ==38%==)",
        "Second point"
      ],
      tools: ["Power BI", "SQL"],
      powerbi: "",   // Power BI "Publish to web" embed URL
      links: [
        { label: "View code on GitHub", url: "https://github.com/..." },
        { label: "Open dashboard", url: "https://app.powerbi.com/view?r=..." }
      ]
    }
    ============================================= */
  ],

  /* ---------- Experience (most recent first) ---------- */
  experience: [
    {
      role: "Project Manager",
      company: "EVAHELD",
      location: "Sydney",
      dates: "Apr 2025 – Jul 2025",
      bullets: [
        "Tested the website and app, traced each defect to its likely cause in the interface or code, and worked with engineers to confirm fixes met business requirements.",
        "Assigned defects to the relevant weekly tasks, tracked progress against the development schedule, and followed up with engineers when work slipped.",
        "Reviewed user flows from a first-time customer's point of view and recommended changes to features, design and flow, balancing the founder's vision with engineering constraints."
      ]
    },
    {
      role: "Digital Marketing Specialist",
      company: "Techmark Precision Instrument Company",
      location: "Taipei",
      dates: "Aug 2021 – Mar 2024",
      bullets: [
        "Increased organic inquiries by ==38%== by planning and running the company's SEO strategy independently, tracked with Google Search Console and Ahrefs.",
        "Managed Google Ads within a fixed monthly budget, using Looker Studio dashboards to monitor keyword performance and decide where to adjust.",
        "Reported live campaign performance to the sales team each week and coordinated ad copy revisions based on keyword and copy data.",
        "Segmented B2B customers by industry in the company CRM to send targeted email campaigns for seminars and trade shows."
      ]
    },
    {
      role: "Product Marketing Analyst",
      company: "JMicron Technology Corporation",
      location: "Taipei",
      dates: "Mar 2021 – Jun 2021",
      bullets: [
        "Evaluated ==67== potential influencer partners against scoring-based criteria to support management's partnership decision.",
        "Planned monthly content themes and contacted overseas content creators to discuss collaboration terms."
      ]
    }
  ],

  /* ---------- Leadership & community ---------- */
  community: [
    {
      title: "UTS Lucy Mentoring Program",
      org: "University of Technology Sydney",
      dates: "Feb 2026 – Oct 2026",
      bullets: [
        "Took part in the program's professional development workshops."
      ],
      image: "",          // e.g. "images/lucy.jpg"
      imageAlt: ""
    }
  ],

  /* ---------- Education ---------- */
  education: [
    {
      degree: "Master of Information Technology",
      school: "University of Technology Sydney",
      dates: "Aug 2024 – Jul 2026",
      notes: "Data Analytics, Databases, SAS Predictive Business Analytics, Data Visualisation, Enterprise Information Systems." 
         "Took part in a hackathon covering product positioning, target users and website testing."
    },
    {
      degree: "Bachelor of International Business",
      school: "Feng Chia University",
      dates: "Sep 2017 – May 2021",
      notes: "Big Data Analytics, Digital Marketing Data Analytics"
    }
  ],

  /* ---------- Certifications ---------- */
  certifications: [
    { name: "Intermediate Python", issuer: "DataCamp", year: "2026", url: "" },
    { name: "Introduction to Python", issuer: "DataCamp", year: "2026", url: "" },
    { name: "Power BI Data Processing and Visualization Application Practices", issuer: "", year: "2023", url: "" }
  ],

  /* ---------- Footer ---------- */
  lastUpdated: "October 2026"
};
