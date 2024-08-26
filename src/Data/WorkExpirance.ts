interface Experience {
    companyLogo: string;
    companyName: string;
    jobType: string;
    duration: string;
    location: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
    skills: string[];
}
const banklogo = "./assets/images/banklogo.png";

const experiences: Experience[] = [
    {
        companyLogo: banklogo,
        companyName: "Bank of Palestine",
        jobType: "Full-time",
        duration: "2 yrs 7 mos",
        location: "Ramallah, West Bank · On-site",
        position: "Solutions Architect",
        startDate: "Jan 2024",
        endDate: "Present",
        responsibilities: [
            "Participated in system development life cycle from requirements analysis through system implementation.",
            "Created and implemented innovative business solutions to support corporate objectives.",
            "Conducted post-sale requirements gathering, analysis, and documentation.",
            "Provided technical leadership and mentoring for junior team members, fostering a supportive learning environment that promoted skill development and career growth.",
            "Designed and implemented system security and data assurance.",
            "Optimized resource allocation across multiple projects by utilizing advanced project management tools and techniques for more efficient scheduling and task prioritization."
        ],
        skills: [
            "Data Architects",
            "Engineering Data Management",
            "+1 skill"
        ]
    },
    {
        companyLogo: banklogo,
        companyName: "Bank of Palestine",
        jobType: "Full-time",
        duration: "2 yrs 4 mos",
        location: "Ramallah, West Bank · On-site",
        position: "Software Engineer",
        startDate: "Feb 2022",
        endDate: "May 2024",
        responsibilities: [
            "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.",
            "Conducted thorough code reviews to identify potential areas for improvement, ultimately enhancing code quality across all projects handled by the team.",
            "Built databases and table structures for web applications.",
            "Created proofs of concept for innovative new solutions.",
            "Tuned systems to boost performance."
        ],
        skills: [
            "Automated Document Verification",
            "Temenos Kony",
            "+13 skills"
        ]
    },
    {
        companyLogo: "Sparky logo",
        companyName: "Sparky",
        jobType: "Freelance",
        duration: "1 yr",
        location: "Ramallah, West Bank · On-site",
        position: "Founder - CTO",
        startDate: "Sep 2023",
        endDate: "Present",
        responsibilities: [
            "Can serve as a valuable tool for financial professionals, traders, investment firms, and individual investors to gain insights into financial markets, identify trading opportunities, and make data-driven decisions.",
            "Managed financial, operational, and human resources to optimize business performance.",
            "Established and maintained strong relationships with customers, vendors, and strategic partners.",
            "Developed strong partnerships with other businesses to allow for collaboration and more significant opportunities for growth."
        ],
        skills: [
            "Data Architects",
            "Start-up Ventures",
            "+4 skills"
        ]
    }
];

export default experiences;
